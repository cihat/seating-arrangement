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
  console.log(studentId)
  try {
    const sameStudentId = await Student.find({ studentId })
    console.log('sameStudentId: ', sameStudentId)
    if (sameStudentId.length > 1) {
      res.send({
        error: 'Student ID is already used.',
      })
    }
    const student = await Student.create({ studentId })

    console.log(student)
    res.send(student)
  } catch (error) {
    res.send({
      error: error.message,
    })
  }
})

module.exports = router
