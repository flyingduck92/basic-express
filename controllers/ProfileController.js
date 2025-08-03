class ProfileController {

  static getProfile(req, res) {
    res.json({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    })
  }

  static updateProfile(req, res) {
    console.log(req.params.name)
    res.json({
      message: 'Profile has been updated'
    })
  }

}

module.exports = ProfileController