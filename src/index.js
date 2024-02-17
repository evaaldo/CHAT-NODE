const express = require('express')
const router = require('./router')

const app = express()
const port = 3333

app.use(express.json())
app.use('/', router)

app.listen(port, () => console.log(`Application is running on port: ${port}`))