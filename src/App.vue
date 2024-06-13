<template>
  <div id="app">
    <div class="wrapper">
        <div class="overlay"></div>
<HeaderBlock />
<!-- <MainBlock/> -->
<!-- <ArticlesPage/>
<ArticlesSort/>
<ArticlesFilter/>
<ProjectsComp/>
<ProjectPage/>
<ProjectBlock/>
<SliderSwiperISO /> -->
<!-- ФУТЕР ВСЕГДА ВНИЗУ -->

    </div>
    <!-- <router-link to="/">MainPage</router-link> |
    <router-link to="/ArticlesPage">ArticlesPage</router-link> |
    <router-link to="/ProjectPage">ProjectPage</router-link> -->
    <router-view/>
    <FooterBlock/>
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue'
// import MainBlock from './components/MainBlock.vue'
// import MainBlock from './components/MainBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
// import ArticlesPage from './pages/ArticlesPage.vue'
// import ArticlesSort from './pages/ArticlesSort.vue'
// import ArticlesFilter from './pages/ArticlesFilter.vue'
// import ProjectsComp from './components/ProjectsComp.vue'
// import ProjectBlock from './components/ProjectBlock.vue'
// import SliderSwiperISO from './components/SliderSwiperISO.vue'
// import ProjectPage from './pages/ProjectPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderBlock,
    // MainBlock,
    FooterBlock
    // ArticlesPage,
    // ArticlesSort,
    // ArticlesFilter,
    // ProjectsComp,
    // ProjectBlock,
    // SliderSwiperISO,
    // ProjectPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
