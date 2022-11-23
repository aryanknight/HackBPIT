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
    const getHash = await record.get()
    console.log(getHash)
    const getCount = await record.getCount()
    console.log(getCount)
    const setHash = await record.set("101")
    await setHash.wait(1)
    const updatedHash = await record.get()

    console.log(updatedHash)
    const setHash2 = await record.set("102")
    await setHash2.wait(1)
    const updatedHash2 = await record.get()

    console.log(updatedHash2)
    const updatedHashCount = await record.getCount()

    console.log(updatedHashCount)
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
