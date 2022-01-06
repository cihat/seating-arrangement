const express = require('express')
const { Router } = express
const Student = require('../models/student')
const Library = require('../models/library')

const router = Router()

router.get('/', async (req, res) => {
  res.send(await Student.find({}))
})

router.get('/sign-up/:studentId', async (req, res, next) => {
  const { studentId } = req.params

  try {
    const sameStudentId = await Student.find({ studentId })
    if (sameStudentId.length > 1) {
      res.send({
        error: 'Student ID is already used.',
      })
    }
    const student = await Student.create({
      studentId,
      libraryId: '61d6e2ca7bea1b6203056ee6',
      breaksUsed: {
        short: {
          counter: 0,
          dates: [],
        },
        long: {
          counter: 0,
          sessionLimit: 2,
          dates: [],
        },
      },
      selectedSeatNumber: 1,
      inputDate: new Date(),
    })

    res.send(student)
  } catch (error) {
    res.redirect('/students')
  }
})

router.get('/:studentId/select-empty-seat/:selectedSeatNumber', (req, res, next) => {
  const { studentId, selectedSeatNumber } = req.params

  Student.findById(studentId, (err, student) => {
    student.selectedSeatNumber = selectedSeatNumber
    const selectedSeat = student.libraryId.seatsDetails[selectedSeatNumber - 1]
    selectedSeat.status = true
    selectedSeat.sittingStudentId = studentId

    student.save()
    res.send(student)
  })
})

//! Authentication
// TODO: Create new student sign-up --> router.post("/sign-up")
// TODO: Login student sign-in --> router.post("/sign-in")
// TODO: Create new student sign-out --> router.post("/sign-out")

//! Actions
// TODO: Selecting a empty place for the logged in student --> router.post("/select-empty-seat")
// TODO: May take a break for student entering the library --> router.post("/take-a-break")
// TODO: May take a break for student leaving the break --> router.post("/leave-a-break")
// TODO: May take a break for student leaving the library --> router.post("/leave-a-break")

//! Getters
// TODO: Get all students --> router.get("/")
// ToDo: Get all students who are in the break --> router.get("/in-break")
// TODO: Get all students who are in the library --> router.get("/in-library")
// TODO: Get all seatsDetails --> router.get("/seats-details")

//! Coming Soon

module.exports = router
