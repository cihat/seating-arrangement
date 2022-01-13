<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Seat',
  data() {
    return {
      seats: [],
    }
  },
  async created() {
    await this.fetchLibrary()
  },
  computed: {
    ...mapState({
      libraries: 'libraries',
    }),
    json: json => {
      console.log(json)
      return json[0].seatsDetails
    },
  },
  methods: {
    ...mapActions(['fetchLibrary']),
  },
}
</script>

<template lang="pug">
.seats_container
  h1
    | Seat Selection
  .seats
    ul
      li(v-for="library in libraries" :key="library._id")
          a(href="#") {{library}}

  //- .libraries
  //-   pre
  //-     code
  //-       | {{ JSON.stringify(libraries[0], null, 2) }}
</template>

<style lang="scss">
.seats_container {
  .seats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px;
    padding: 0;
  }
}
</style>
