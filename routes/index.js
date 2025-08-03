const router = require('express').Router()

const itemsRouter = require('./items')
const usersRouter = require('./users')
const profileRouter = require('./profile')

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.use('/items', itemsRouter)
router.use('/users', usersRouter)
router.use('/profile', profileRouter)

module.exports = router