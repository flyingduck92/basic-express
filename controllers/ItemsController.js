class ItemsController {
  static getItems(req, res) {
    res.json({
      message: 'Items Page'
    })
  }

  static add(req, res) {
    res.json({
      message: 'Add Item Page'
    })
  }

  static update(req, res) {
    console.log(+req.params.id)
    res.json({
      message: 'Update Item Page'
    })
  }

  static delete(req, res) {
    console.log(+req.params.id)
    res.json({
      message: 'Delete Item Page'
    })
  }

  static search(req, res) {
    res.json({
      message: 'Search Item Page'
    })
  }
}

module.exports = ItemsController