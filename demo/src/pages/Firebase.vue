<template lang="pug">
  q-page(padding)
    section(v-if="fbAppInitialized")
      service-components
    .inst(v-else)
      p.text-body1 In order to interaction with this page you first need to upload a Firebase config so we can initialize a firebase app. If you have not set up a firebase project in the console please do so
        a(href="https://firebase.google.com/" target="_blank")  here
        | . Then go into the project settings in the console and register your webapp. Once you've gone through those steps look in the Web apps section, and grab your firebaseConfig object. You can either grab them and put them in a json file for a file upload or enter them in the form to the left.

      p.text-body1 Once you have succussfully uploaded your firebase config, the Firebase Services section will be available to you.
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FirebaseDemo',
  components: {
    'service-components': () => import('../components/ServiceComponents.vue')
  },
  computed: {
    ...mapState({
      fbAppInitialized: state => state.auth.fbAppInitialized
    })
  }
}
</script>

<style>
</style>
