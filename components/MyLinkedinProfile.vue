<template>
  <div>
    <!-- ### Start: LinkedIn Embeding Code ### -->
    <script
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    ></script>
    <!-- ### Start: Profiles ### -->
    <v-card flat class="mx-0">
      <v-row justify="center" class="ma-0 pa-0">
        <v-col
          v-for="(member, i) in members"
          :key="i"
          :class="i > 1 ? 'mt-4 pa-0' : 'mt-0 pa-0'"
          cols="12"
          sm="6"
        >
          <div
            class="d-flex justify-center"
            v-html="member.linkedinBadge"
          ></div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
@Component({})
class MyLinkedinProfileComponent extends Vue {
  @Provide() members: Array<{
    name: string
    linkedinBadge: string
  }> = [
    {
      name: 'SUNGHYUN KIM',
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="tooget"><a class="LI-simple-link" href=\'https://jp.linkedin.com/in/tooget?trk=profile-badge\'>SUNGHYUN K.</a></div>',
    }
  ]
}
export default MyLinkedinProfileComponent
</script>
