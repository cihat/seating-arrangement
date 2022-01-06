const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const { Schema } = mongoose

const librarySchema = new Schema({
  libraryName: String,
  libraryId: {
    type: Number,
    unique: true,
  },
  totalCapacity: Number,
  floorsCapacity: Array,
  seatsDetails: {
    type: Array,
    status: Boolean,
    sittingStudentId: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      autopopulate: { maxDepth: 1 },
      default: {},
    },
    seatNumber: Number,
    numberOfTables: Number,
  },
  intensity: String,
})

librarySchema.plugin(autopopulate)

module.exports = mongoose.model('Library', librarySchema)
