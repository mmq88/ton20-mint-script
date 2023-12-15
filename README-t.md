# ton20-mint-script

<p align="left">
<a href="./README.md"><img alt="English" src="https://img.shields.io/badge/English-%238193b3?style=for-the-badge"></a>&thinsp;
<a href="./README-t.md"><img alt="繁體中文" src="https://img.shields.io/badge/繁體中文-%238193b3?style=for-the-badge"></a>&thinsp;
<a href="./README-s.md"><img alt="简体
中文" src="https://img.shields.io/badge/简体
中文-%238193b3?style=for-the-badge"></a>
</p>

> 感謝原倉庫作者: [zfy666ci](https://github.com/zfy666ci/ton-mint)

此為 docker 版本的 ton20 鑄造腳本，同時也讓用戶可以更方便的使用此腳本。
此版本加上了確保鑄造次數以及重複嘗試次數上限功能，以避免鑄造已達上限仍繼續嘗試鑄造。

## 設置

在 `configs.json` 中，填入你的資訊（RPC 端點基本上不用動）：

```json
{
  "rpcEndPoint": "https://ton.access.orbs.network/44A2c0ff5Bd3F8B62C092Ab4D238bEE463E644A2/1/mainnet/toncenter-api-v2/jsonRPC",
  "mnemonic": "註記詞 (每個單字間用空格分開)",
  "toAddr": "你要發送的地址",
  "number": 1, // 你要鑄造的數量
  "ticker": "銘文的名稱 (ex:nano)",
  "retryCount": 10 // 你要重複嘗試的次數。當伺服器過載時，交易會被拒絕，此參數用於結束不斷的嘗試避免浪費太多 gas。
}
```

## Windows

1. 安裝 [docker desktop](https://www.docker.com/products/docker-desktop/)。
2. 執行 `run.bat`。

※每次要變更目標或是修改設定或是再跑一輪只要更改完設定(如果你想要)後再執行 `run.bat` 即可。

## MacOS

1. 安裝 [docker desktop](https://www.docker.com/products/docker-desktop/) 或 使用以下指令。

```sh
brew install --cask docker
```

※每次要變更目標或是修改設定或是再跑一輪只要更改完設定(如果你想要)後再執行 `run.sh` 即可。

2. 執行 `run.sh`。

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

驗證安裝結果：

```sh
docker -v
docker-compose -v
```

2. 執行 `run.sh`。

※每次要變更目標或是修改設定或是再跑一輪只要更改完設定(如果你想要)後再執行 `run.sh` 即可。
