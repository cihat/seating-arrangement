const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    studentId: {
      type: Number,
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
    inputDate: Date,
    outputDate: Date,
    activeTime: Number,
  },
  { timestamps: true }
)

userSchema.plugin(autopopulate)

module.exports = mongoose.model('Student', userSchema)
