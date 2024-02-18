const sql = require("../database/connection.js")

async function verifyIfAccountExists(request, response, next) {

    const { cpf } = request.body

    const accountExists = await sql`SELECT * FROM accounts WHERE cpf=${cpf}`

    if(accountExists.length === 0) {
        return response.status(400).json({ error: "User doesn't exists!" })
    }

    return next()

}

module.exports = verifyIfAccountExists