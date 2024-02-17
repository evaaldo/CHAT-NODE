const AccountService = require('../services/AccountService.js')

const accountService = new AccountService()

class AccountController {

    async createAccount(request, response) {

        const { cpf, name } = request.body

        const accountDatabase = await accountService.createAccount(cpf, name)

        try {

            if(accountDatabase === 0) {
                return response.status(201).json({ message: "User created!" })
            } else {
                return response.status(400).json({ error: "User already exists!" })
            }

        } catch(error) {

            return error

        }

    }

    async searchBankStatementOfAccount(request, response) {

    }

    async depositCash(request, response) {

    }

    async withdrawCash(request, response) {

    }

    async searchBankStatementOfAccountByDate(request, response) {

    }

    async updateAccountData(request, response) {

    }

    async getDataOfAccount(request, response) {

    }

    async deleteAccount(request, response) {

    }

}

module.exports = AccountController