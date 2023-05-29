<template>
  <div>
    <v-card flat>
      <v-img height="400" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>

      <v-card-title>{{ article.title }}</v-card-title>

      <v-card-text>
        <div v-html="sanitizedBody"></div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios'
import sanitizeHtml from 'sanitize-html'

export default {
  name: 'ArticleDetail',
  components: {},
  data() {
    return {
      article: {}
    }
  },
  computed: {
    sanitizedBody() {
      // imgタグのみ使えるように
      return sanitizeHtml(this.article.body, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      })
    }
  },
  async mounted() {
    // idを指定して特定の記事を取得する
    const response = await axios.get(
      'https://nolyc.microcms.io/api/v1/articles/' + this.$route.params.id,
      {
        headers: { 'X-API-KEY': import.meta.env.VITE_APP_X_API_KEY }
      }
    )
    this.article = response.data
  }
}
</script>
