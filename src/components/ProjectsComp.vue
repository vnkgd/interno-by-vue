<template>
  <div>
    <main class="page">
            <!-- <section class="hero-sub" data-page="projects">
                <div class="hero-sub__container">
                    <div class="hero-sub__page current-page">
                        <h2 class="current-page__name">Our Projects</h2>
                        <div class="current-page__path">Home / Projects</div>
                    </div>
                </div>
            </section> -->

            <section class="projects">
                <div class="projects__container">
                    <div id="tag-buttons" class="projects__filters">
                    <button v-for="tag in tags" @click="filterProjects(tag)" :key="tag" class="articles__filter">{{ tag }}</button>
                    </div>
                    <!-- <div class="projects__filters">
                        <div class="projects__filter">Bathroom</div>
                        <div class="projects__filter active">Bedroom</div>
                        <div class="projects__filter">Kitchen</div>
                        <div class="projects__filter">Living Area</div>
                    </div> -->

                    <div class="projects-page__items projects__items">
                        <div class="projects__column">
                            <div class="projects__item item-project" v-for="project in filteredProjects" :key="project.id">
                                <img :src="project.image" alt="Project Image">
                                <div class="item-project__content">
                                    <div class="item-project__info">
                                        <h4 class="item-project__name">{{ project.title }}</h4>
                                        <div class="item-project__style">
                                            {{ project.text }}
                                        </div>
                                    </div>
                                    <a href="#" class="item-project__button button_arrow">
                                        <img src="img/icons/arrow.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Пагинация -->
                    <div class="projects__pagination pagination">
                        <div class="pagination__item">01</div>
                        <div class="pagination__item">02</div>
                        <div class="pagination__item">03</div>
                        <div class="pagination__arrow">
                            <img src="img/icons/arrow-small.svg" alt="arrow" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
  </div>
</template>

<script>
export default {
  name: 'ProjectsComp',

  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Modern Kitchen',
          text: `
                  Decor / Artchitecture
                  `,
          image: 'img/projects/01.webp',
          tag: 'Kitchen'
        },
        { id: 2, title: 'Classic Minimal Bedroom', text: 'Decor / Artchitecture', image: 'img/projects/02.webp', tag: 'Bedroom' },
        { id: 3, title: 'Modern Medroom', text: 'Decor / Artchitecture', image: 'img/projects/03.webp', tag: 'Bedroom' },
        { id: 4, title: 'Modern Bedroom', text: 'Decor / Artchitecture', image: 'img/projects/03.webp', tag: 'Bedroom' },
        { id: 5, title: 'Minimal Bedrooms', text: 'Decor / Artchitecture', image: 'img/projects/03.webp', tag: 'Living Area' },
        { id: 6, title: 'System Table', text: 'Decor / Artchitecture', image: 'img/projects/03.webp', tag: 'tag4' },
        { id: 7, title: 'Minimal Bedroom table', text: 'Decor / Artchitecture', image: 'img/projects/03.webp', tag: 'Bathroom' }
      ],
      tags: ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
      selectedTag: null,
      currentTag: null
    }
  },

  mounted () {

  },

  methods: {
    filterProjects (tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = null
      } else {
        this.selectedTag = tag
      }
    },
    sortByTag (tag) {
      this.currentTag = tag
    }
  },

  computed: {
    filteredProjects () {
      if (this.selectedTag) {
        return this.projects.filter(project => project.tag === this.selectedTag)
      } else {
        return this.projects
      }
    },
    sortedArticles () {
      if (this.currentTag) {
        return this.articles.filter(article => article.tag === this.currentTag)
          .concat(this.articles.filter(article => article.tag !== this.currentTag))
      }
      return this.articles
    }
  }
}
</script>

<style lang="css" scoped>

</style>
