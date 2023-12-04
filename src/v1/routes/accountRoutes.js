const express = require('express')
const router = express.Router()
const accountController = require('../../controllers/accountController')

router.get('/', accountController.getAll)

router.get('/:id', accountController.show)

router.post('/', accountController.create)

router.patch('/:id', accountController.update)

router.delete('/:id', accountController.remove)

module.exports = router