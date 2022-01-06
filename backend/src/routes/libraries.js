const express = require('express')
const { Router } = express
const Student = require('../models/student')
const Library = require('../models/library')

const library_dummy_data = require('../config/dummy_data')
const createEmptySeats = require('../config/createEmptySeats')

const router = Router()

router.get('/', async (req, res) => {
  res.send(await Library.find({}))
})

router.get('/create-library/:libraryId', async (req, res, next) => {
  // const { libraryId, totalCapacity, floorsCapacity, numberOfTables, seatsDetails, intensity } = req.query
  const { libraryId } = req.params
  // console.log(libraryId)
  try {
    const sameLibraryId = await Library.find({ libraryId })
    // console.log('sameLibraryId: ', sameLibraryId)
    if (sameLibraryId.length > 1) {
      res.send({
        error: 'Library ID is already used.',
      })
    }

    console.log('createEmptySeats: ', createEmptySeats(100))

    const library = await Library.create({
      libraryId,
      totalCapacity: 2000,
      floorsCapacity: [100, 200, 300, 400, 10000],
      seatsDetails: createEmptySeats(200),
      intensity: 'low',
    })

    // library.seatsDetails = { library_dummy_data }
    console.log('library', library)

    // console.log(library)
    res.send(library)
  } catch (error) {
    res.send({
      error: error.message,
    })
  }
})

module.exports = router
