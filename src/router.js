const express = require('express')
const router = express.Router()

router.get('/account')
router.post('/account')
router.put('/account/:id')
router.patch('/account/:id')
router.delete('/account/:id')

module.exports = router
