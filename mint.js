const { TonClient, WalletContractV4, internal } = require("@ton/ton");
const { mnemonicToPrivateKey } = require("@ton/crypto");

const fs = require('fs');

const data = fs.readFileSync("./configs.json", "utf8");
const configs = JSON.parse(data);

(async function run() {
    if (!configs.rpcEndPoint && !configs.mnemonic && !configs.toAddr && !configs.round && !configs.ticker) {
        console.log("Make sure you have configs.json file with rpcEndPoint, mnemonic, toAddr, num and ticker fields.");
        return;
    }

    if (configs.round <= 0) {
        console.log("Round of transactions must be greater than 0.");
        return;
    }

    const mnemonics = configs.mnemonic.split(" ");
    const keyPair = await mnemonicToPrivateKey(mnemonics);
    const workchain = 0;
    const wallet = WalletContractV4.create({
        workchain,
        publicKey: keyPair.publicKey,
    });

    const client = new TonClient({
        endpoint: configs.rpcEndPoint,
    });

    const contract = client.open(wallet);

    const txPack = []
    console.log("start sending transactions...");

    // Pack up to 4 messages in a transaction.
    for (let i = 0; i < 4; i++) {
        txPack.push(internal({
            to: configs.toAddr,
            value: "0",
            body: `data:application/json,{"p":"ton-20","op":"mint","tick":"${configs.ticker}","amt":"${configs.amount}"}`
        }))
    }
 
    // Send nth transactions.
    let retryCount = 1;

    for (let i = 0; i < configs.round; ) {
        if (retryCount >= configs.retryCount) {
            console.log("End script due to retry count exceeded.");
            return;
        }

        try {
            let seqno = await contract.getSeqno();

            await contract.sendTransfer({
                seqno: seqno,
                secretKey: keyPair.secretKey,
                validUntil: Math.floor(Date.now() / 1e3) + 600,
                messages: txPack,
            });

            console.log(`${i + 1}: Successed`);
            i++;
            retryCount = 1;

        } catch (e) {
            console.log(`${i + 1}: Rejected due to server overload or settings are incorrect(Confirm that each arg is correct).`);
            console.log("Try again...");
            retryCount++;
        }
    }

    console.log("Done");
}());
