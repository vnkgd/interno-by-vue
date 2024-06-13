<template>
    <div>
      <main class="page">
              <section class="hero-sub" data-page="projects">
                  <div class="hero-sub__container">
                      <div class="hero-sub__page current-page">
                          <h2 class="current-page__name">Our Projects</h2>
                          <div class="current-page__path">Home / Projects ПОКА НЕ ГОТОВО</div>
                      </div>
                  </div>
              </section>
              <ProjectsComp/>
              <!-- <section class="projects">
                  <div class="projects__container">
                      <div class="projects__filters">
                          <div class="projects__filter">Bathroom</div>
                          <div class="projects__filter active">Bedroom</div>
                          <div class="projects__filter">Kitchen</div>
                          <div class="projects__filter">Living Area</div>
                      </div>
                      <div class="projects-page__items projects__items">
                          <div class="projects__column">
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-01.webp" type="image/webp"><img
                                              src="img/projects/bedroom-01.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-03.webp" type="image/webp"><img
                                              src="img/projects/bedroom-03.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-05.webp" type="image/webp"><img
                                              src="img/projects/bedroom-05.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-07.webp" type="image/webp"><img
                                              src="img/projects/bedroom-07.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="kitchen">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/kitchen-01.webp" type="image/webp"><img
                                              src="img/projects/kitchen-01.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Modern Kitchen</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="kitchen">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/kitchen-03.webp" type="image/webp"><img
                                              src="img/projects/kitchen-03.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Modern Kitchen</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div class="projects__column">
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-02.webp" type="image/webp"><img
                                              src="img/projects/bedroom-02.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-04.webp" type="image/webp"><img
                                              src="img/projects/bedroom-04.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-06.webp" type="image/webp"><img
                                              src="img/projects/bedroom-06.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="bedroom">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/bedroom-08.webp" type="image/webp"><img
                                              src="img/projects/bedroom-08.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Minimal Bedroom</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="kitchen">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/kitchen-02.webp" type="image/webp"><img
                                              src="img/projects/kitchen-02.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Modern Kitchen</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                              <div class="projects__item item-project" data-filter="kitchen">
                                  <div class="item-project__image">
                                      <picture>
                                          <source srcset="img/projects/kitchen-04.webp" type="image/webp"><img
                                              src="img/projects/kitchen-04.jpg" alt="image" />
                                      </picture>
                                  </div>
                                  <div class="item-project__content">
                                      <div class="item-project__info">
                                          <h4 class="item-project__name">Modern Kitchen</h4>
                                          <div class="item-project__style">
                                              Decor / Artchitecture
                                          </div>
                                      </div>
                                      <a href="#" class="item-project__button button_arrow">
                                          <img src="img/icons/arrow.svg" alt="arrow" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div class="projects__empty">There are no such projects yet!</div>
                      </div>
                      <div class="projects__pagination pagination">
                          <div class="pagination__item">01</div>
                          <div class="pagination__item">02</div>
                          <div class="pagination__item">03</div>
                          <div class="pagination__arrow">
                              <img src="img/icons/arrow-small.svg" alt="arrow" />
                          </div>
                      </div>
                  </div>
              </section> -->
          </main>
    </div>
  </template>

<script>
import ProjectsComp from '../components/ProjectsComp.vue'

export default {
  name: 'ProjectsPage',

  components: {
    ProjectsComp
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
