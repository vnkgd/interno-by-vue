<template>
  <div>
    <!-- __________________________________________________________________ -->
    <br>
    <br>
    <!-- ProjectPage -->
    <div>
        <main class="page">
      <section class="hero-sub" data-page="project">
        <div class="hero-sub__container">
          <div class="hero-sub__page current-page">
            <h2 class="current-page__name">Project</h2>
            <div class="current-page__path">Home / Projects / Project</div>
          </div>
        </div>
      </section>
      <ProjectBlock/>
      <SliderSwiperISO/>
    </main>
    </div>
    <!-- _____________________________________________________________________ -->
    <br>
    <br>
    <!-- <ProjectPage/> -->
  </div>
</template>

<script>
import ProjectBlock from '../components/ProjectBlock.vue'
import SliderSwiperISO from '../components/SliderSwiperISO.vue'

export default {
  name: 'ProjectPage',
  components: {
    ProjectBlock,
    SliderSwiperISO
  },

  data () {
    return {

    }
  },

  mounted () {

  },

  computed: {

  },

  methods: {

  }
}
</script>

<style lang="css" scoped>

</style>
