<template>
  <v-spacer>
    <!-- ### Start: LinkedIn Embeding Code ### -->
    <script
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    ></script>
    <!-- ### Start: Profiles ### -->
    <v-card flat class="mx-0">
      <v-container class="d-flex justify-center" v-html="linkedinBadge" />
    </v-card>
  </v-spacer>
</template>

<script>
export default {
  data() {
    return {
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="tooget" />',
    }
  },
}
</script>
