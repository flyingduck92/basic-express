const itemsRouter = require('express').Router()
const ItemsController = require('../controllers/ItemsController')

itemsRouter.get('/', ItemsController.getItems)
itemsRouter.get('/add', ItemsController.add)
itemsRouter.get('/update/:id', ItemsController.update)
itemsRouter.get('/delete/:id', ItemsController.delete)
itemsRouter.get('/search', ItemsController.search)

module.exports = itemsRouter
