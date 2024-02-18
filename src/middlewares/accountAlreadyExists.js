const sql = require("../database/connection.js")

async function verifyIfAccountAlreadyExists(request, response, next) {

    const { cpf } = request.body

    const accountExists = await sql`SELECT * FROM accounts WHERE cpf=${cpf}`

    if(accountExists.length != 0) {
        return response.status(400).json({ error: "Account already exists!" })
    }

    return next()

}

module.exports = verifyIfAccountAlreadyExists