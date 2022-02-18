<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="300">
        <v-container justify="center">
          <AskingInputForm />
        </v-container>
        <v-container>
          <AskingIssuesList :issuesListResultFromAskmeanythingPage="issuesListResult" />
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const issuesListResult = await $axios.$get(
      'https://api.github.com/repos/tooget/tooget.github.io/issues?state=all&labels=Communication:VoiceOfCustomer'
    )
    return { issuesListResult }
  },
  data() {
    return {
      issuesListResult: [],
    }
  },
}
</script>
