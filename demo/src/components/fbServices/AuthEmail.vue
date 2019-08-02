<template lang="pug">
  section.email-auth-wrapper
    h5.text-center Email Registration & Authentication
    q-form.authentication.q-gutter-y-md(
      ref="emailAuthenticationForm"
      @submit="onSubmit"
    )
      .form-controls.row.full-width.justify-center
        q-btn-toggle(
          v-model="authType"
          toggle-color="primary"
          :options="[{ label: 'Register', value: 'register' }, { label: 'Login', value: 'login' }]"
        )
      q-input(
        v-model="email"
        id="email"
        outlined
        lazy-rules
        autocomplete="email"
        color="primary"
        data-cy="email"
        label="EMAIL"
        type="email"
        :rules="[val => !!val || '*Field is required', val => val.includes('@') && val.includes('.') || '*Please Provide a valid email']"
      )
      q-input(
        v-model="password"
        lazy-rules
        outlined
        autocomplete="current-password new-password"
        color="primary"
        data-cy="password"
        label="PASSWORD"
        :rules="[val => !!val || '*Field is required']"
        :type="isPwd ? 'password' : 'text'"
        @keyup.enter='onSubmit(); $event.target.blur()'
      )
        template(v-slot:append)
          q-icon.cursor-pointer(
            :name="isPwd ? 'visibility_off' : 'visibility'"
            @click="isPwd = !isPwd"
          )
      q-input(
        v-if="isRegisteredUser"
        lazy-rules
        outlined
        autocomplete="new-password"
        color="primary"
        data-cy="verifyPassword"
        label="VERIFY PASSWORD"
        v-model='passwordMatch'
        :rules="[val => !!val || '*Field is required', val => val === password || `*Passwords don't match`]"
        :type="isPwd ? 'password' : 'text'"
        @keyup.enter="onSubmit(); $event.target.blur()"
      )
        template(v-slot:append)
          q-icon.cursor-pointer(
            :name="isPwd ? 'visibility_off' : 'visibility'"
            @click='isPwd = !isPwd'
          )
      q-btn.full-width(
        color="primary"
        data-cy="submit"
        :label="authType"
        :loading="loading"
        @click="onSubmit"
      )
        template(v-slot:loading)
          q-spinner-gears
      q-btn.full-width(
        color="primary"
        data-cy="logout"
        label="Logout"
        :disable="!logoutDisabled"
        @click="logoutUser"
      )

    //- q-firebase
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AuthEmail',
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser
    }),
    isRegisteredUser () {
      return this.authType === 'register'
    },
    logoutDisabled () {
      return this.currentUser !== null
    }
  },
  data () {
    return {
      authType: 'register',
      email: null,
      isPwd: true,
      loading: false,
      password: null,
      passwordMatch: null
    }
  },
  methods: {
    ...mapActions('auth', {
      createNewUserAction: 'createNewUser',
      loginUserAction: 'loginUser',
      logoutUserAction: 'logoutUser'
    }),
    async createNewUser () {
      const { email, password } = this
      try {
        await this.createNewUserAction({ email, password })
        this.loading = false
        this.$q.notify({
          color: 'positive',
          message: 'SUCCESS: A new user was created. Please check the console for details'
        })
      } catch (err) {
        this.$q.notify({
          color: 'negative',
          message: 'ERROR: Looks like there is an error. Please check the console for details'
        })
        this.loading = false
      }
      this.resetForm()
    },
    async loginUser () {
      const { email, password } = this
      try {
        await this.loginUserAction({ email, password })
        this.loading = false
        this.$q.notify({
          color: 'positive',
          message: 'SUCCESS: User is logged in. Please check the console for object details'
        })
      } catch (err) {
        this.$q.notify({
          color: 'negative',
          message: 'ERROR: Looks like there is an error. Please check the console for object details'
        })
        this.loading = false
      }
      this.resetForm()
    },
    async logoutUser () {
      try {
        await this.logoutUserAction()
        this.$q.notify({
          color: 'positive',
          message: 'SUCCESS: User is logged out.'
        })
      } catch (err) {
        this.$q.notify({
          color: 'negative',
          message: 'ERROR: Looks like was is an error. Please check the console for object details'
        })
        console.error('LOGOFF ERROR', err)
      }
    },
    onSubmit () {
      const { email, password } = this
      this.$refs.emailAuthenticationForm.validate()
        .then(async success => {
          if (success) {
            this.loading = true
            if (this.authType === 'register') {
              this.createNewUser(email, password)
            } else {
              this.loginUser(email, password)
            }
          }
        })
    },
    resetForm () {
      this.email = null
      this.password = null
      this.passwordMatch = null
      this.$refs.emailAuthenticationForm.resetValidation()
    }
  }
}
</script>

<style lang="stylus">
.authentication
  max-width 30em
  margin auto
  position relative

</style>
