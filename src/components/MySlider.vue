<template>
    <div class="slider-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://via.placeholder.com/800x400.png?text=Image+1" alt="Image 1">
          </div>
          <div class="swiper-slide">
            <img src="https://via.placeholder.com/800x400.png?text=Image+2" alt="Image 2">
          </div>
          <div class="swiper-slide">
            <img src="https://via.placeholder.com/800x400.png?text=Image+3" alt="Image 3">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Navigation -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'MySlider',
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  }
}
</script>

  <style scoped>
  .slider-container {
    width: 635px;
    margin: 0 auto;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 70px;
  }
  </style>
