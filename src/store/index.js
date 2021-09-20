import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
      {
        img: "vern.jpg",
        description: "Ж. Верн, “Двадцать тысяч лье под водой”",
        style: "Приключения",
        price: "168 р.",
        id: "14306d090ec043199d0186fb7242c844",
        count: 1,
      },
      {
        img: "pushkin.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quisquam.",
        style: "Классика",
        price: "268 р.",
        id: "23e2b051c9ac4a5cb81748e841eed082",
        count: 1,
      },
      {
        img: "oscar.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quisquam.",
        style: "Сказки",
        price: "219 р.",
        id: "e7ce62c416f54400a1525eea4293f35a",
        count: 1,
      },
      {
        img: "kun.jpg",
        description: "Н. Кун, “Легенды и мифы Древней Греции”",
        style: "Классика",
        price: "128 р.",
        id: "48ad94b79dc34f8e89f165eb952f45fc",
        count: 1,
      },
      {
        img: "gugo.jpg",
        description: "В. Гюго, “Собор Парижской Богоматери”",
        style: "Классика",
        price: "361 р.",
        id: "432550ee40884f5eab0112c28fb9eb81",
        count: 1,
      },
      {
        img: "green.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quisquam.",
        style: "Сказки",
        price: "232 р.",
        id: "a494b3d0639f4b06bb39522c71765c53",
        count: 1,
      },
      {
        img: "goncharov.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quisquam.",
        style: "Приключения",
        price: "124 р.",
        id: "8d5c6e0062314aeaafd2b9d35a374d74",
        count: 1,
      },
      {
        img: "gomer.jpg",
        description: "Гомер, “Илиада”",
        style: "Приключения",
        price: "345 р.",
        id: "b0309b54040b415692443c2f3c4b8c46",
        count: 1,
      },
      {
        img: "gogol.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quisquam.",
        style: "Сказки",
        price: "237 р.",
        id: "0e9d6910b1bb4847b98b94cbae00d193",
        count: 1,
      },
      {
        img: "duma.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quisquam.",
        style: "Приключения",
        price: "137 р.",
        id: "d91e2c9384bd49568fae20fa77b431e4",
        count: 1,
      },
      {
        img: "defo.jpg",
        description: "Д. Дефо, “Робинзон Крузо”",
        style: "Классика",
        price: "542 р.",
        id: "1a02b717d6194a58b78a391933e84f2b",
        count: 1,
      },
      {
        img: "dante.jpg",
        description: "Д. Алигьери, “Божественная комедия”",
        style: "Классика",
        price: "1522 р.",
        id: "e620205c85744612a4ff69d0ac1f6644",
        count: 1,
      },
      {
        img: "carrol.jpg",
        description: "Л. Кэрролл, “Алиса в Стране чудес и в Зазеркалье”",
        style: "Приключения",
        price: "522 р.",
        id: "bc08193a785849fc908a3f2f7c3d78a2",
        count: 1,
      },
      {
        img: "bulgakov.jpg",
        description: "М. Булгаков, “Мастер и Маргарита”",
        style: "Сказки",
        price: "431 р.",
        id: "c9e24f2120394c3893087a67c580f26f",
        count: 1,
      },
      {
        img: "bladbarry.jpg",
        description: "Р. Брэдбери, “Вино из одуванчиков”",
        style: "Классика",
        price: "389 р.",
        id: "e06ec83e882d48318d3fb0a6cda752fb",
        count: 1,
      },
    ],
    cart: [],
  },
  mutations: {
    SET_CART(state, product) {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map((item) => {
          if (item.id === product.id) {
            isProductExist = true;
            item.count += 1;
          }
        });
        if (!isProductExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_CART(state, index) {
      state.cart.splice(index, 1);
    },
    DEL_PRODUCT_CART(state, product) {
      state.cart.map((item) => {
        if (item.id === product.id) {
          item.count--;
        }
      });
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  actions: {},
  modules: {},
  getters: {
    GET_CART(state) {
      return state.cart;
    },
    GET_TOTAL_CART(state) {
      return state.cart.reduce((acc, item) => {
        let multiplication = item.count * parseInt(item.price);
        acc += multiplication;
        return acc;
      }, 0);
    },
    GET_TOTAL_COUNTER(state) {
      return state.cart.reduce((acc, item) => {
        acc += item.count;
        return acc;
      }, 0);
    },
  },
});
