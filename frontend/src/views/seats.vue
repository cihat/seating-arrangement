<script>
import Seat from '../components/Library/seat.vue'
export default {
  name: 'Seats',
  components: {
    Seat,
  },
}
</script>

<template lang="pug">
.grid
  .seats.col.col-12.col-sm-6.col-md-4
    h1 This is an seats page.
    Seat
</template>
