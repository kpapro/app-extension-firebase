import Vue from 'vue'

import QForm from 'quasar/src/components/form/QForm.js'
import QInput from 'quasar/src/components/input/QInput.js'

export default Vue.extend({
  name: 'QFirebase',
  data () {
    return {
      email: null
    }
  },
  methods: {},
  render (h) {
    return h(QForm, {
      staticClass: 'q-firebase'
    }, [
      h(QInput, {
        props: {
          value: 'email',
          label: 'EMAIL',
          outlined: true,
          lazyRules: true,
          ':rules': "[val => !!val || '*Field is required', val => val.includes('@') && val.includes('.') || '*Please Provide a valid email']"
        }
      }, [])])
  }
})
