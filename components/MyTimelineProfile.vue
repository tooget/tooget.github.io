<template>
  <v-timeline align-top dense>
    <v-timeline-item v-for="item in timelineItems" :key="item.no" small>
      <div>
        <div class="font-weight-normal">
          <strong>{{ item.title }}</strong> @{{ item.from }}
        </div>
        <div>{{ item.position }}, {{ item.description }}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      messageWhenNoItems: 'No Data',
      timelineItems: [
        {
          no: 1,
          from: new Date(2021, 4),
          title: 'SoftBank',
          position: 'Data Architect/PMO',
          description: 'Data Strategy Office.',
        },
        {
          no: 2,
          from: new Date(2019, 11),
          title: 'SoftBank',
          position: 'Data Engineer',
          description: 'Data Strategy Dept.',
        },
        {
          no: 3,
          from: new Date(2019, 7),
          title: 'Knowease-inc',
          position: 'DevOps Engineer',
          description: 'Co-founder',
        },
      ],
    }
  },
}
</script>
