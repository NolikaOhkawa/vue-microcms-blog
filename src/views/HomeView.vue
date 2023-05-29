<template>
  <div>
    <v-row>
      <v-col v-for="article in articles" :key="article.id">
        <v-card class="mx-auto" width="300" height="330">
          <v-img class="white--text align-end" height="200px" :src="article.eyecatch.url">
            <v-card-title>{{ article.title }}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div class="summary">{{ article.summary }}</div>
          </v-card-text>

          <v-card-actions>
            <router-link :to="{ name: 'article-detail', params: { id: article.id } }">
              <v-btn color="orange" text>More</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
// Components
// import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      articles: []
    }
  },
  async mounted() {
    const response = await axios.get('https://nolyc.microcms.io/api/v1/articles', {
      headers: { 'X-API-KEY': import.meta.env.VITE_APP_X_API_KEY }
    })
    this.articles = response.data.contents
    console.log(response)
  }
})
</script>

<style scss>
.summary {
  white-space: pre-wrap;
}
</style>
