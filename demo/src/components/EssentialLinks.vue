<template lang="pug">
  q-list
    q-item(clickable to="/docs")
      q-item-section(avatar)
        q-icon(name="calendar_today")
      q-item-section
        q-item-label QFirebase docs
        q-item-label(caption) Documentation
    q-item(clickable to="/demo")
      q-item-section(avatar)
        q-icon(name="calendar_today")
      q-item-section
        q-item-label QFirebase demo
        q-item-label(caption) Interactively play with properties
    q-item(clickable to="/examples")
      q-item-section(avatar)
        q-icon(name="calendar_today")
      q-item-section
        q-item-label QFirebase examples
        q-item-label(caption) Examples of how to do it
    q-separator
    q-item(
      clickable
      tag="a"
      target="_blank"
      href="https://github.com/kpapro/app-extension-firebase")
      q-item-section(avatar)
        q-icon(name="extension")
      q-item-section
        q-item-label QFirebase home
        q-item-label(caption) @quasar/qfirebase
    q-item(clickable tag="a" target="_blank" href="https://github.com/quasarframework/app-extension-qmarkdown")
      q-item-section(avatar)
        q-icon(name="extension")
      q-item-section
        q-item-label QMarkdown home
        q-item-label(caption) @quasar/qmarkdown
    q-separator
    q-item(clickable tag="a" target="_blank" href="http://quasar.dev")
      q-item-section(avatar)
        q-icon(name="school")
      q-item-section
        q-item-label Docs
        q-item-label(caption) quasar.dev
    q-item(clickable tag="a" target="_blank" href="https://github.com/quasarframework/")
      q-item-section(avatar)
        q-icon(name="code")
      q-item-section
        q-item-label Github
        q-item-label(caption) github.com/quasarframework
    q-item(clickable tag="a" target="_blank" href="http://chat.quasar.dev")
      q-item-section(avatar)
        q-icon(name="chat")
      q-item-section
        q-item-label Discord Chat Channel
        q-item-label(caption) chat.quasar.dev
    q-item(clickable tag="a" target="_blank" href="https://forum.quasar.dev")
      q-item-section(avatar)
        q-icon(name="record_voice_over")
      q-item-section
        q-item-label Forum
        q-item-label(caption) forum.quasar.dev
    q-item(clickable tag="a" target="_blank" href="https://twitter.com/quasarframework")
      q-item-section(avatar)
        q-icon(name="rss_feed")
      q-item-section
        q-item-label Twitter
        q-item-label(caption) @quasarframework
</template>

<script>
export default {
  name: 'EssentailLinks',
  data () {
    return {}
  }
}
</script>

<style>
</style>
