<template>
  <div>
    <!-- <HeaderBlock/> -->
    <div>
        <main class="page">
            <section class="hero-sub" data-page="blog">
                <div class="hero-sub__container">
                    <div class="hero-sub__page current-page">
                        <h2 class="current-page__name">Articles</h2>
                        <div class="current-page__path">Home / Articles</div>
                    </div>
                </div>
            </section>
            <ArticlesSort/>
            <br>
            <br>
            <br>
            <br>
            <ArticlesFilter/>
        </main>
    </div>

    <!-- <FooterBlock/> -->
  </div>
</template>

<script>
import ArticlesSort from './ArticlesSort.vue'
import ArticlesFilter from './ArticlesFilter.vue'
// import HeaderBlock from '../components/HeaderBlock.vue'

export default {
  name: 'ArticlesPage',
  components: {
    ArticlesFilter,
    ArticlesSort
    // HeaderBlock
  },

  data () {
    return {
    }
  },

  mounted () {},

  computed: {},

  methods: {}
}
</script>

<style lang="css" scoped></style>
