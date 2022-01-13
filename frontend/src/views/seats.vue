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
.seats
  h1 This is an seats page.
  Seat
</template>
