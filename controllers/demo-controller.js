module.exports = (app) => {

  const add = (req, res) => {
    const a = parseInt(req.params['paramA'])
    const b = parseInt(req.params.paramB)
    res.send(`${a + b}`)
  }

  const subtract = (req, res) => {
    const a = parseInt(req.query["x"])
    const b = parseInt(req.query.y)
    const c = a - b
    res.send(c + '')

  }

  app.get('/subtract', subtract)

  app.get('/add/:paramA/:paramB', add)

  app.get('/can/be/anything', function (req, res) {
    res.send('Hello World')
  })

}