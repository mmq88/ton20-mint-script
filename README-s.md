# ton20-mint-script

<p align="left">
<a href="./README.md"><img alt="English" src="https://img.shields.io/badge/English-%238193b3?style=for-the-badge"></a>&thinsp;
<a href="./README-t.md"><img alt="繁體中文" src="https://img.shields.io/badge/繁體中文-%238193b3?style=for-the-badge"></a>&thinsp;
<a href="./README-s.md"><img alt="简体中文" src="https://img.shields.io/badge/简体中文-%238193b3?style=for-the-badge"></a>
</p>

> 感谢原仓库作者: [zfy666ci](https://github.com/zfy666ci/ton-mint)

这是 ton20 铸币脚本的 Docker 版本，使用户更方便地使用此脚本。此版本增加了确保铸造次数及重复尝试次数上限的功能，以避免铸造已达上限仍继续尝试铸造。

## 设置

在 `configs.json` 中，填入你的信息（RPC 端点基本上不用动）：
※注意，amount（数量）需要是对方认可的数额，否则交易可能会无效。可以通过手动交易查看 JSON 数据中的实际 amount（amt）并填入 configs 的 "amount" 栏位。(例如：data:application/json,{"p":"ton-20","op":"mint","tick":"bolt20","amt":"100000000000"}，amount="100000000000")

```json
{
  "rpcEndPoint": "https://ton.access.orbs.network/44A2c0ff5Bd3F8B62C092Ab4D238bEE463E644A2/1/mainnet/toncenter-api-v2/jsonRPC",
  "mnemonic": "Your mnemonic (use space to separate words)",
  "toAddr": "Your address",
  "round": 1,
  "ticker": "your target ticker",
  "amount": "1000000000",
  "retryCount": 10 // 你要重复尝试的次数。当服务器过载时，交易会被拒绝，此参数用于结束不断的尝试避免浪费太多 gas。
}
```

## Windows

1. 安装 [docker desktop](https://www.docker.com/products/docker-desktop/)。
2. 运行 `run.bat`。

※每次需要更改目标或修改设置，或者想要再运行一轮，只需在修改完设置（如果您需要的话）后再执行 `run.bat` 即可。

## MacOS

1. 安裝 [docker desktop](https://www.docker.com/products/docker-desktop/) 或 使用以下指令。

```sh
brew install --cask docker
```

2. 运行 `run.sh`。

※每次需要更改目标或修改设置，或者想要再运行一轮，只需在修改完设置（如果您需要的话）后再执行 `run.sh` 即可。

## Ubuntu/Debian

1. 安裝 [docker desktop](https://www.docker.com/products/docker-desktop/) 或 使用以下指令。

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

验证安装结果：

```sh
docker -v
docker-compose -v
```

2. 运行 `run.sh`。

※每次需要更改目标或修改设置，或者想要再运行一轮，只需在修改完设置（如果您需要的话）后再执行 `run.sh` 即可。
