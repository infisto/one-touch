<template>
  <header>
    <div class="header__wrapper container">
      <div class="header__logo">
        <a href="#">
          Olympians Books
        </a>
      </div>
      <div class="header__button_arrow" @click="handleClickMenu"></div>
      <div class="header__menu" ref="dropdown">
        <div for="header__button_checkbox" class="header__button_arrow reverse" @click="handleClickMenu"></div>
        <ul>
          <router-link to="/" exact>Главная</router-link>
          <router-link to="/catalog">Каталог</router-link>
          <router-link to="/cart">Корзина</router-link>
        </ul>
      </div>
      <div class="header__cart" @click="$router.push('/cart')" v-if="!$store.getters.GET_CART.length">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 64" fill="none">
          <path
              d="M48.3757 20.1322C48.0417 18.0035 46.2052 16.4313 44.0487 16.4452H39.6104V12.2296C39.6104 5.46783 34.1287 0 27.3809 0C20.633 0 15.1513 5.48174 15.1513 12.2296V16.4313H10.713C8.55652 16.4174 6.72 17.9896 6.38609 20.1183L0.0139128 56.0417C-2.12504e-07 56.0974 0 56.153 0 56.2087C0 60.5078 3.49217 63.9861 7.7913 64H46.9704C51.2696 64 54.7478 60.5078 54.7617 56.2087C54.7617 56.153 54.7617 56.0974 54.7478 56.0417L48.3757 20.1322ZM17.0852 12.2296C17.0852 6.55304 21.6904 1.94783 27.367 1.94783C33.0435 1.94783 37.6487 6.55304 37.6487 12.2296V16.4313H17.0852V12.2296ZM46.9704 62.0522H7.77739C4.5913 62.0522 1.98957 59.4922 1.93391 56.2922L8.27826 20.4661V20.4522C8.45913 19.2696 9.4887 18.393 10.6852 18.393H15.1235V24.8487C15.1235 25.3913 15.5548 25.8226 16.0974 25.8226C16.64 25.8226 17.0713 25.3913 17.0713 24.8487V18.393H37.6487V24.8487C37.6487 25.3913 38.08 25.8226 38.6226 25.8226C39.1652 25.8226 39.5965 25.3913 39.5965 24.8487V18.393H44.0348C45.2313 18.393 46.2609 19.2696 46.4417 20.4522V20.4661L52.7861 56.2922C52.7583 59.4922 50.1565 62.0522 46.9704 62.0522Z"
              fill="white"/>
        </svg>
      </div>
      <div class="header__cart" v-else @click="$router.push('/cart')">
        <p>{{ GET_TOTAL_COUNTER }} шт. товара / {{ GET_TOTAL_CART }} р.</p>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Header",
  methods: {
    handleClickMenu() {
      this.$refs.dropdown.classList.toggle('active')
    }
  },
  computed: {
    ...mapGetters(['GET_TOTAL_COUNTER', 'GET_TOTAL_CART'])
  }
}
</script>

<style lang="scss">
header {
  background-color: $main-blue;
  height: 105px;
}

.header__wrapper {
  position: absolute;
  width: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 101;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {

  }
}

.header__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  a {
    display: inline-block;
    width: 184px;
    font-family: "Archeologicaps", sans-serif;
    font-size: 24px;
    padding: 1rem 0;
    line-height: 36px;
    font-weight: 500;
    color: white;
    letter-spacing: $letter-spacing;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      width: 160px;
      line-height: 21px;

    }
    @media screen and (max-width: 576px) {
      font-size: 10px;
      line-height: 15px;
      width: 90px;
    }
  }
}

.header__button_arrow {
  transform: translateX(-50%);
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 64px;
  height: 18px;
  @media screen and (max-width: 768px) {
    width: 32px;
    height: 9px;
    right: 55px;
  }
  @media screen and (max-width: 576px) {
    width: 40px;
    height: 11px;
    right: 15px;
  }

  &:before, &:after {
    content: "";
    background-color: white;
    height: 3px;
    width: 38px;
    position: absolute;
    top: 9px;
    right: 16px;
    transform: rotate(28deg);
    z-index: 100;
    @media screen and (max-width: 768px) {
      width: 25px;
      right: 10px;
    }
  }

  &:after {
    top: 9px;
    right: -16px;
    transform: rotate(-28deg);
    @media screen and (max-width: 768px) {
      right: -10px;
    }
  }
}

.header__cart {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    @include font($ff-forum, white, 24px, 36px, 18px, 26px, 18px, 26px, none)
  }

  svg {
    width: 55px;
    height: 64px;
    @media screen and (max-width: 768px) {
      width: 28px;
      height: 32px;
    }
    @media screen and (max-width: 576px) {
      width: 34px;
      height: 40px;
    }
  }
}

.header__menu {
  text-align: center;
  width: 420px;
  height: 460px;
  position: absolute;
  top: -300%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: $fz-price;
  line-height: 45px;
  letter-spacing: $letter-spacing;
  background-color: white;
  transition: .3s;
  z-index: 10000;

  &.active {
    top: 230px;
    transition: .3s;
    @media screen and (max-width: 768px) {
      top: 150px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 33px;
    width: 340px;
    height: 330px;
  }
  @media screen and (max-width: 576px) {
    width: 320px;
  }

  ul {
    text-align: center;

    a {
      color: black;

      &:hover {
        text-decoration: underline;
      }

      &:active {
        color: $main-blue;
      }
    }
  }

  a:first-child {
    margin-top: 65px;
  }

  a:not(:last-child) {
    display: block;
    margin-bottom: 46px;
  }

  .header__button_arrow {
    transform: rotate(180deg);
    top: 23px;
    left: 15px;

    &:before, &:after {
      background-color: black;
    }
  }
}
</style>