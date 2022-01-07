const express = require('express')
const { Router } = express
const shortId = require('shortid')

const { libraryService, studentService } = require('../services')

const router = Router()

router.get('/', async (req, res) => {
  const students = await studentService.load()
  res.send(students)
})

//* Create library for testing
router.get('/create-one', async (req, res, next) => {
  let students = await studentService.load()

  try {
    if (students.length === 0) {
      students = await studentService.insert({
        name: 'Cihat Salik',
        studentId: shortId.generate(),
        libraryId: null,
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
    }

    res.send(students)
  } catch (error) {
    next(error)
  }
})

router.get('/:studentId/seatId/:seatId', async (req, res, next) => {
  const { studentId, seatId } = req.params

  try {
    let firatLibrary = await libraryService.findOne('libraryName', 'Firat University Library')
    const student = await studentService.update(studentId, {
      libraryId: firatLibrary._id,
      selectedSeatNumber: seatId,
      inputDate: new Date(),
    })

    await libraryService.update(firatLibrary._id, {
      $set: {
        seatsDetails: {
          ...firatLibrary.seatsDetails,
          [seatId]: {
            ...firatLibrary.seatsDetails[seatId],
            studentId: student._id,
            status: true,
            sittingStudentId: student.studentId,
          },
        },
      },
    })
    const updLib = await libraryService.find(firatLibrary._id)

    res.send(updLib)
  } catch (error) {
    next(error)
  }
})

// router.get('/:studentId/select-empty-seat/:selectedSeatNumber', (req, res, next) => {
//   const { studentId, selectedSeatNumber } = req.params

//   Student.findById(studentId, (err, student) => {
//     student.selectedSeatNumber = selectedSeatNumber
//     const selectedSeat = student.libraryId.seatsDetails[selectedSeatNumber - 1]
//     selectedSeat.status = true
//     selectedSeat.sittingStudentId = studentId

//     student.save()
//     res.send(student)
//   })
// })

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
