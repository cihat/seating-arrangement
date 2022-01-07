const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const { Schema } = mongoose

const studentSchema = new Schema(
  {
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

module.exports = mongoose.model('Student', studentSchema)
