<template>
    <div>
        <div class="project__container" @mouseover="stopAutoSwipe" @mouseleave="startAutoSwipe">
            <div class="project__images">
                <div class="project__image">
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
      <div>
        <button class="nav-btn prev" @click="prevSlide" >←</button>
        <button class="nav-btn next" @click="nextSlide">→</button>
        <div class="arrow-2">
    <div class="arrow-2-top"></div>
    <div class="arrow-2-bottom"></div>
        </div>
      </div>
    </div>
        </div>
    </div>
    </div>
  </template>

<script>
import Swipe from 'swipe-js-iso'

export default {
  data () {
    return {
      images: [
        'img/projects/project-page.jpg',
        'img/projects/project-page.jpg',
        'img/projects/project-page.jpg'
      ],
      currentSlide: 0,
      slider: null,
      intervalId: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.slider = new Swipe(this.$refs.slider, {
        auto: 3000,
        continuous: true,
        callback: index => {
          this.currentSlide = index
        }
      })
      this.startAutoSwipe()
    })
  },
  methods: {
    goToSlide (index) {
      this.slider.slide(index)
      this.currentSlide = index
    },
    nextSlide () {
      this.slider.next()
    },
    prevSlide () {
      this.slider.prev()
    },
    startAutoSwipe () {
      this.intervalId = setInterval(() => {
        this.slider.next()
      }, 3000)
    },
    stopAutoSwipe () {
      clearInterval(this.intervalId)
    }
  }
}
</script>

  <style scoped>
  .slider {
    overflow: hidden;
    position: relative;
  }

  .swipe-wrap {
    position: relative;
  }

  .slide {
    float: left;
    width: 100%;
  }

  .pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    font-size: 34px;
    color: #cda274;
    cursor: pointer;
    z-index: 1;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .pagination-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
  }

  .active {
    background-color: #cda274;
  }
  </style>
