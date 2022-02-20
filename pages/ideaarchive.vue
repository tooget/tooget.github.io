<template>
  <div v-html="$md.render(ideaMarkdownResult)" />
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const ideaMarkdownResult = await $axios.$get(
      'https://raw.githubusercontent.com/tooget/Idea-Archive/main/README.md'
    )
    return { ideaMarkdownResult }
  },
}
</script>
