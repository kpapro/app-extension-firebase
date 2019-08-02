<template lang="pug">
  q-layout(
    view="HHh Lpr lFf"
    :class="{ 'blur-layout': blurLayout }"
  ).demo
    q-header(elevated)
      q-toolbar
        q-btn(
          dense
          flat
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        )
          q-icon(name="menu")
        q-toolbar-title(v-if="$q.screen.width > 500")
          | QFirebase
          q-tooltip(v-if="$q.screen.width < 1077")
            | QFirebase
        q-space
        div Quasar v{{ $q.version }}

    q-drawer(
      v-model="leftDrawerOpen"
      bordered
      content-class="white"
      :width="350"
    )
      .row.justify-around.col-12
        firebase-config-uploader(@setBlur="setBlur")
      .col-12
        q-expansion-item(
          expand-separator
          caption="Choose your services"
          group="firebaseService"
          label="Firebase Services"
          :disable="!fbAppInitialized"
        )
          firebase-services
        q-expansion-item(
          expand-separator
          group="essentialLinks"
          label="Essential Links"
        )
          essential-links
    q-page-container
      router-view
  </q-layout>
</template>

<script>
// import { mapGetters } from "vuex"
import { openURL } from 'quasar'
import { mapState } from 'vuex'

export default {
  name: 'FirebaseLayout',
  components: {
    'firebase-services': () => import('../components/FirebaseServices.vue'),
    'essential-links': () => import('../components/EssentialLinks'),
    'firebase-config-uploader': () => import('../components/FirebaseConfigUploader.vue')
  },
  data () {
    return {
      blurLayout: false,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    ...mapState({
      fbAppInitialized: state => state.auth.fbAppInitialized
    })
  },
  methods: {
    openURL,
    setBlur () {
      this.blurLayout = !this.blurLayout
    }
  }
}
</script>

<style lang="stylus">
.demo {
  &.blur-layout {
    filter: blur(5px);
  }
}
</style>
