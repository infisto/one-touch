<template>
  <section class="container">
    <div class="about-us__wrapper">
      <div class="about-us__section">
        <picture>
          <img src="../images/content/book.jpg" alt="Book">
        </picture>
        <div class="about-us__description">
          <h2 class="caption-h2">О Нас</h2>
          <p class="text">Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто магазин, а настоящий
            клуб любителей книги, который объединяет в своем культурном пространстве людей самых разных интересов.</p>
        </div>
      </div>
      <div class="about-us__section">
        <div class="about-us__description">
          <h2 class="caption-h2">Гармония</h2>
          <p class="text">Наш проект «Гармония» объединяет читателей и авторов в реальности и в интернете. Каждую неделю проводятся
            встречи онлайн и вживую. Из наших регулярных рубрик вы узнаете много нового о книгах и писателях.
          </p>
        </div>
        <picture>
          <img src="../images/content/woman.jpg" alt="Woman">
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style lang="scss">
.about-us__wrapper {
  color: white;
  display: flex;
  flex-wrap: wrap;
  .about-us__section {
    display: flex;
    @media screen and (max-width: 576px) {
      flex-direction: column-reverse;
      &:last-child {
        flex-direction: column;
      }
    }

    picture {
      flex: 0 0 50%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        @media screen and (max-width: 768px) {
          object-fit: cover;
        }
      }
    }
  }
}

.about-us__description {
  background-color: $main-blue;
  .caption-h2 {
    color: white;
    padding-top: 20px;
    margin: 0;
  }
  p {
    padding: 2% 19%;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 80px 50px;
    }
    @media screen and (max-width: 576px) {
      padding: 30px 25px;
    }
  }
}
</style>