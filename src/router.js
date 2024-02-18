const express = require('express')
const AccountController = require('./controllers/AccountCOntroller.js')
const verifyIfExistsAccountCPF = require('./middlewares/accountExistsByCPF.js')
const verifyIfExistsAccount = require('./middlewares/accountExists.js')

const router = express.Router()
const accountController = new AccountController()

router.get('/statement/:id', verifyIfExistsAccount, accountController.searchBankStatementOfAccount)
router.post('/account', verifyIfExistsAccountCPF, accountController.createAccount)

module.exports = router
