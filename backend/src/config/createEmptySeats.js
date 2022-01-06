const createEmptySeats = seats => {
  const emptySeats = new Array(seats).fill({})
  emptySeats.forEach((seat, index) => {
    emptySeats[index] = {
      status: false,
      sittingStudentId: '',
      seatNumber: index + 1,
    }
  })

  return emptySeats
}

module.exports = createEmptySeats
