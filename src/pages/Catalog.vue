<template>
  <div>
    <Header></Header>
    <Caption>
      <img src="../images/background2.jpg" alt="ascension">
      <h1 slot="title" class="caption-h1">Собрание древних знаний</h1>
    </Caption>
    <Library></Library>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Caption from "@/components/Caption";
import Library from "@/components/Library";
import Footer from "@/components/Footer";

export default {
  name: "catalog",
  components: {Footer, Library, Caption, Header}
}
</script>

<style lang="scss">
.caption-h1 {
  margin-top: 80px;
  max-width: 750px;
  margin-bottom: 135px;
}
</style>