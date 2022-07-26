<template>
  <div class="avatatech-container">
    <div class="avatatech-infor">
      <div class="avatatech-user">
        <div class="avatatech-user-img">
          <img :src="imgTest" alt="avatar" />
        </div>
        <div class="avatatech-user-name">
          <div class="user-name">{{ this.name }}</div>
          <div class="user-time">{{ this.time }}</div>
        </div>
      </div>
      <div class="avatatech-tools">
        <div class="btn-main">
          <button class="btn">
            <img :src="imgpen" alt="" />
          </button>
          <button class="btn">
            <img :src="imgtrash" alt="" />
          </button>
          <button class="btn">
            <img :src="imgbookmark" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="avatatech-descrip">
      <div class="description">{{ this.content }}</div>
      <div class="showview">{{ this.showview }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "avataTech",
  data() {
    return {
      imgTest: require("../../../assets/Technology/avata/Divider.png"),
      name: "Ralph Edwards",
      time: "15 minutes ago",
      imgpen: require("../../../assets/Technology/avata/pen.png"),
      imgtrash: require("../../../assets/Technology/avata/trash.png"),
      imgbookmark: require("../../../assets/Technology/avata/bookmark.png"),
      content: `Search input is a must have of almost all apps.In this cheatsheet you can get inspiration on 6
variants of this component.
Which one is your favourite? 🤔`,
      showview: "View more",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gulzar&family=Mingzat&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.avatatech-container {
  width: 620px;
  height: 184px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.avatatech-infor {
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding-bottom: 8px;
}
.avatatech-user {
  display: flex;
}
.avatatech-user-name {
  padding: 2px 0px 2px 12px;
}
.user-name {
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
.user-time {
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #767676;
}
.btn {
  background-color: #fff;
  border: none;
}
.description {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  height: 72px;
  color: #191919;
  white-space: pre;
}
.showview {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  height: 24px;
  color: #0e489b;
}
@media only screen and (max-width: 620px) {
   .avatatech-container{
    width: 100%;
   }
  }
  .description{
     white-space: normal;

  }

</style>