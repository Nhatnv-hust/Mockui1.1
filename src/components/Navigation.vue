<template>
  <div class="navigation">
    <div class="sidebar" v-for="nav in navs" :key="nav.id">
      <div>
        <router-link :to="nav.href">
          <div
            class="sidebar-item"
            :class="[
              nav.border ? 'borderTrue' : '',
              nav.margin ? 'marginTrue' : '',
            ]"
          >
            <div
              class="sidebar-post"
              @click="active = nav.id"
              :class="{ activeClass: nav.id === active }"
            >
              <div class="sidebar-post-host">
                <div class="sidebar-img">
                  <i :class="nav.icon"></i>
                </div>
                <div class="sidebar-title">{{ nav.title }}</div>
              </div>
              <div class="sidebar-infor" v-if="nav.infor">{{ nav.infor }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation-page",
  data() {
    return {
      active: false,
      navs: [
        {
          id: 1,
          href: "/News",
          icon: "fas fa-newspaper",
          img: require("../assets/sidebar/siren-on.png"),
          title: "News",
          infor: "12",
        },
        {
          id: 2,
          href: "/",
          icon: "fas fa-chalkboard",
          img: require("../assets/sidebar/chalkboard.png"),
          title: "Technology",
          infor: "12",
        },
        {
          id: 3,
          href: "/Music",
          icon: "fas fa-play",
          img: require("../assets/sidebar/play.png"),
          title: "Music",
          infor: "",
        },
        {
          id: 4,
          href: "/Feedback",
          icon: "fas fa-clipboard-check",
          img: require("../assets/sidebar/comment-alt.png"),
          title: "Feedback",
          infor: "99+",
          isDisplayBr: true,
          margin: true,
          border: false,
        },
        {
          id: 5,
          href: "/Survey",
          icon: "fas fa-comment-alt",
          img: require("../assets/sidebar/clipboard-check.png"),
          title: "Survey",
          infor: "12",
          isDisplayBr: true,
          margin: false,
          border: true,
        },
      ],
    };
  },
  methods: {
    handleActive() {
      this.active = true;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gulzar&family=Mingzat&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.navigation {
  height: 100%;
  position: fixed;
  border-right: 1px solid #f0f0f0;
  top: 61px;
  z-index: 10;
  /* margin-top: 16px; */
  background-color: white;
}
.sidebar-item {
  width: 260px;
  padding: 2px 16px;
  background-color: white;
}
.sidebar-post {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-item:hover .sidebar-post {
  background-color: #007c7c;
  color: white;
  border-radius: 40px;
}
.sidebar-post-host {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-title {
  text-decoration: none;
  font-style: 14px;
  font-weight: 500;
  line-height: 24px;
}
a {
  color: #191919;
  text-decoration: none;
}
.sidebar-img {
  padding: 7px 0;
  margin: 0px 14px;
}
.sidebar-infor {
  background: #e72511;
  border-radius: 25px;
  padding: 0px 10px;
  margin-right: 14px;
  color: white;
  font-size: 13px;
  font-weight: 700;
}
.sidebar-item.borderTrue .sidebar-post {
  margin: 20px 0;
}

.sidebar-item.marginTrue .sidebar-post {
  margin-bottom: 20px;
}
.sidebar-item.borderTrue {
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
}
.activeClass {
  background-color: #007c7c;
  border-radius: 40px;
  color: #ffffff;
}
</style>