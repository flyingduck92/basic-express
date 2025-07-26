const router = require('express').Router()

const itemsRouter = require('./items')
const usersRouter = require('./users')

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.use('/items', itemsRouter)
router.use('/users', usersRouter)

module.exports = router