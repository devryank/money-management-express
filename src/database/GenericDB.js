var con = require('./connection')

const getAll = (table) => {
	return new Promise((resolve, reject) => {
		con.query(`SELECT * from ${table}`, (err, rows) => {
			if (err) {
				reject(err)
			}
			resolve(rows)
		})
	})
}

const show = (table, id) => {
	return new Promise((resolve, reject) => {
		con.query(`SELECT * FROM ${table} where id = '${id}'`, (err, row) => {
			if(err) {
				reject(err)
			}
			resolve(row)
		})
	})
}

const createNew = (table, newItem) => {
	return new Promise((resolve, reject) => {
		con.query(`INSERT INTO ${table} SET ?`, newItem, (err, res) => {
			if(err) {
				reject(err)
			}
			resolve(res)
		})
	})
}

const update = (table, id, body) => {
	return new Promise((resolve, reject) => {
		con.query(`UPDATE ${table} SET ? WHERE id = ?`, [body, id], (err, res) => {
			if(err) {
				reject(err)    
			}
			resolve(res)
		})
	})
}

const remove = (table, id) => {
	return new Promise((resolve, reject) => {
		con.query(`DELETE FROM ${table} WHERE id = ?`, id, (err, res) => {
			if(err) {
				reject(err)    
			}
			resolve(res)
		})
	})
}

module.exports = { 
	getAll,
	show, 
	createNew,
	update,
	remove
}