const sql = require("../database/connection.js")
const crypto = require('crypto');

class AccountService {

    async createAccount(cpf, name) {

        const id = crypto.randomUUID()

        await sql`INSERT INTO accounts (id, name, cpf) VALUES (${id}, ${name}, ${cpf})`

    }

    async searchBankStatementOfAccount(cpf) {

        const account = await sql`SELECT * FROM accounts WHERE cpf=${cpf}`

        return account

    }

    async depositCash(cash, cpf, datetime) {

        const account = await sql`SELECT * FROM accounts WHERE cpf = ${cpf}`

        const newBalance = account[0].balance + cash

        await sql`UPDATE accounts SET balance = ${newBalance}, datetime = ${datetime} WHERE cpf = ${cpf}`

    }

    async withdrawCash(cash, cpf, datetime) {

        const account = await sql`SELECT * FROM accounts WHERE cpf = ${cpf}`

        const newBalance = account[0].balance - cash

        await sql`UPDATE accounts SET balance = ${newBalance}, datetime = ${datetime} WHERE cpf = ${cpf}`

    }

    async searchBankStatementOfAccountByDate(datetime) {

        const accountStatement = await sql`SELECT * FROM accounts WHERE datetime = ${datetime}`

        return accountStatement

    }

    async updateAccountData() {

    }

    async getDataOfAccount() {

    }

    async deleteAccount() {

    }

}

module.exports = AccountService