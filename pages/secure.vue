<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8>
      <v-card class="elevation-12">
        <v-alert show color="success">
          This is a secure page!
        </v-alert>
        <v-card-text>
          <v-btn color="info" to="/">
            Fetch User
          </v-btn>
          <v-btn color="error" @click="$auth.logout()">
            Logout
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: ['auth'],
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    }
  }
}
</script>
