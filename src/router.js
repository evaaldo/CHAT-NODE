const express = require('express')
const AccountController = require('./controllers/AccountCOntroller.js')

const router = express.Router()
const accountController = new AccountController()

router.get('/account/:id', accountController.searchBankStatementOfAccount)
router.post('/account', accountController.createAccount)
router.put('/account/:id')
router.patch('/account/:id')
router.delete('/account/:id')

module.exports = router
