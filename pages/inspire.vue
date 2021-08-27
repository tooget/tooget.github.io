<template>
  <div>
    <ul>
      <li v-for="(issueInfo, index) in listedJsonIssuesInfo" :key="index">
        <a :href="'issueInfo.url'" target="_blank" rel="noopener noreferrer">
          {{ issueInfo.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const listedJsonIssuesInfo = await $axios.$get('https://api.github.com/repos/tooget/tooget.github.io/issues?state=all')
    return {
      listedJsonIssuesInfo,
    }
  },
}
</script>