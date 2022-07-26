<template>
  <div class="container-main">
    <Header />
    <div class="container-view">
      <Navigation class="navigation-main" />
      <div>
        <router-view class="content-view" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "localPage",
  components: { Header, Navigation },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<style>
.container-main {
  width: 100vw;
  margin: auto;

}
.content-view {
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 200px;
  top: 60px;
  position: relative;
}
.navigation-main{

   background-color: #f0f0f0;
}
/* reponsive ipag */
@media screen and (max-width: 1024px) {
 .content-view {
  width: 100%;
  left: 0;
 top: 60px;
 }
}
</style>