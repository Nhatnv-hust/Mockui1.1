<template>
  <div class="container-main">
    <Header />
    <div class="container-view">
      <Navigation />
      <router-view class="content-view"/>
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
.container-main{
  width: 100vw;
  margin:auto;
}
.content-view{
  width: calc(100vw - 260px);
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 260px; 
  top: 60px;
  position: relative;

}

</style>