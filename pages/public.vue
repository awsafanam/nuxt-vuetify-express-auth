<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8>
      <v-card class="elevation-12">
        <v-alert show color="success">
          You should see this page without need to authentication!
        </v-alert>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  auth: false
}
</script>
