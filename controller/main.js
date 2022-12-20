const expressAsyncHandler = require('express-async-handler')
const config = require('../config')
const web3 = require("../config/web3Instance")

exports.getServerBalance = expressAsyncHandler(async (req, res) => {
    try {

        let serverBalance = await web3.eth.getBalance(config.account)
        serverBalance = await web3.utils.fromWei(serverBalance, 'ether')
        
        let serverAddress = config.account
        let network = await web3.eth.net.getNetworkType()

        const result = {
            serverAddress,
            serverBalance,
            network
        }

        return res.json({success: true, message: "Server Info", result})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Something went wrong' })
    }
})