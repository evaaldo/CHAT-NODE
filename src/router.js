const express = require('express')
const AccountController = require('./controllers/AccountCOntroller.js')
const verifyIfAccountAlreadyExists = require('./middlewares/accountAlreadyExists.js')
const verifyIfAccountExists = require('./middlewares/accountExists.js')
const verifyIfValueIsNegative = require('./middlewares/negativeDeposit.js')
const verifyIfBalanceIsUnavaiable = require('./middlewares/unavaiableBalance.js')

const router = express.Router()
const accountController = new AccountController()

router.get('/statement', verifyIfAccountExists, accountController.searchBankStatementOfAccount)
router.post('/account', verifyIfAccountAlreadyExists, accountController.createAccount)
router.put('/deposit', verifyIfAccountExists, verifyIfValueIsNegative, accountController.depositCash)
router.put('/withdraw', verifyIfBalanceIsUnavaiable, verifyIfAccountExists, verifyIfValueIsNegative, accountController.withdrawCash)
router.get('/statement/date', verifyIfAccountExists, accountController.searchBankStatementOfAccountByDate)
router.put('/account/update', verifyIfAccountExists, accountController.updateAccountData)
router.get('/accounts', accountController.getDataOfAllAccounts)
router.delete('/account/delete', verifyIfAccountExists, accountController.deleteAccount)

module.exports = router
