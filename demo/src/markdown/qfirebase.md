# QFirebase
QFirebase is a [Quasar Application Extension](https://quasar.dev/app-extensions/introduction). This extension's purpose is to allow the developer a more concise way of implementing firebase's features into your quasar application via setup and configuration.

# Features
- Firebase integration
- Database Implementation:
  - Cloud Firestore
  - Realtime Database
- Multiple Authentication types
- Support Services
- Role Based Permissions
- Route Guarding

# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qfirebase
```

# Uninstall
To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove @quasar/qfirebase
```

# Describe
You can use `quasar describe QFirevase` (to be implemented before QFirebase v1 release)

# Docs
Can be found [here](https://quasarframework.github.io/app-extension-qfirebase).

# Examples
Can be found [here](https://quasarframework.github.io/app-extension-qfirebase/examples).

# Interactive Demo
Can be found [here](https://quasarframework.github.io/app-extension-qfirebase/demo).

# Demo (source) Project
Can be found [here](https://github.com/quasarframework/app-extension-qfirebase/tree/master/demo).

# Working with QCalendar

# Authentication:
  ## [Email](https://firebase.google.com/docs/auth/web/password-auth)
  Authentication via email, password, and password match for registering new users. Also available via passwordless signin
  ## [Phone Number](https://firebase.google.com/docs/auth/web/phone-auth)
  Authentication via a telephone number that will then send an SMS code. Recapthca is used in conjuction with this method
  ## [Federated - Google](https://firebase.google.com/docs/auth/web/google-signin)
  Authentication also exists for: Play Games, Facebook, Twitter, Github, Yahoo, Microsoft 
  ## [Anonymous](https://firebase.google.com/docs/auth/web/anonymous-auth)
  Authentication via anonymous signin

# Cloud Firestore implementation
 ## [Vuefire plugin](https://vuefire.vuejs.org/) bindings

# RTDB - Coming soon

# Storage
  ## Firebase uploader component

# Role Base Permissions
  ## Admin
  ## User

# Route Guarding

# Opinionated Best Practices