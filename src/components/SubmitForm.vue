<template>
  <div class="container">
    <form class="submit-form__wrapper" @submit.prevent>
      <p>
        Хотите знать о книгах всё?
      </p>
      <p>Подпишитесь на нашу новостную рассылку</p>
      <div class="submit-form__email">
        <div class="email-form__wrapper">
          <input type="email" class="email-form" id="email">
          <label for="email"></label>
        </div>
        <button class="btn" type="submit">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SubmitForm"
}
</script>

<style lang="scss">
.submit-form__wrapper {
  text-align: center;
  margin-top: 140px;
  font-weight: normal;

  p:first-child {
    @include font($ff-forum, black, 42px, 54px, 30px, 45px, 30px, 45px, uppercase)
  }

  p:nth-child(2) {
    @include font($ff-raleway, black, 24px, 36px, 18px, 27px, 18px, 27px, none)
  }

  .btn {
    border-color: black;
    color: black;
    width: 310px;
    height: 60px;
    font-size: 30px;
    line-height: 45px;

    &:active {
      background-color: $main-blue;
    }

    @media screen and (max-width: 576px) {
      margin-top: 10px;
      width: 190px;
      height: 50px;
    }
  }

  .submit-form__email {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 65px;
    @media screen and (max-width: 576px) {
      flex-direction: column;
    }

    .email-form__wrapper {
      margin-right: 20px;
      @media screen and (max-width: 576px) {
        margin-right: 0;
      }
    }
  }
}

</style>