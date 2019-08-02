<template lang="pug">
  section.services-container
    .inst.text-center(v-if="showInstrucs")
      h5 Choose one of the services in from the left menu to interact with.
    auth-email(v-if="showAuthEmail")
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ServiceComponents',
  components: {
    'auth-email': () => import('./fbServices/AuthEmail.vue')
  },
  computed: {
    ...mapState({
      showAuthEmail: state => state.common.authEmail
    }),
    showInstrucs () {
      return !this.showAuthEmail
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
</style>
