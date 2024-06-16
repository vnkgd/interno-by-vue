<template>

<div>
    <!-- <HeaderBlock/> -->
    <div>
        <main class="page">
            <section class="hero-sub" data-page="blog">
                <div class="hero-sub__container">
                    <div class="hero-sub__page current-page">
                        <h2 class="current-page__name">Search Result</h2>
                        <div class="current-page__path">Home / Search Result</div>
                    </div>
                </div>
            </section>
            <div class="popup-search-page">
      <h1>Вы искали: "{{ searchQuery }}"</h1>
      <!-- <h2>Вы искали: {{ $route.params.searchQuery }}</h2> -->
      <!-- //ещё вариант -->
      <!-- <div class="popup-search-page">
      <h2>Вы искали: {{ $route.params.searchQuery }}</h2>
      <h3>Результаты поиска:</h3>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          {{ result.title }}
        </li>
      </ul>
    </div> -->
      <!-- // -->
      <h2>Результаты поиска</h2>
      <div v-if="searchResults.length > 0">
        <ul>
          <li v-for="result in searchResults" :key="result.id">
            <h3>{{ result.title }}</h3>
            <p>{{ result.content }}</p>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Ничего не найдено.</p>
      </div>
    </div>
        </main>
    </div>
  </div>

  </template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PopupSearchPage',
  data () {
    return {
      searchQuery: this.$route.params.searchQuery
    }
  },
  computed: {
    ...mapState(['searchResults'])
  },

  created () {
    // Получаем значение параметра 'query' из URL
    const query = this.$route.params.query
    // Диспатчим действие для поиска в Vuex-хранилище
    this.$store.dispatch('searchContent', query)
    // Получаем поисковый запрос из параметров URL
    this.searchQuery = this.$route.params.query
  }
}
</script>

  <style scoped>
  .popup-search-page {
    padding: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 0;
  }
  </style>
