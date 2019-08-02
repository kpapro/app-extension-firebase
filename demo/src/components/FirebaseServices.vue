<template lang="pug">
  .row.justify-left(style='width: 100%;')
    .col-12.q-px-md.q-pb-sm
      q-expansion-item(label="Authentication")
        q-toggle.full-width.q-ml-lg(
          v-model="authEmail"
          label="Email Auth"
          @input="toggleServiceType('authEmail')"
        )
        q-toggle.full-width.q-ml-lg(v-model="authPhone" label="Phone Auth")
      q-expansion-item(label="Database")
        q-toggle.col-12(
          v-model="cloudFirestore"
          label="Cloud Firestore"
        )
        q-toggle.col-12(
          v-model="realTimeDB"
          label="Real Time Database Auth"
        )
      q-expansion-item(label="Storage")
        q-toggle.col-12(v-model="storage" label="Google Storage")
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'FirebaseServices',
  data () {
    return {
      authEmail: false,
      authPhone: false,
      cloudFirestore: false,
      realTimeDB: false,
      storage: false
    }
  },
  methods: {
    ...mapMutations('common', {
      setServiceType: 'SET_SERVICE_TYPE'
    }),
    toggleServiceType (type) {
      this.setServiceType({
        type,
        value: this.$data[type]
      })
    }
  }
}
</script>

<style>
</style>
