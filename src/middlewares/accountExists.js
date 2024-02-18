const sql = require("../database/connection.js")

async function verifyIfExistsAccount(request, response, next) {

    const id = request.params.id

    const account = await sql`SELECT * FROM accounts WHERE id=${id}`

    if(account.length === 0) {
        return response.status(400).json({ error: "User doesnt exists!" })
    } 

    return next()

}

module.exports = verifyIfExistsAccount