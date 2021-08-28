<template>
  <v-container>
    <Timeline
      :timeline-items="timelineItems"
      :message-when-no-items="messageWhenNoItems"
      color-dots="#3CB70D"
      order="desc"
    />
  </v-container>
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
