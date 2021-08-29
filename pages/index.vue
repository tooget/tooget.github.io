<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-container class="d-flex flex-row">
          <MyLinkedinProfile />
        </v-container>
        <MyTimelineProfile />
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
