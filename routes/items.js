const itemsRouter = require('express').Router()
const ItemsController = require('../controllers/ItemsContoller')

itemsRouter.get('/', ItemsController.getItems)
itemsRouter.get('/add', ItemsController.add)
itemsRouter.get('/update', ItemsController.update)
itemsRouter.get('/delete', ItemsController.delete)
itemsRouter.get('/search', ItemsController.search)

module.exports = itemsRouter
