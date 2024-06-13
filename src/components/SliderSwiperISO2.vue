<template>
    <div class="slider-container" @mouseover="stopAutoSwipe" @mouseleave="startAutoSwipe">
      <div ref="slider" class="slider">
        <div class="swipe-wrap">
          <div v-for="(image, index) in images" :key="index" class="slide">
            <img :src="image" alt="slide">
          </div>
        </div>
      </div>
      <div class="pagination">
        <span v-for="(image, index) in images" :key="index" @click="goToSlide(index)"
          :class="{ active: index === currentSlide }" class="pagination-dot"></span>
      </div>
      <button class="nav-btn prev" @click="prevSlide">&#8249;</button>
      <button class="nav-btn next" @click="nextSlide">&#8250;</button>
    </div>
  </template>

<script>
import Swipe from 'swipe-js-iso'

export default {
  data () {
    return {
      images: [
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300',
        'https://via.placeholder.com/500x300'
      ],
      currentSlide: 0,
      slider: null,
      autoSwipeInterval: null
    }
  },
  mounted () {
    this.slider = Swipe(this.$refs.slider, {
      auto: 3000,
      callback: (index) => {
        this.currentSlide = index
      }
    })
    this.startAutoSwipe()
  },
  methods: {
    goToSlide (index) {
      this.slider.slide(index, 300)
    },
    prevSlide () {
      this.slider.prev()
    },
    nextSlide () {
      this.slider.next()
    },
    startAutoSwipe () {
      this.autoSwipeInterval = setInterval(() => {
        this.slider.next()
      }, 3000)
    },
    stopAutoSwipe () {
      clearInterval(this.autoSwipeInterval)
    }
  }
}
</script>

  <style scoped>
  .slider-container {
    position: relative;
    width: 700px;
    border-radius: 70px;
    overflow: hidden;
  }

  .slider {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .swipe-wrap {
    display: flex;
  }

  .slide {
    flex: 0 0 100%;
  }

  .pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }

  .pagination-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
  }

  .pagination-dot.active {
    background-color: #333;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    font-size: 24px;
    color: #555;
    cursor: pointer;
    z-index: 1;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
  </style>
