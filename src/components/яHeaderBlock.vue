<template>

<!-- <div class="wrapper"> -->
    <!-- <div class="overlay active"> -->
    <header class="header">
        <div class="header__container">
            <a href="#" class="header__logo">
                <img src="../img/logo.svg" alt="" />
            </a>
            <nav class="header__menu menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link to="/">Home</router-link>
                        <!-- <a class='menu__link' href='index.html'>Home</a> -->
                    </li>
                    <!-- <li class="menu__item">
                        <a class='menu__link' href='/about'>About Us</a>
                    </li> -->
                    <!-- <li class="menu__item">
                        <a class='menu__link' href='/services'>Services</a>
                    </li> -->
                    <li class="menu__item">
                        <router-link to="/ArticlesPage">Articles</router-link>
                        <!-- <a class='menu__link' href='articlesFilter.html'>Articles Filter</a> -->
                    </li>
                    <li class="menu__item">
                        <router-link to="/ProjectsPage" class='menu__link'>Projects</router-link>
                        <!-- <a class='menu__link' href='articlesSort.html'>Articles Sort</a> -->
                    </li>
                    <li class="menu__item">
                        <router-link to="/ProjectPage" class='menu__link'>Project</router-link>
                        <!-- <a class='menu__link' href='projects.html'>Projects</a> -->
                    </li>
                    <!-- <li class="menu__item">
                        <a class='menu__link' href='project.html'>Project</a>
                    </li> -->
                    <li class="menu__item">
                        <router-link to="/BlogPage" class='menu__link'>Blog</router-link>
                        <!-- <a class='menu__link' href='blog.html'>Blog</a> -->
                    </li>
                    <!-- <li class="menu__item">
                        <a class='menu__link' href='/contact'>Contact</a>
                    </li> -->
                </ul>
            </nav>
            <div class="header__actions">
                <div>

                </div>
                <a href="#" class="header__search" >
                    <img src="../img/icons/search.svg" alt="search" />
                </a>
                <div class="header__burger icon-menu">
                    <span></span>
                </div>
            </div>
        </div>
    </header>
<!-- </div> -->
<!-- </div> -->
</template>

<script>
export default {
  name: 'HeaderBlock',

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
