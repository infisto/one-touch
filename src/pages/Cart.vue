<template>
  <div class="cart__wrapper">
    <Modal ref="modal" @closeModal="closeModal">
      <p slot="modal">Благодарим за покупку! Ваши ценные манускрипты прибудут в ближайшее время. Возвращайтесь
        ещё!</p>
    </Modal>
    <Header class="cart__header_wrapper"></Header>
    <div class="container">
      <h2 class="caption-h2">Корзина</h2>
      <div class="cart__table" v-if="getCartList.length">
        <div class="cart__header">
          <p class="text">Название товара</p>
          <p class="text">Цена за шт.</p>
          <p class="text">Количество</p>
          <p class="text">Общая цена</p>
        </div>
        <div class="cart__content">
          <div class="cart__item" v-for="(book, index) in getCartList" :key="`${index} ${book.id}`">
            <picture>
              <img :src="require(`@/images/books/${book.img}`)" :alt="book.description">
              <p class="text">{{ book.description }}</p>
            </picture>
            <p class="text">{{ book.price }}</p>
            <div class="cart__item_cart-btn">
              <svg @click="removeProductFromCart(book)" xmlns="http://www.w3.org/2000/svg" width="32" height="5"
                   viewBox="0 0 32 5" fill="none">
                <path
                    d="M29.6184 0H2.38165C1.06979 0 0 1.06979 0 2.38165C0 3.69351 1.06979 4.7633 2.38165 4.7633H29.6184C30.938 4.7633 32 3.69351 32 2.38165C32 1.06979 30.9302 0 29.6184 0Z"
                    fill="black"/>
              </svg>
              <p class="text">{{ book.count }} шт.</p>
              <svg @click="addProductInCart(book)" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                   viewBox="0 0 32 32" fill="none">
                <path
                    d="M2.38248 18.0633H13.9367V29.6175C13.9367 30.9333 15.0034 32 16.3192 32C17.635 32 18.7017 30.9333 18.7017 29.6175V18.0633H29.6175C30.9333 18.0633 32 16.9966 32 15.6808C32 14.365 30.9333 13.2983 29.6175 13.2983H18.7017V2.38248C18.7017 1.06667 17.635 0 16.3192 0C15.0034 0 13.9367 1.06667 13.9367 2.38248V13.2983H2.38248C1.06667 13.2983 0 14.365 0 15.6808C0 16.9966 1.06667 18.0633 2.38248 18.0633Z"
                    fill="black"/>
              </svg>
            </div>
            <p class="text">{{ getProductAmount(book) }}</p>
            <svg @click="removeAllGroupProduct(index)" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                 viewBox="0 0 32 32" fill="none">
              <path
                  d="M0.928354 31.0853C2.16616 32.2997 4.17467 32.2997 5.41248 31.0853L16.288 20.4043L26.5719 31.0853C27.8098 32.2997 29.8183 32.2997 31.0561 31.0853C32.2939 29.8708 32.2939 27.8934 31.0561 26.679L20.7877 15.9981L31.0716 5.31711C32.3094 4.10266 32.3094 2.12529 31.0716 0.910838C29.8338 -0.303613 27.8253 -0.303613 26.5875 0.910838L16.2958 11.5918L5.42026 0.910838C4.18246 -0.303613 2.17394 -0.303613 0.936139 0.910838C-0.301666 2.12529 -0.301666 4.10266 0.936139 5.31711L11.8117 15.9903L0.928354 26.679C-0.309451 27.8934 -0.309451 29.863 0.928354 31.0853Z"
                  fill="black"/>
            </svg>
          </div>
          <div class="cart__total">
            <p class="text">Итого к оплате</p>
            <p class="text">{{ priceOfProduct(getTotalPrice) }} р.</p>
          </div>
          <div class="cart__btn">
            <button class="btn" @click="clearCart">Оформить заказ</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text">Ваша корзина пока пуста. Отыщите в библиотеке необходимые фолианты.</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {mapGetters, mapMutations} from "vuex"
import Modal from "@/components/Modal";

export default {
  name: "cart",
  components: {Modal, Footer, Header},
  computed: {
    ...mapGetters([
      'GET_CART', 'GET_TOTAL_CART'
    ]),
    getCartList() {
      return this.GET_CART
    },
    getProductAmount() {
      return (book) => {
        return book.count * parseInt(book.price)
      }
    },
    getTotalPrice() {
      return this.GET_TOTAL_CART
    },
    priceOfProduct() {
      return (price) => {
        const goodPrice = price.toString()
        const res = []
        let j = 0
        for (let i = goodPrice.length - 1; i >= 0; i--) {
          if (j % 3 !== 0) {
            res.push(goodPrice[i])
          } else {
            res.push(' ', goodPrice[i])
          }
          j++
        }
        return res.reverse().join('')
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_CART', 'REMOVE_CART', 'DEL_PRODUCT_CART', 'CLEAR_CART'
    ]),
    closeModal() {
      this.$refs.modal.$el.classList.remove('active')
    },
    addProductInCart(product) {
      this.SET_CART(product)
    },
    removeProductFromCart(book) {
      this.DEL_PRODUCT_CART(book)
    },
    removeAllGroupProduct(index) {
      this.REMOVE_CART(index)
    },
    clearCart() {
      this.$refs.modal.$el.classList.add('active')
      setTimeout(() => {
        this.$refs.modal.$el.classList.remove('active')
      }, 2500)
      this.CLEAR_CART()
    }
  }
}
</script>

<style lang="scss">
.cart__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  .cart__header_wrapper {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 105px;
      z-index: 10;
      background-color: $main-blue;
    }
  }

  .caption-h2 {
    margin-top: 140px;
  }

  .text {
    color: black;
    text-align: center;
  }

  .container {
    flex: 1 0 auto;
  }


  .header__wrapper {
    background-color: $main-blue;
  }

  .cart__table {
    width: 1300px;

    .cart__content {
      text-align: center;

      .btn {
        margin-top: 30px;
        color: black;
        border: 3px solid black;
      }
    }
  }

  .cart__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .cart__item {
    margin-top: 55px;
    max-width: 1300px;
    min-height: 220px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    picture {
      display: flex;
      align-items: center;
    }

    svg {
      cursor: pointer;
    }

    p {
      max-width: 310px;
    }

    img {
      width: 90px;
      height: auto;
    }

    .cart__item_cart-btn {
      display: flex;
      align-items: center;

      p {
        padding: 0 30px;
      }
    }
  }

  .cart__total {
    margin-top: 20px;
    font-family: "Forum", sans-serif;
    display: flex;
    justify-content: space-around;

    p:first-child {
      font-size: 42px;
      line-height: 63px;
      text-transform: uppercase;
    }

    p:last-child {
      font-size: 42px;
      line-height: 63px;
    }
  }

  .cart__btn {
    display: flex;
    justify-content: center;
  }
}
</style>