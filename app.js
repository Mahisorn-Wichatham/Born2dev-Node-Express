const express = require('express')
const app = express()
const port = 3000

const chalk = require('chalk')

const debug = require('debug')

const morgan = require('morgan')
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Hello express')
})

app.listen(port, () => {
    console.log(`Listening on port ${chalk.green(port)}`);
    debug(`Listening on port ${chalk.green(' : '+port)}`);
})