<template lang="pug">
  div
    section.page-header.q-py-xl
      h1.text-center.q-ma-none QFirebase
      h2.project-tagline
      .row.justify-center.q-px-md.q-gutter-y-md
        q-btn.btn.col-12.col-sm(
          outline
          no-caps
          label="View on GitHub"
          href="https://github.com/kpapro/app-extension-firebase"
          type="a"
          target="_blank"
        )
        q-btn.btn.col-12.col-sm(
          outline
          no-caps
          label="Docs"
          to="/docs"
        )
        q-btn.btn.col-12.col-sm(
          outline
          no-caps
          label="Examples"
          to="/examples"
        )
        q-btn.btn.col-12.col-sm(
          outline
          no-caps
          label="Interactive Demo"
          to="/demo"
        )
        q-btn.btn.col-12.col-sm(
          outline
          no-caps
          label="Donate"
          to="/donate"
        )
    main.flex.flex-start.justify-center.inset-shadow
      .q-pa-md.col-12-sm.col-8-md.col-6-lg.inset-shadow(style='width: 100%; height: 3px;')
      .q-pa-md.col-12-sm.col-8-md.col-6-lg.bg-white.shadow-1(style='max-width: 800px; width: 100%;')
        slot
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="stylus">
  //$
  +b('page-header')
    color #fff
    text-align center
    background-color #159957;
    background-image linear-gradient(120deg, #eef94a, #fb0505)

    h1
      font-weight 700
      @media(max-width $breakpoint-sm)
        font-size 1.75rem

    +b('btn')
      background-color rgba(255,255,255, .2) !important
      margin-left 1em
      margin-right 1em
      border-radius .3rem
      padding 0.6rem 0.9rem
</style>
