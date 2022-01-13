const express = require('express')
const { Router } = express
const { libraryService, studentService } = require('../services')
const shortId = require('shortid')

const { createEmptySeats } = require('../config/')

const router = Router()

//! Get all libraries
router.get('/', async (req, res) => {
  const library = await libraryService.load()
  res.send(library)
})

//! Create library for testing
router.get('/create-one', async (req, res, next) => {
  let libraries = await libraryService.load()

  try {
    if (libraries.length === 0) {
      libraries = await libraryService.insert({
        libraryId: shortId.generate(),
        libraryName: 'Firat University Library',
        totalCapacity: 800,
        floorsCapacity: [200, 150, 300, 150],
        seatsDetails: createEmptySeats(800),
        intensity: 'low',
      })
    }

    res.send(libraries)
  } catch (error) {
    next(error)
  }
})

//! Get one library with libraryId or _id
router.get('/:libraryId', async (req, res, next) => {
  const { libraryId } = req.params
  let library = {}

  try {
    if (libraryId.length < 24) {
      library = await libraryService.findOne('libraryId', libraryId)
      if (!library) {
        res.send({ message: 'Library not found' })
        next()
      }
    } else {
      library = await libraryService.find(libraryId)
      if (!library) {
        res.send({ message: 'Library not found' })
        next()
      }
    }
    res.send(library)
  } catch (error) {
    next(error)
  }
})

module.exports = router
