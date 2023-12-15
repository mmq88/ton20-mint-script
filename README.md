# ton20-mint-script

<p align="left">
<a href="./README.md"><img alt="English" src="https://img.shields.io/badge/English-%238193b3?style=for-the-badge"></a>&thinsp;
<a href="./README-t.md"><img alt="繁體中文" src="https://img.shields.io/badge/繁體中文-%238193b3?style=for-the-badge"></a>&thinsp;
<a href="./README-s.md"><img alt="简体中文" src="https://img.shields.io/badge/简体中文-%238193b3?style=for-the-badge"></a>
</p>

> Thanks to the original repository author: [zfy666ci](https://github.com/zfy666ci/ton-mint)

This is the Docker version of the ton20 minting script, making it more convenient for users to utilize. This version includes features ensuring the limit on minting attempts and retries, to avoid unnecessary attempts after reaching the minting limit.

## Setup

Fill in your details in configs.json (the RPC endpoint usually doesn't need to be changed):

```json
{
  "rpcEndPoint": "https://ton.access.orbs.network/44A2c0ff5Bd3F8B62C092Ab4D238bEE463E644A2/1/mainnet/toncenter-api-v2/jsonRPC",
  "mnemonic": "mnemonic phrases (separate each word with a space)",
  "toAddr": "the address you want to send to",
  "number": 1, // the number of tokens you want to mint
  "ticker": "name of the inscription (ex:nano)",
  "retryCount": 10
  // the number of times you want to retry. This parameter is used to stop constant attempts when the server is
  // overloaded and transactions are rejected, to avoid wasting too much gas.
}
```

## Windows

1. Install [docker desktop](https://www.docker.com/products/docker-desktop/)。
2. Execute `run.bat`。

※Whenever you need to change the target, modify settings, or run another round, simply make the necessary changes to the settings (if you wish) and then execute `run.bat` again.

## MacOS

1. Install [docker desktop](https://www.docker.com/products/docker-desktop/) or use the following command.

```sh
brew install --cask docker
```

2. Execute `run.sh`。

※Whenever you need to change the target, modify settings, or run another round, simply make the necessary changes to the settings (if you wish) and then execute `run.sh` again.

## Ubuntu/Debian

1. Install [docker desktop](https://www.docker.com/products/docker-desktop/) or use the following command.

```sh
sudo apt-get update && \
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common && \
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && \
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" && \
sudo apt-get update && \
sudo apt-get install -y docker-ce

sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
sudo chmod +x /usr/local/bin/docker-compose
```

Verify installation:

```sh
docker -v
docker-compose -v
```

2. Execute `run.sh`。

※Whenever you need to change the target, modify settings, or run another round, simply make the necessary changes to the settings (if you wish) and then execute `run.sh` again.
