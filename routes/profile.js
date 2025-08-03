const profileRouter = require('express').Router()
const ProfileController = require('../controllers/ProfileController')

profileRouter.get('/', ProfileController.getProfile)

module.exports = profileRouter