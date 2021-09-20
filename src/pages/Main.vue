<template>
  <div>
    <Header></Header>
    <Caption>
      <img src="../images/background1.jpg" alt="ascension">
      <h1 class="caption-h1" slot="title">Книги, которые вознесут вас на Олимп</h1>
    </Caption>
    <Novelty></Novelty>
    <about-us></about-us>
    <submit-form></submit-form>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Caption from "@/components/Caption";
import Novelty from "@/components/Novelty";
import AboutUs from "@/components/AboutUs";
import SubmitForm from "@/components/SubmitForm";
import Footer from "@/components/Footer";

export default {
  name: "mains",
  components: {Footer, SubmitForm, AboutUs, Novelty, Caption, Header}
}
</script>

<style lang="scss">

</style>