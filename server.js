require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const chalk = require('chalk')

const apiCatRoute = require('./api/routes/cat.route')

const app = express()
const router = express.Router()

const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.get('/', (req, res) => {
	res.json({ message: 'chao xin! welcome to my api!' })
})

app.use('/api', router)
app.use('/api/cats', apiCatRoute)

app.listen(port, () => 
	console.log(chalk.bgRed(`app is running on port ${port}`))
)