const Cat = require('../../models/cat.model')

module.exports.index = async (req, res) => {
	const cats = await Cat.find()
	res.json(cats)
}

module.exports.post = async (req, res) => {
	const { name, color } = req.body

	const cat = new Cat({
		name: name,
		color: color
	})

	await cat.save()

	res.json({ message: 'Cat created!' })
}

module.exports.getCat = async (req, res) => {
	const { catId } = req.params

	const cat = await Cat.findById(catId)

	res.json(cat)
}