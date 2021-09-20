<template>
  <div class="novelty__wrapper container">
    <Modal ref="modal" @closeModal="closeModal">
      <p slot="modal">Товар добавлен в корзину!</p>
    </Modal>
    <h2 class="caption-h2">Горячие новинки</h2>
    <swiper ref="MySwiper" class="swiper" :options="swiperOption">
      <swiper-slide v-for="book in $store.state.books" :key="book.id">
        <img :src="require(`@/images/books/${book.img}`)" :alt="book.description">
        <h3 class="caption-h3">{{ book.description }}</h3>
        <h4 class="caption-h4">{{ book.style }}</h4>
        <footer>
          <p>{{ book.price }}</p>
          <button class="btn-support" @click="addProductInCart(book)">Купить</button>
        </footer>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev" style="color: black"></div>
      <div class="swiper-pagination" slot="pagination" style="color: black"></div>
      <div class="swiper-button-next" slot="button-next" style="color: black"></div>
    </swiper>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
import 'swiper/css/swiper.css'
import Modal from "@/components/Modal";

export default {
  name: "Novelty",
  components: {Modal, Swiper, SwiperSlide},
  data() {
    return {
      swiperOption: {
        slidesPerView: screen.width > 1300 ? 3 : 1,
        spaceBetween: 30,
        slidesPerGroup: screen.width > 1300 ? 3 : 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: screen.width > 1300 ? '.swiper-pagination' : null,
          clickable: screen.width > 768
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  methods: {
    ...mapMutations([
      'SET_CART',
    ]),
    addProductInCart(product) {
      this.SET_CART(product)
      this.$refs.modal.$el.classList.add('active')
      setTimeout(() => {
        this.closeModal()
      }, 2500)
    },
    closeModal() {
      this.$refs.modal.$el.classList.remove('active')
    }
  },
}
</script>
<style lang="scss">
.novelty__wrapper {
  position: relative;
  margin-bottom: 50px;
}
</style>
