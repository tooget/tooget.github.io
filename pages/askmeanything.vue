<template>
  <v-container>
    <AskingInputForm />
    <AskingIssuesList
        :issuesListResultFromAskmeanythingPage="issuesListResult"
    />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const issuesListResult = await $axios.$get('https://api.github.com/repos/tooget/tooget.github.io/issues?state=all')
    return { issuesListResult }
  },
  data() {
    return {
      issuesListResult: []
    }
  }
}
</script>
