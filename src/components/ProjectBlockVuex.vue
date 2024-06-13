<template>
  <div>
    <div>
    <!-- HTML -->
    <h2>ProjectBlockVuex</h2>
    <h2>{{ counter }}</h2>
    <h2>{{ projectArticle }}</h2>
    <p>{{ projectText1 }}</p>
    <p>Мой компонент</p>
    <!-- <input type='text'> -->
    <br>
    <br>
    <!-- <button>КНОПКА</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectBlockVuex',

  data () {
    return {

    }
  },

  mounted () {

  },

  computed: {
    counter () {
      return this.$store.state.counter
    },
    projectArticle () {
      return this.$store.state.projectArticle
    },
    projectText1 () {
      return this.$store.state.projectText1
    },
    projectText2 () {
      return this.$store.state.projectText2
    }
  },

  methods: {

  }
}
</script>

<style lang="css" scoped>

</style>
