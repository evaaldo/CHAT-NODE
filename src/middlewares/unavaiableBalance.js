async function verifyIfBalanceIsUnavaiable(request, response, next) {

    const { cpf, withdraw } = request.body

    const currentBalance = await sql`SELECT balance FROM accounts WHERE cpf = ${cpf}`
    
    console.log(currentBalance)

    if(currentBalance < withdraw) {

        return response.status(400).json({ error: "Unavaiable balance!" })

    }

    next()

}