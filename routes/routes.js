const express = require("express")
const mainCtrl = require('../controller/main')

const router = express.Router()

router.route("/getServerInfo").get(mainCtrl.getServerBalance)

module.exports = router