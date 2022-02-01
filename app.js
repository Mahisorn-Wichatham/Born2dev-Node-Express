const express = require('express')
const path = require('path')
const chalk = require('chalk')
const debug = require('debug')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public/')))

app.get('/', (req, res) => {
    res.send('Hello express')
})

app.listen(port, () => {
    console.log(`Listening on port ${chalk.green(port)}`);
    debug(`Listening on port ${chalk.green(' : '+port)}`);
})