function verifyIfDepositIsNegative(request, response, next) {

    const { cash } = request.body

    if(cash < 0) {
        return response.status(400).json({ error: "Negative deposit." })
    } else if(cash === 0) {
        return response.status(400).json({ error: "No deposit to do." })
    }

    next()

}

module.exports = verifyIfDepositIsNegative