<template>
  <v-simple-table>
    <thead>
      <tr>
        <th>IssueNumber</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in listedJsonIssuesInfo" :key="item.id">
        <td>{{ item.number }}</td>
        <td>
          {{ item.title }}
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>


<script>
export default {
  async asyncData({ $axios }) {
    const result = await $axios.$get('https://api.github.com/repos/tooget/tooget.github.io/issues?state=all')
    return { listedJsonIssuesInfo: result }
  },
  data() {
    return {
      listedJsonIssuesInfo: []
    }
  }
}
</script>