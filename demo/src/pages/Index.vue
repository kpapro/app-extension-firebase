<template lang="pug">
  hero
    q-markdown(:src="markdown" toc @data="onToc")
</template>

<script>
import Hero from '../components/Hero'
import markdown from '../markdown/qfirebase.md'

export default {
  name: 'PageIndex',

  components: {
    Hero
  },

  data () {
    return {
      markdown: markdown
    }
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        // console.log('toc:', toc)
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    onToc (toc) {
      this.toc = toc
    }
  }
}
</script>

<style>
</style>
