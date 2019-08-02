<template lang="pug">
  q-layout(view="HHh LpR fFf")
    q-header(elevated)
      q-toolbar
        q-btn(
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        )
          q-icon(name="menu")
        q-toolbar-title(v-if="$q.screen.width > 500")
          | QFirebase
          q-tooltip(v-if="$q.screen.width < 1077")
            | QFirebase
        div Quasar v{{ $q.version }}
        q-btn(
          dense
          flat
          round
          aria-label="Table of Contents"
          @click="rightDrawerOpen = !rightDrawerOpen"
        )
          q-icon(name="menu")
    q-drawer(
      v-model="leftDrawerOpen"
      bordered
      content-style="background-color: #f8f8ff"
    )
      q-list
        q-item-label(header) Essential Links
      essential-links
    q-drawer(
      v-model="rightDrawerOpen"
      bordered
      content-style="background-color: #f8f8ff"
      side="right"
    )
      q-scroll-area.fit
        q-list(dense)
          q-item(
            v-for="item in toc"
            :key="item.id"
            dense
            clickable
            @click="scrollTo(item.id)"
            v-ripple
            :active="activeToc === item.id"
          )
            q-item-section(v-if="item.level > 1" side)  &bull;
            q-item-section(:class="`toc-item toc-level-${item.level}`") {{ item.label }}
    q-page-container
      router-view
</template>

<script>
import { mapGetters } from 'vuex'
import { scroll } from 'quasar'

export default {
  name: 'MyLayout',
  components: {
    'essential-links': () => import('../components/EssentialLinks.vue')
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: this.$q.platform.is.desktop,
      activeToc: 0
    }
  },
  computed: {
    ...mapGetters({
      toc: 'common/toc'
    })
  },
  mounted () {
    // code to handle anchor link on refresh/new page, etc
    if (location.hash !== '') {
      const id = location.hash.substring(1, location.hash.length)
      setTimeout(() => {
        this.scrollTo(id)
      }, 200)
    }
  },
  methods: {
    scrollTo (id) {
      this.activeToc = id
      const el = document.getElementById(id)

      if (el) {
        this.scrollPage(el)
      }
    },
    scrollPage (el) {
      const offset = el.offsetTop - el.scrollHeight
      scroll.setScrollPosition(window, offset, 500)
    }
  }
}
</script>
