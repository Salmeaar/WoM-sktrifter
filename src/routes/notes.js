const express = require('express')
const router = express.Router()

//Temporär "databas", ersätts senare med riktig databas
const tempData = [
    {"text":"Hello"},
    {"text":"Morjens"}
]

router.get('/',(req, res) => {
    res.send(tempData)
})

module.exports = router