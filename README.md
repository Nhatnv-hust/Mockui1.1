# Navigation 2 vòng for
<template>
  <div class="survey">
    <div class="navigation">
      <div class="sidebar" v-for="nav in navs" :key="nav.id">
        <div>
          <router-link :to="nav.href">
            <div
              class="sidebar-post"
              @click="active = nav.id"
              :class="{ activeClass: nav.id === active }"
            >
              <div class="sidebar-post-host">
                <div class="sidebar-img">
                  <i :class="nav.icon"></i>
                  <!-- <img :src="nav.img" alt="" :class="{ testactive: nav.id === active }"/> -->
                </div>
                <div class="sidebar-title">{{ nav.title }}</div>
              </div>
              <div class="sidebar-infor" v-if="nav.infor">{{ nav.infor }}</div>
            </div>
            <!-- <hr class="hr" v-if="nav.isDisplayBr" /> -->
          </router-link>
        </div>
      </div>
    </div>
    <hr />
    <div class="navigation-survey" v-for="sub in subside" :key="sub.id">
      <router-link to="/survey">
        <div
          class="sidebar-survey"
          @click="active1 = sub.id"
          :class="{ activeClass: sub.id === active1 }"
        >
          <div class="sidebar-survey-host">
            <div class="survey-icon">
              <i class="fas fa-comment-alt"></i>
            </div>
            <div class="sidebar-title">{{sub.title}}</div>
          </div>
          <div class="sidebar-infor">{{sub.infor}}</div>
        </div>
      </router-link>
    </div>
    <hr />
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
          title: "News",
          infor: "12",
        },
        {
          id: 2,
          href: "/",
          icon: "fas fa-chalkboard",
          title: "Technology",
          infor: "12",
        },
        {
          id: 3,
          href: "/Music",
          icon: "fas fa-play",
          title: "Music",
          infor: "",
        },
        {
          id: 4,
          href: "/Feedback",
          icon: "fas fa-clipboard-check",
          title: "Feedback",
          infor: "99+",
          isDisplayBr: true,
        },
      ],
      active1: false,
      subside: [
        {
          id: 1,
          href: "/survey",
          icon: "fas fa-comment-al",
          title: "Survey",
          infor: "12",
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gulzar&family=Mingzat&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.survey {
  width: 260px;
  position: fixed;
  border-right: 1px solid #f0f0f0;
  top: 61px;
  z-index: 10;
  padding-top: 16px;
}
.sidebar {
  width: calc(100% - 32px);
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.sidebar-survey {
  width: calc(100% - 32px);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-post {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
}
.sidebar-post-host {
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  width: 228px;
  height: 40px;
  padding: 2px 0px;
}
.sidebar-post-host .sidebar-img {
  padding-right: 16px;
}
.sidebar-post-host .sidebar-img img {
  width: 24px;
  height: 24px;
  padding: 2px 4px;
  object-fit: contain;
}
.testactive {
  background-color: #ffff;
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
.sidebar-infor {
  border-radius: 40px;
  background-color: #e72511;
  color: #ffffff;
  font-style: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  padding: 0px 5px;
}
.side-sub {
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
}
.sidebar-border {
  border-bottom: 1px solid #f0f0f0;
}
.activeClass {
  background-color: #007c7c;
  border-radius: 40px;
  color: #ffffff;
}
.hr {
  padding: 0px 28px;
  margin: 12px;
}
.sidebar-survey {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 18px;
  height: 40px;
}
.survey-icon {
  padding-right: 16px;
}
.sidebar-survey-host {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>



