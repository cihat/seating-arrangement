const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const { Schema } = mongoose

const librarySchema = new Schema({
  libraryName: String,
  libraryId: {
    type: String,
    unique: true,
  },
  totalCapacity: Number,
  floorsCapacity: Array,
  seatsDetails: [
    {
      type: Schema.Types.Mixed,
      status: Boolean,
      sittingStudentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        autopopulate: { maxDepth: 1 },
        default: {},
      },
      seatNumber: Number,
      numberOfTables: Number,
      default: [],
    },
  ],
  intensity: String,
})

librarySchema.plugin(autopopulate)

module.exports = mongoose.model('Library', librarySchema)
