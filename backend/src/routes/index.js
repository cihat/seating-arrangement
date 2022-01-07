const express = require('express')
const { libraryService, studentService } = require('../services')

const router = express.Router()

//* Get all libraries
router.get('/', async (req, res) => {
  const library = await libraryService.load()
  res.send(library)
})

router.get('/ping', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
