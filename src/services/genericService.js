const { v4: uuid } = require('uuid')
const DB = require('../database/GenericDB')


const getAll = async (table) => {
	var all = await DB.getAll(table)
	return all
}

const show = async (table, id) => {
	const data = await DB.show(table, id)
	return data
}

const create = async (table, newData) => {
	const dataToInsert = {
		id: uuid(),
		...newData,
	}

	const created = await DB.createNew(table, dataToInsert)
	return created
}

const update = async (table, id, body) => {
	const updated = await DB.update(table, id, body)
	return updated
}

const remove = async (table, id) => {
	const data = await DB.remove(table, id)
	return data
}

module.exports = {
	getAll,
	show,
	create,
	update,
	remove
}