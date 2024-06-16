<template>
  <div>
    <div class="overlay active">
    <div class="webp menu-open">
    <!-- <div>
        <nav class="header__menu menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/ArticlesPage">Articles</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/ProjectsPage" class='menu__link'>Projects</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/ProjectPage" class='menu__link'>Project</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/BlogPage" class='menu__link'>Blog</router-link>
                    </li>
                </ul>
            </nav>
    </div> -->
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'ModalMenu',

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

/* //затемнение */
.overlay.active {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    background-color: #292f36;
    width: 100%;
    height: 100%;
    z-index: 7;
    opacity: .6
}

/* а это сам блок, когда нажали на крестик, в мобиле. тут и поведение иконки */
.icon-menu {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50px;
        flex: 0 0 50px;
        position: relative;
        margin-left: 32px;
        height: 27px;
        z-index: 8
    }

    .icon-menu span,
    .icon-menu::after,
    .icon-menu::before {
        position: absolute;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: #292f36;
        -webkit-transition: all .3s ease-out 0s;
        transition: all .3s ease-out 0s
    }

    .icon-menu span {
        top: calc(50% - 1px)
    }

    .icon-menu::after,
    .icon-menu::before {
        content: ""
    }

    .icon-menu::before {
        top: 0
    }

    .icon-menu::after {
        bottom: 0
    }

    .menu-open .icon-menu span {
        width: 0
    }

    .menu-open .icon-menu::before {
        top: calc(50% - 1px);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .menu-open .icon-menu::after {
        bottom: calc(50% - 1px);
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }

    project__popup {
    position: absolute;
    z-index: 8;
    border-radius: 0;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    width: 120%
}

.project__popup.active {
    opacity: 1;
    pointer-events: all
}

.project__popup img {
    width: 100%;
    height: 100%
}

</style>
