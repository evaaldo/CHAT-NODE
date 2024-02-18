function verifyIfValueIsNegative(request, response, next) {

    const { cash } = request.body

    if(cash < 0) {
        return response.status(400).json({ error: "Negative value." })
    } else if(cash === 0) {
        return response.status(400).json({ error: "Null value." })
    }

    next()

}

module.exports = verifyIfValueIsNegative