const express = require('express')
const { Router } = express
const Student = require('../models/student')
const Library = require('../models/library')

const library_dummy_data = require('../config/dummy_data')
const createEmptySeats = require('../config/createEmptySeats')

const router = Router()

router.get('/', async (req, res) => {
  await Library.find({ _id: '61d6e2ca7bea1b6203056ee6' })
    .then(lib => res.send(lib))
    .catch(error => res.send(error))
})

router.get('/create-library/:libraryId', async (req, res, next) => {
  // const { libraryId, totalCapacity, floorsCapacity, numberOfTables, seatsDetails, intensity } = req.query
  const { libraryId } = req.params

  try {
    const sameLibraryId = await Library.find({ libraryId })
    if (sameLibraryId.length > 1) {
      res.send({
        error: 'Library ID is already used.',
      })
    }

    const library = await Library.create({
      libraryId,
      libraryName: 'Firat University Library',
      totalCapacity: 800,
      floorsCapacity: [200, 150, 300, 150],
      seatsDetails: createEmptySeats(800),
      intensity: 'low',
    })
    res.send(library)
  } catch (error) {
    res.redirect('/libraries')
  }
})

module.exports = router
