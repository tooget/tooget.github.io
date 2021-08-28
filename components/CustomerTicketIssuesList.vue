<template>
  <v-simple-table>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">IssueNumber</th>
          <th class="text-left">Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listedJsonIssuesInfo" :key="item.id">
          <td>{{ item.number }}</td>
          <td>
            <a href="item.url" target="_blank" rel="noopener noreferrer">{{
              item.title
            }}</a>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
export default {
  async asyncData({ $axios }) {
    const listedJsonIssuesInfo = await $axios.$get(
      'https://api.github.com/repos/tooget/tooget.github.io/issues?state=all'
    )
    console.log(listedJsonIssuesInfo)
    return { listedJsonIssuesInfo }
  },
}
</script>