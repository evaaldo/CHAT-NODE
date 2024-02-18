const sql = require("../database/connection.js")
const crypto = require('crypto');

class AccountService {

    async createAccount(cpf, name) {

        const id = crypto.randomUUID()

        await sql`INSERT INTO accounts (id, name, cpf) VALUES (${id}, ${name}, ${cpf})`

    }

    async searchBankStatementOfAccount(id) {

        const account = await sql`SELECT * FROM accounts WHERE id=${id}`

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