const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const chalk = require('chalk')

const app = express()
const router = express.Router()

const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.get('/', (req, res) => {
	res.json({ message: 'halo! welcome to my api!' })
})

app.use('/api', router)

app.listen(port, () => 
	console.log(chalk.bgRed(`app is running on port ${port}`))
)