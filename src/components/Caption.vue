<template>
  <section class="caption__wrapper">
    <slot></slot>
    <div class="container">
      <slot name="title"></slot>
      <button class="btn">Узнать больше</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Ascension"
}
</script>

<style lang="scss">
.caption__wrapper {
  position: relative;
  margin-bottom: 410px;
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    top: -90px;
    margin-bottom: 270px;
  }
  @media screen and (max-width: 576px) {
    top: -115px;
    margin-bottom: 135px;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 840px;
    z-index: -10;
    @media screen and (max-width: 768px) {
      height: 720px;
    }
    @media screen and (max-width: 576px) {
      height: 590px;
    }
  }
}
</style>