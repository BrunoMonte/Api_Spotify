const express = require('express')
const app = express()
const port = 3000

app.use(express.static('front'))

app.get('/', (req, res) => {
    res.send('Chegou  !!')
})

app.listen(port, () => {
    console.log(`⚡️Utilizando o server na Porta:${port}`)
})