//imports
const { ethers, run, network } = require("hardhat")
//async
async function main() {
    const recordFactory = await ethers.getContractFactory("record")
    console.log("Deploying contract....")
    const record = await recordFactory.deploy()
    await record.deployed()
    console.log(`Deployed contract to: ${record.address}`)
    if (network.config.chainId === 80001 && process.env.POLYGONSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await record.deployTransaction.wait(6)
        await verify(record.address, [])
    }
}
async function verify(contractAddress, args) {
    console.log("Verifying ....")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArgs: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("already verified")
        } else {
            console.log(e)
        }
    }
}
//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
