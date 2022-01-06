const express = require('express')
const Library = require('../models/library')

const router = express.Router()

router.get('/', async (req, res) => {
  await Library.find({ _id: '61d6871991e8443c13878546' })
    .then(lib => res.send(lib[0]))
    .catch(error => res.send(error))
})

router.get('/ping', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
