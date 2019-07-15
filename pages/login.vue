<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <form @keydown.enter="login">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="username"
              prepend-icon="person"
              name="login"
              label="Login"
              type="text"
            />
            <v-text-field
              id="password"
              v-model="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.login-button {
  border: 0;
}
</style>

<script>

export default {
  layout: 'blank',
  middleware: ['auth'],
  data() {
    return {
      username: '',
      password: '123',
      error: null
    }
  },
  computed: {
    strategies: () => [
      { key: 'auth0', name: 'Auth0', color: '#ec5425' },
      { key: 'google', name: 'Google', color: '#4284f4' },
      { key: 'facebook', name: 'Facebook', color: '#3c65c4' },
      { key: 'github', name: 'GitHub', color: '#202326' }
    ],
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback() {
      return Boolean(this.$route.query.callback)
    }
  },
  methods: {
    login() {
      this.error = null

      return this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch((e) => {
          this.error = e + ''
        })
    }
  }
}
</script>
