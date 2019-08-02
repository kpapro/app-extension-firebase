<template lang="pug">
  section.q-pa-md
    section(v-if="fbAppInitialized")
        | Firebase has been successfully initialized with your config!
    section(v-else)
      p.text-bold Enter or Upload Your Firebase Config Here:
      q-expansion-item(
        label="PASTE YOUR FB CONFIG HERE"
      )
        q-form(
          @submit="readPastedConfig"
          @reset="clearForm"
        )
          q-input(
            v-model="pastedConfig"
            type="textarea"
          )
          q-btn(
            type="submit"
            label="SUBMIT FIREBASE CONFIG"
            color="primary"
            :loading="loading"
          ).q-mt-md.full-width
      q-expansion-item(
        label="FIREBASE CONFIG FORM"
      )
        q-form(
          @submit="uploadConfig"
          @reset="clearForm"
        )
          q-input(
            v-model="configForm.apiKey"
            type="input"
            label="API KEY"
          )
          q-input(
            v-model="configForm.authDomain"
            label="AUTH DOMAIN"
            type="text"
          )
          q-input(
            v-model="configForm.databaseURL"
            label="DATA BASE URL"
            type="text"
          )
          q-input(
            v-model="configForm.projectId"
            label="PROJECT ID"
            type="text"
          )
          q-input(
            v-model="configForm.storageBucket"
            label="STORAGE BUCKET"
            type="text"
          )
          q-input(
            v-model="configForm.messagingSenderId"
            label="MESSAGING SENDER ID"
            type="text"
          )
          q-input(
            v-model="configForm.appId"
            label="APP ID"
            type="text"
          )
          q-btn(
            type="submit"
            label="SUBMIT FIREBASE CONFIG"
            color="primary"
            :loading="loading"
            :disable="disableConfigFormSubmit"
          ).q-mt-md.full-width
            template(v-slot:loading)
              q-spinner-gears(color="white")

      q-expansion-item(
        label="FIREBASE JSON FILE UPLOAD"
      )
        q-btn(
          label="Upload JSON Firebase Config"
          color="primary"
          @click="showConfigDialog"
        ).full-width.q-mt-md

      q-dialog(
        ref="configDialog"
        :value="configDialog"
        @before-hide="closeConfigDialog"
      )
        q-card
          q-card-section
            q-input(
              type="file"
              color="primary"
              @change="parseConfigFile"
            )
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FirebaseConfigUploader',
  beforeMount () {
    if (this.fbAppInitialized) {
      this.$fb.fBInit(this.firebaseConfig)
      this.setFBAppInitFlag(true)
    }
  },
  computed: {
    ...mapState({
      configDialog: state => state.common.configDialog,
      firebaseConfig: state => state.auth.firebaseConfig,
      fbAppInitialized: state => state.auth.fbAppInitialized
    }),
    disableConfigFormSubmit () {
      const {
        apiKey,
        appId,
        authDomain,
        databaseURL,
        messagingSenderId,
        projectId,
        storageBucket
      } = this.configForm
      return !((apiKey !== null && apiKey !== '') &&
        (appId !== null && appId !== '') &&
        (authDomain !== null && authDomain !== '') &&
        (databaseURL !== null && databaseURL !== '') &&
        (messagingSenderId !== null && messagingSenderId !== '') &&
        (projectId !== null && projectId !== '') &&
        (storageBucket !== null && storageBucket !== ''))
    }
  },
  data () {
    return {
      configForm: {
        apiKey: null,
        appId: null,
        authDomain: null,
        databaseURL: null,
        messagingSenderId: null,
        projectId: null,
        storageBucket: null
      },
      loading: false,
      pastedConfig: ''
    }
  },
  methods: {
    ...mapMutations('common', {
      setConfigDialog: 'SET_CONFIG_DIALOG'
    }),
    ...mapMutations('auth', {
      setFBConfig: 'SET_FIREBASE_CONFIG',
      setFBAppInitFlag: 'SET_FIREBASE_INIT_FLAG'
    }),
    clearForm () {
      const keys = Object.keys(this.configForm)
      keys.forEach((v, i) => {
        this.configForm[v] = null
      })
    },
    closeConfigDialog () {
      this.setBlur()
      this.setConfigDialog(false)
    },
    hasValidConfigParams (configParams) {
      const validations = []
      const keys = [
        'apiKey',
        'authDomain',
        'databaseURL',
        'projectId',
        'storageBucket',
        'messagingSenderId',
        'appId'
      ]

      keys.forEach((v0, i0) => {
        let hasKey = false
        configParams.forEach((v1, i1) => {
          if (v1.includes(v0)) hasKey = true
        })
        validations.push(hasKey)
      })
      return !validations.includes(false)
    },
    parseConfigFile (e) {
      const reader = new FileReader()
      reader.readAsText(e.target.files[0])
      reader.onload = e => {
        const text = reader.result
        const data = JSON.parse(text)
        this.$fb.fBInit(data)
        this.setFBConfig(data)
        this.setFBAppInitFlag(true)
        console.log(this.$fb.auth())
        this.$refs.configDialog.hide()
      }
    },
    readPastedConfig () {
      const firebaseConfig = {}
      const configStrings = this.pastedConfig.split('\n').slice(1, 8)
      if (this.hasValidConfigParams(configStrings)) {
        configStrings.forEach((v, i) => {
          const keyPairs = configStrings[i].trimLeft().replace(/(\s)/g, '')
            .replace(/(")/g, '')
            .replace(/(,$)/g, '')
            .split(':')
          if (keyPairs[0] === 'databaseURL' || keyPairs[0] === 'appId') {
            const tempArr = []
            tempArr.push(keyPairs.shift())
            tempArr.push(keyPairs.join(':'))
            firebaseConfig[tempArr[0]] = tempArr[1]
          } else {
            firebaseConfig[keyPairs[0]] = keyPairs[1]
          }
        })
        this.$fb.fBInit(firebaseConfig)
        this.setFBConfig(firebaseConfig)
        this.setFBAppInitFlag(true)
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Please enter in a valid firebase config',
          timeout: 3000
        })
      }
    },
    setBlur () {
      this.$emit('setBlur')
    },
    showConfigDialog () {
      this.setBlur()
      this.setConfigDialog(true)
    },
    async uploadConfig () {
      await console.log(import('../../../firebaseConfig.js'))
      this.loading = true
      this.$fb.fBInit(this.configForm)
      this.clearForm()
      this.loading = false
    }
  },
  watch: {}
}
</script>

<style lang="stylus">
.config-input {
  width: 100%;
  font-size: 0.75em;
}
</style>
