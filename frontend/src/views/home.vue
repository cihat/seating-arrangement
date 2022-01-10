<script>
import { mapActions, mapState } from 'vuex'

import HelloWorld from '@/components/hello-world.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchLibrary']),
  },
  created() {
    this.fetchLibrary()
  },
  computed: {
    ...mapState({
      libraries: 'libraries',
    }),
  },
}
</script>

<template lang="pug">
.home
  hello-world(msg="Libraries")
  .libraries
    pre
      code
        | {{ JSON.stringify(libraries, null, 2) }}

</template>
