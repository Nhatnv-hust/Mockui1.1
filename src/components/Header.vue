<template>
  <div class="navbarss">
    <i class="fa-solid fa-house-user"></i>
    <div class="navbar-container">
      <div class="navbar__logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="nav__menu-item" v-for="item in items" :key="item.id">
        <div class="menu-item">
          <router-link
            :to="item.href"
            @click="active = item.id"
            :class="{ activeClass: item.id === active }"
            class="nav__menu-item-icon"
          >
            <i :class="item.icon"></i>
            <!-- <img :src="item.img" alt="" /> -->
            <div>{{ item.name }}</div>
          </router-link>
        </div>
      </div>

      <div class="nav__search">
        <div class="search-field">
          <button class="search-field-btn">
            <img src="../assets/search.png" alt="input" />
          </button>
          <div class="search-field-input">
            <input type="text" placeholder="Search will seed post" />
          </div>
        </div>
      </div>
      <div class="nav__userId">
        <div class="nav__userId-notify">
          <button class="nav__userId-notify-btn">
            <img src="../assets/bell.png" alt="" />
          </button>
          <div class="nav__userId-infor">
            <div class="nav__userId-infor-avatar">
              <img src="../assets/Divider.png" alt="" />
            </div>
            <div class="nav__userId-infor-name">
              <div>Bessie Cooper</div>
            </div>
            <div class="nav__userId-infor-caret">
              <img src="../assets/caret-down.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header-container",
  data() {
    return {
      active: false,
      logo: require("../assets/logo.png"),
      items: [
        {
          id: 1,
          href: "/home",
          icon: "fas fa-newspaper",
          img: require("../assets/home-alt.png"),
          name: "Home",
        },
        {
          id: 2,
          href: "/Post",
          icon: "fas fa-book",
          img: require("../assets/paper-plane.png"),
          name: "Post",
        },
        {
          id: 3,
          href: "/Activity",
          icon: "fas fa-image",
          img: require("../assets/heart.png"),
          name: "Activity",
        },
        {
          id: 4,
          href: "/Bookmark",
          icon: "fas fa-bookmark",
          img: require("../assets/bookmark.png"),
          name: "Bookmark",
        },
      ],
    };
  },
};
</script>

<style scoper>
@import url("https://fonts.googleapis.com/css2?family=Gulzar&family=Mingzat&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.navbarss {
  width: 100%;
  height: 61px;
  position: fixed;
  z-index: 1;
  padding: 10px 32px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  gap: 24px;
}
.navbar__logo {
  width: 85.5px;
  padding-top: 6.5px;
  padding-bottom: 9.5px;
}
.nav__menu-item {
  height: 32px;
}
.nav__menu-item-icon {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #191919;
  font-size: 14px;
}
.nav__menu-item-icon div {
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  padding: 4px 0px 4px 6px;
}
.nav__menu-item-icon > img {
  padding: 6px 5px 6px 4px;
}
.nav__menu-item-icon:hover {
  text-decoration: none;
  color: #191919;
}
.active {
  color: #007c7c;
}

.nav__search {
  display: flex;
  justify-content: center;
  width: 55%;
  height: 40px;
  align-items: center;
  padding: 0px 32px;
}
.search-field {
  display: inline-flex;
  align-items: center;
  border-radius: 54px;
  width: 280px;
  height: 40px;
  background-color: #f0f0f0;
}

.search-field-btn {
  margin: 8px 8px 8px 12px;
  border: none;
  cursor: pointer;
}
.search-field-btn img {
  width: 14px;
  height: 14px;
}
.search-field-input {
  padding: 8px 8px 8px 0px;
}
.search-field-input input {
  width: 228px;
  border: none;
  background-color: #f0f0f0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.search-field-input input :focus {
  border: 1px solid #ccc;
}
.nav__userId {
  width: 207px;
  height: 40px;
}
.nav__userId-notify {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.nav__userId-notify-btn {
  padding: 8px 7px 4px 7px;
  border: none;
  background-color: #fff;
  cursor: pointer;
}
.nav__userId-notify-btn :hover {
  background-color: #f0f0f0;
}
.nav__userId-infor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  margin-top: 2px;
}
.nav__userId-infor-avatar {
  margin-top: 2px;
}
.nav__userId-infor-name {
  padding: 0px 8px 0px 8px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.nav__userId-infor-name p {
  margin-bottom: none;
  display: inline;
}
.nav__userId-infor-caret {
  width: 9px;
  height: 24px;
  padding-right: 7px;
  padding-left: 8px;
}
.activeClass {
  /* background-color: #007c7c; */
  color: #007c7c;
}
</style>