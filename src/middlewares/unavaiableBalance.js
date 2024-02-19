const sql = require("../database/connection.js")

async function verifyIfBalanceIsUnavaiable(request, response, next) {

    const { cpf, cash } = request.body

    const currentBalance = await sql`SELECT balance FROM accounts WHERE cpf = ${cpf}`
    
    const balance = currentBalance[0].balance

    if(balance < cash) {

        return response.status(400).json({ error: "Unavaiable balance!" })

    }

    next()

}

module.exports = verifyIfBalanceIsUnavaiable