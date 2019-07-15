<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js auth example
        </v-card-title>
        <v-card-text>
          <center>
            <div v-if="$auth.$state.loggedIn" class="my-5">
              <v-btn class="ml-3" color="info" to="/secure">
                Secure
              </v-btn>
              <v-btn class="ml-3" color="danger" @click="$auth.logout()">
                Logout
              </v-btn>
            </div>
            <v-btn v-else color="success" class="my-5" to="/login">
              Login
            </v-btn>
            <v-divider />
            <div class="mt-5">
              User status:
              <v-chip>
                {{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}
              </v-chip>
            </div>
          </center>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  auth: false
}
</script>
