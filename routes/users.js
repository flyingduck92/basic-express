const usersRouter = require('express').Router()
const UsersController = require('../controllers/UsersController')

usersRouter.get('/', UsersController.getUsers)
usersRouter.get('/add', UsersController.add)
usersRouter.get('/update', UsersController.update)
usersRouter.get('/delete', UsersController.delete)
usersRouter.get('/search', UsersController.search)

module.exports = usersRouter