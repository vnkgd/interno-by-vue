<template>
  <div>
    <div>
    <br>
    <br>
    <br>
    <div class="project__container">
    <h1 class="project__title">Project Pictures Slider</h1>
        <div class="project__images">
              <div class="project__image">
                <picture><source srcset="img/projects/project-page.webp" type="image/webp"><img src="img/projects/project-page.jpg" alt="image" /></picture>
              </div>
              <!-- <div class="project__pop">
                <img src="img/icons/search-big.svg" alt="icon" />
              </div> -->
              <div class="project__popup">
                <img src="" alt="image" />
              </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSlider',

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
