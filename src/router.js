const express = require('express')
const AccountController = require('./controllers/AccountCOntroller.js')
const verifyIfAccountAlreadyExists = require('./middlewares/accountAlreadyExists.js')
const verifyIfAccountExists = require('./middlewares/accountExists.js')
const verifyIfValueIsNegative = require('./middlewares/negativeDeposit.js')

const router = express.Router()
const accountController = new AccountController()

router.get('/statement', verifyIfAccountExists, accountController.searchBankStatementOfAccount)
router.post('/account', verifyIfAccountAlreadyExists, accountController.createAccount)
router.put('/deposit', verifyIfAccountExists, verifyIfValueIsNegative, accountController.depositCash)
router.put('/withdraw', verifyIfAccountExists, verifyIfValueIsNegative, accountController.withdrawCash)
router.get('/statement/date', verifyIfAccountExists, accountController.searchBankStatementOfAccountByDate)
router.put('/account/update', verifyIfAccountExists, accountController.updateAccountData)
router.post('/accounts', accountController.getDataOfAllAccounts)

module.exports = router
