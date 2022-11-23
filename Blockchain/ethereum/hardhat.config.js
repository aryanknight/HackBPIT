require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
const RPC_URL = process.env.RPC_URL
const MATIC_PRIVATE_KEY = process.env.MATIC_PRIVATE_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY
module.exports = {
    defaultNetwork: "hardhat",
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        mumbai: {
            url: RPC_URL,
            accounts: [MATIC_PRIVATE_KEY],
            chainId: 80001,
        },
    },
    etherscan: {
        apiKey: {
            polygonMumbai: POLYGONSCAN_API_KEY,
        },
    },
}
