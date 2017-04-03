const router = require('express').Router()

router.get('/test', (req, res) => {
  res.send({result: 'success'})
})

router.post('/number', (req, res) => {
  console.log(req.body.number)
  res.status(200).send({ number: req.body.number })
})

module.exports = router
