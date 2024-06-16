<template>
  <div>
    <div class="popupmenu">
        <div class="popupmenu__header">
            <span>Popup name</span>
            <span>
                <i class="material-icons">close</i>
            </span>
        </div>
        <div class="popupmenu__content">
            <slot></slot>
        </div>
        <div class="popupmenu__footer">
            <button class="close_modal">Закрыть</button>
            <button class="submit_btn">Добавить в корзину</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupMenuTest',

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

    .PopupMenuTest {
        padding: 16px;
        position: fixed;
        top: 50px;
        right: 0;
        left: 0;
        width: 400px;
        background: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7;
        z-index: 8
    }

    .popupmenu__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .popupmenu__content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popupmenu__footer {
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .submit_btn {
        padding: 8px;
        color: #ffffff;
        background: #75e752;
    }

    .close_modal {
        padding: 8px;
        color: #ffffff;
        background: #dd1e1e;
    }
</style>
