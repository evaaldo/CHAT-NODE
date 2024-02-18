const AccountService = require('../services/AccountService.js')

const accountService = new AccountService()

class AccountController {

    async createAccount(request, response) {

        const { cpf, name } = request.body

        await accountService.createAccount(cpf, name)

        try {

            return response.status(201).json({ message: "Account created!" })

        } catch(error) {

            return error

        }

    }

    async searchBankStatementOfAccount(request, response) {

        const id = request.params.id

        const accountDatabase = await accountService.searchBankStatementOfAccount(id)

        try {
            if(!accountDatabase) {
                return response.status(400).json({ error: "User doesnt exists!" })
            } else {
                return response.status(400).json(accountDatabase)
            }
        } catch(error) {
            console.log(error)
        }

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