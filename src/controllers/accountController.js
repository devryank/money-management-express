const genericService = require('../services/genericService')
let bcrypt = require('bcryptjs')

const table = 'accounts' 

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
		!body.username ||
		!body.password
	) {
		res.status(422).send({data: 'Terdapat inputan yang tidak valid'})
	}

    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(body.password, salt)

	const newData = {
		username: body.username,
		password: hash
	}

	const created = await genericService.create(table, newData)
	res.status(201).send({status: 'OK', data: created.affectedRows})
}

const update = async (req, res) => {
	const { body, params: { id } } = req
	if(
		!body.username ||
        !body.password ||
        !id
	) {
		res.status(422).send({data: 'Terdapat inputan yang tidak valid'})
	}

    let salt = bcrypt.genSaltSync(10)
    body.password = bcrypt.hashSync(body.password, salt)
    
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