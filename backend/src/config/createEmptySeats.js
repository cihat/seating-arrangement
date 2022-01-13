const createEmptySeats = seats => {
  const emptySeats = new Array(seats).fill({})
  emptySeats.forEach((seat, index) => {
    emptySeats[index + 1] = {
      status: false,
      sittingStudentId: '',
      seatNumber: index + 1,
    }
  })
  emptySeats.shift()

  return emptySeats
}

module.exports = createEmptySeats
