<template>
    <!-- //если кликать вне всплывающего онка, окно будет закрываться + метод доработали -->
    <div class="popup-menu" v-if="isVisible" @click.self="closePopup">
      <div class="popup-menu-content">
        <button class="close-btn" @click="closePopup">&times;</button>
        <nav>
        <ul>
          <li v-for="link in links" :key="link.path" class="popup-list">
            <router-link :to="link.path" @click.native="closePopup" @mouseover="hoverLink = link.path"
            @mouseout="hoverLink = null"
            :class="{ 'hovered': hoverLink === link.path }">
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </nav>
        <!-- <nav>
            <ul class="">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/ArticlesPage">Articles</router-link></li>
                <li><router-link to="/ProjectsPage">Projects</router-link></li>
                <li><router-link to="/ProjectPage">Project</router-link></li>
                <li><router-link to="/BlogPage">Blog</router-link></li>
            </ul>
        </nav> -->
        <!-- <nav class="header__menu menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link to="/">Home</router-link>
                    </li>
                </ul>
            </nav> -->
      </div>
    </div>
  </template>

<script>
export default {
  name: 'PopupMenu',
  data () {
    return {
      isVisible: false,
      links: [
        { path: '/', label: 'Home' },
        { path: '/ArticlesPage', label: 'Articles' },
        { path: '/ProjectsPage', label: 'Projects' },
        { path: '/ProjectPage', label: 'Project' },
        { path: '/BlogPage', label: 'Blog' }
      ],
      hoverLink: null
    }
  },
  methods: {
    openPopup () {
      this.isVisible = true
    },
    closePopup () {
      if (event.target === event.currentTarget) {
        this.isVisible = false
      }
    }
  }
}
</script>

  <style scoped>
  .popup-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 48px 0;
  opacity: 1;
  font-size: 32px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-column-gap: 48px;
    -moz-column-gap: 48px;
    column-gap: 48px
}

.popup-menu-content {
  background-color: #f4f0ec;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 80%;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin-bottom: 2rem;
}

nav a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #cda274;
}

nav a.hovered {
  color: #cda274;
}

popup-link :hover {
  color: #cda274;
}

  </style>
