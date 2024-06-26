// import Vue from 'vue' //перенесли в main.js
// import Vuex from 'vuex' //перенесли в main.js

// Vue.use(Vuex) //перенесли в main.js

// export const store new Vuex.Store({ //иначе ругается
export default {
  state: {
    // начальное состояние
    counter: 0,
    projectArticleState: 'Minimal Look Bedrooms',
    projectTextState1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
    projectTextState2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
    searchResults: []
  },
  mutations: {
    // методы для изменения состояния
    setSearchResults (state, results) {
      state.searchResults = results
    }
  },
  actions: {
    // методы для асинхронных операций
    searchContent ({ commit }, query) {
      // Здесь вы будете запрашивать данные из API или получать их из другого источника
      // и сохранять результаты в Vuex-хранилище
      const mockResults = [
        { id: 1, title: 'Результат 1', content: 'Содержимое результата 1' },
        { id: 2, title: 'Результат 2', content: 'Содержимое результата 2' },
        { id: 3, title: 'Результат 3', content: 'Содержимое результата 3' }
      ]
      commit('setSearchResults', mockResults)
    }
  },
  getters: {
    // методы для чтения состояния
  },
  modules: {
    // модули Vuex для разделения хранилища на под-хранилища
  }
  // })
}
