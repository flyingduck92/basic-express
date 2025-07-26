class UsersController {
  static getUsers(req, res) {
    res.json({
      message: 'Users Page'
    })
  }

  static add(req, res) {
    res.json({
      message: 'Add User Page'
    })
  }

  static update(req, res) {
    console.log(+req.params.id)
    res.json({
      message: 'Update User Page'
    })
  }

  static delete(req, res) {
    console.log(+req.params.id)
    res.json({
      message: 'Delete User Page'
    })
  }

  static search(req, res) {
    res.json({
      message: 'Search User Page'
    })
  }
}

module.exports = UsersController