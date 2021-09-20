<template>
  <div class="library__wrapper container">
    <h2>Библиотека</h2>
    <div class="library__category">
      <p>Категория</p>
      <p>Классика</p>
      <p>Приключения</p>
      <p>Сказки</p>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="book in $store.state.books" :key="book.id">
        <img :src="require(`@/images/books/${book.img}`)" :alt="book.description">
        <h3>{{ book.description }}</h3>
        <h4>{{ book.style }}</h4>
        <footer>
          <p>{{ book.price }}</p>
          <button class="btn-support" @click="addToCart(book)">Купить</button>
        </footer>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
import 'swiper/css/swiper.css'

export default {
  name: "Library",
  components: {
    Swiper, SwiperSlide
  },
  created() {
    if (screen.width > 768) {
      this.swiperOption.slidesPerView = 3
    } else if (screen.width > 568 && screen.width < 768) {
      this.swiperOption.slidesPerView = 2
    } else {
      this.swiperOption.slidesPerView = 1
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 3,
        spaceBetween: screen.width > 768 ? 30 : 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    ...mapMutations(['SET_CART']),
    addToCart(product) {
      this.SET_CART(product)
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
.library__wrapper {
  h2 {
    font-size: 64px;
    line-height: 96px;
    letter-spacing: $letter-spacing;
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    margin-top: 400px;
    @media screen and (max-width: 768px) {
      font-size: 48px;
      line-height: 72px;
      margin-top: 200px;
    }
    @media screen and (max-width: 576px) {
      font-size: 30px;
      line-height: 45px;
    }
  }
  .library__category {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 70px;
    margin-bottom: 60px;
    @media screen and (max-width: 576px){
      flex-direction: column;
    }
    p:first-child {
      font-size: 30px;
      line-height: 45px;
      @media screen and (max-width: 768px){
        font-size: 24px;
        line-height: 36px;
        text-transform: uppercase;
      }
    }
    p:not(:first-child) {
      font-size: 24px;
      line-height: 36px;
      font-family: "Raleway", sans-serif;
      @media screen and (max-width: 768px){
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
  .swiper-container {
    @media screen and (max-width: 768px){
      width: 640px;
    }
    @media screen and (max-width: 576px){
      width: 300px;
    }
    height: 2200px;
    .swiper-button-prev,
    .swiper-button-next {
      top: 94.5%;
    }
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      left: 510px;
      @media screen and (max-width: 768px){
        left: 150px;
      }
      @media screen and (max-width: 576px){
        left: 50px;
      }
    }
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      right: 510px;
      @media screen and (max-width: 768px){
        right: 150px;
      }
      @media screen and (max-width: 576px){
        right: 50px;
      }
    }
  }
}
.swiper {
  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    footer p {
      margin-left: 0;
    }
  }
}
</style>