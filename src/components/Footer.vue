<template>
<footer class="footer-component__wrapper">
 <div class="container">
    <div class="footer-component__inner">
      <div class="footer-component__inner_left">
        <div class="header__logo">
          <a href="#">
            Olympians Books
          </a>
        </div>
        <a href="tel:+30922040281" style="color: white;">+30922040281</a>
      </div>
      <ul>
        <router-link to="/" exact>Главная</router-link>
        <router-link to="/catalog">Каталог</router-link>
        <router-link to="/cart">Корзина</router-link>
      </ul>
    </div>
 </div>
</footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer-component__wrapper {
  width: 100%;
  background-color: $main-blue;
  margin-top: 140px;
  .router-link-active, .router-link-exact-active {
    color: white !important;
  }
  .footer-component__inner {
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    .footer-component__inner_left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 576px) {
        flex-direction: column;
      }
    }
    .header__logo {
      margin-right: 150px;
      @media screen and (max-width: 768px) {
        margin-right: 50px;
      }
      a {
        font-size: 30px;
        line-height: 45px;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 20px;
          line-height: 30px;
        }
      }

    }
    a {
      color: white;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: $letter-spacing;
      @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 27px;
      }
    }
    ul {
      display: flex;
      a:nth-child(1), a:nth-child(2) {
        margin-right: 150px;
        @media screen and (max-width: 1024px) {
          margin-right: 20px;
        }
      }
      a:last-child {
        margin-right: 50px;
        @media screen and (max-width: 1024px) {
          margin-right: 10px;
        }
      }
      & {
        @media screen and (max-width: 576px) {
          flex-direction: column;
        }
      }
    }
  }
}
</style>