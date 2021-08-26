<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <div class="container">
          <div>
            <MyLinkedinProfile />
            <div>
              <Timeline
                :timeline-items="timelineItems"
                :message-when-no-items="messageWhenNoItems"
                colorDots="#3CB70D"
                order="desc"
              />
            </div>
          </div>
        </div>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Timeline from 'timeline-vuejs'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      messageWhenNoItems: 'No Data',
      timelineItems: [
        {
          from: new Date(2021, 4),
          title: 'SoftBank',
          description: 'Data Strategy Office.',
        },
        {
          from: new Date(2019, 11),
          title: 'SoftBank',
          description: 'Data Strategy Dept.',
        },
        {
          from: new Date(2019, 3),
          title: 'Ebay Korea',
          description: 'Data Specialist/Operator',
        },
      ],
    }
  },
}
</script>
<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
