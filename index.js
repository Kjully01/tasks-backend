const express = require('express')
const { suppressDeprecationWarnings } = require('moment')
const app = express()


app.listen(3000, () => {
    console.log('Backend executando...')
})