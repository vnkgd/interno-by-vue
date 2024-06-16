<template>
  <div class="popup-search" v-if="isVisible">
    <div class="popup-search-content">
      <button class="close-btn" @click="closePopup">
        &times;
      </button>
      <input type="text" v-model="searchQuery" placeholder="Введите запрос..." />
      <button class="hero__button button button_default" @click="performSearch">Найти</button>
      <div class="error-message" v-if="showErrorMessage">Введите что-нибудь для поиска</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupSearch',
  data () {
    return {
      isVisible: false,
      searchQuery: '',
      showErrorMessage: false
    }
  },
  methods: {
    openPopup () {
      // так выдаёт ошибку
      // // Проверяем, находится ли пользователь на странице поиска
      // if (this.$route.name === 'PopupSearchPage' && this.$route.params.query === this.searchQuery) {
      //   // Если да, то не выполняем переход
      //   return
      // }
      // Открываем всплывающее окно
      this.isVisible = true
      // Очищаем поисковую строку
      this.searchQuery = ''
      // так выдаёт ошибку
      // Выполняем переход на страницу поиска
      // this.$router.push({ name: 'PopupSearchPage', params: { query: this.searchQuery } })
    },
    closePopup () {
      this.isVisible = false
    },
    performSearch () {
      // this.$router.push({ name: 'PopupSearchPage', params: { query: this.searchQuery } })
      // this.closePopup()
      // // Очищаем поисковую строку
      // this.searchQuery = ''
      // this.showErrorMessage = false
      // Проверяем, не пустая ли поисковая строка
      if (!this.searchQuery.trim()) {
        // Если пустая, показываем сообщение об ошибке
        this.showErrorMessage = true
        return
      }
      // Если поисковая строка не пустая, выполняем переход
      this.$router.push({ name: 'PopupSearchPage', params: { query: this.searchQuery } })
      this.closePopup()
    // }
    }
  }
}
</script>

<style scoped>
.popup-search {
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
}

.popup-search-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.search-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

/* Ваши стили */
.error-message {
  color: red;
  margin-top: 0.5rem;
}
</style>
