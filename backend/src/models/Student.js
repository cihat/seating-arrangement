const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const { Schema } = mongoose
const passportLocalMongoose = require('passport-local-mongoose')

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
    },
    sessionId: String,
    studentId: {
      type: String,
      unique: true,
    },
    libraryId: {
      type: Schema.Types.ObjectId,
      ref: 'Library',
      autopopulate: { maxDepth: 1 },
    },
    breaksUsed: {
      short: {
        counter: {
          type: Number,
          default: 0,
        },
        dates: [{ startedDate: Date, finishedDate: Date }],
      },
      long: {
        counter: {
          type: Number,
          defualt: 0,
        },
        sessionLimit: {
          type: Number,
          default: 2,
        },
        dates: [{ startedDate: Date, finishedDate: Date }],
      },
    },
    selectedSeatNumber: Number,
    selectedSeat: {
      type: Schema.Types.ObjectId,
      ref: 'Library',
      autopopulate: { maxDepth: 1 },
    },
    inputDate: Date,
    outputDate: Date,
    activeTime: Number,
  },
  { timestamps: true }
)

studentSchema.plugin(autopopulate)
studentSchema.plugin(passportLocalMongoose, {
  usernameField: 'studentId',
  populateFields: ['name', 'sessionId'],
})

module.exports = mongoose.model('Student', studentSchema)
