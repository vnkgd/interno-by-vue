<template>
  <div>
    <div>
        <section class="project">
          <div class="project__container">
            <div class="project__content">
              <div class="project__info info-project">
                <div class="info-project__client info-project__item">
                  <div class="info-project__label">Client</div>
                  <div class="info-project__value">Your client name</div>
                </div>
                <div class="info-project__category info-project__item">
                  <div class="info-project__label">Category</div>
                  <div class="info-project__value">Interiors</div>
                </div>
                <div class="info-project__tags info-project__item">
                  <div class="info-project__label">Tags</div>
                  <div class="info-project__value">Interior, Home</div>
                </div>
                <div class="info-project__date info-project__item">
                  <div class="info-project__label">Date</div>
                  <div class="info-project__value">Date 23.02.2022</div>
                </div>
                <div class="info-project__link info-project__item">
                  <div class="info-project__label">Link</div>
                  <a href="#" class="info-project__value">example.com</a>
                </div>
              </div>
              <div class="project__description">
                <h2 class="project__title">{{ projectArticleComputed }}</h2>
                <div class="project__text">
                  <p>{{ projectTextComputed1 }}
                  </p>
                  <p>{{ projectTextComputed2 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectBlock',

  data () {
    return {

    }
  },

  mounted () {

  },

  computed: {
    projectArticleComputed () {
      return this.$store.state.projectArticleState
    },
    projectTextComputed1 () {
      return this.$store.state.projectTextState1
    },
    projectTextComputed2 () {
      return this.$store.state.projectTextState2
    }
  },

  methods: {

  }
}
</script>

<style lang="css" scoped>

</style>
