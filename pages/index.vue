<template>
  <v-container>
    <v-row justify="space-around">
      <v-card>
        <v-container class="d-flex flex-row">
          <MyLinkedinProfile />
        </v-container>
          <MyTimelineProfile />
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/askmeanything">
            Ask me anything!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
