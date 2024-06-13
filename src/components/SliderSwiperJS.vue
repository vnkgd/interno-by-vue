<template>
    <div class="slider-container">
      <div ref="slider" class="slider">
        <div class="swipe-wrap">
          <div v-for="image in images" :key="image" class="slide">
            <img :src="image" alt="slide">
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import Swipe from 'swipejs'

export default {
  data () {
    return {
      images: [
        'https://via.placeholder.com/700x400/0000FF/FFFFFF',
        'https://via.placeholder.com/700x400/00FF00/FFFFFF',
        'https://via.placeholder.com/700x400/FF0000/FFFFFF'
      ]
    }
  },
  mounted () {
    this.swipe = Swipe(this.$refs.slider, {
      auto: 3000
    })
  },
  beforeDestroy () {
    this.swipe.kill()
  }
}
</script>

  <style scoped>
  .slider-container {
    width: 700px;
    border-radius: 70px;
    overflow: hidden;
    position: relative;
  }

  .slider {
    width: 100%;
    overflow: hidden;
  }

  .swipe-wrap {
    width: 300%;
    overflow: hidden;
  }

  .slide {
    width: 33.333%;
    float: left;
  }

  img {
    width: 100%;
    height: auto;
  }
  </style>
