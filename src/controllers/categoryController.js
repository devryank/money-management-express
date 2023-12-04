const genericService = require('../services/genericService')
const table = 'categories' 

const getAll = async (req, res) => {
	const accounts = await genericService.getAll(table)
	res.send({status: 'OK', data: accounts })
}

const show = async (req, res) => {
	const { params: { id } } = req

	if(!id) {
		return
	}

	const category = await genericService.show(table, id)
	res.send({ status: 'OK', data: category })
}

const create = async (req, res) => {
	const {body} = req

	if(
		!body.name ||
        !body.icon ||
        !body.type
	) {
		return
	}

	const newData = {
		name: body.name,
		icon: body.icon,
		type: body.type
	}

	const created = await genericService.create(table, newData)
	res.status(201).send({status: 'OK', data: created.affectedRows})
}

const update = async (req, res) => {
	const { body, params: { id } } = req

	if(
		!body.name ||
        !body.icon ||
        !body.type ||
        !id
	) {
		return
	}

	const category = await genericService.update(table, id, body)
	res.status(201).send({status: 'OK', data: category.affectedRows})
}

const remove = async (req, res) => {
	const { params : { id } } = req
	if(!id) {
		return
	}
    

	const category = await genericService.remove(table, id)
	res.status(201).send({ status: 'OK', data: category.affectedRows })
}

module.exports = {
	getAll,
	show,
	create,
	update,
	remove
}