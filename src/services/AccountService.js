const sql = require("../database/connection.js")
const crypto = require('crypto');

class AccountService {

    async createAccount(cpf, name) {

        const id = crypto.randomUUID()

        const accountExists = await sql`SELECT * FROM accounts WHERE cpf=${cpf}`

        if(accountExists.length === 0) {
            await sql`INSERT INTO accounts (id, name, cpf) VALUES (${id}, ${name}, ${cpf})`
            return 0
        } else {
            return null
        }

    }

    async searchBankStatementOfAccount(id) {

        const account = sql`SELECT * FROM account WHERE id=${id}`

        if(account.length === 0) {
            return null
        } else {
            return account
        }

    }

    async depositCash() {

    }

    async withdrawCash() {

    }

    async searchBankStatementOfAccountByDate() {

    }

    async updateAccountData() {

    }

    async getDataOfAccount() {

    }

    async deleteAccount() {

    }

}

module.exports = AccountService