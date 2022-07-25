<template>
  <div class="Post-page">
    <div class="post-page-main">
      <div class="post-onpage">
        <div class="post-author-infor">
          <img :src="this.author.avt" alt="" />
          <span>{{ this.author.name }}</span>
        </div>
        <div class="post-header">
          <div class="post-title">{{ this.label }}*</div>
          <div
            class="post-dropdown"
            @click="showchanel"
            :class="[active ? 'active' : '']"
          >
            <span v-if="selectedItem">{{ selectedItem.selected }}</span>
            <span v-else>-- Please Select --</span>
            <!-- <input type="Text" placeholder="-- Please Select --" readonly /> -->
            <img src="../../assets/caret-down.png" alt="" />
          </div>
          <p class="error">{{ this.messageError }}</p>
          <!-- <Dropdown v-if="isshow" /> -->
          <div class="dropdown" v-if="isshow">
            <div class="dropdown-mainheader">
              <div class="dropdown-search">
                <img src="../../assets/search.png" alt="search" />
                <input
                  type="text"
                  placeholder="Search chanel"
                  v-model="search"
                />
              </div>
              <img
                src="../../assets/times.png"
                alt="times"
                @click="delsearch"
              />
            </div>
            <div class="dropdown-border"></div>
            <div class="dropdown-main-item">
              <div
                class="dorp-down-select"
                v-for="select in filteredList"
                :key="select.id"
                @click="showSelected(select.id)"
                :class="[select.isActiveDrop ? 'activedrop' : '']"
              >
                <div>{{ select.selected }}</div>
                <button v-if="select.check">
                  <i class="fas fa-chalkboard"></i>
                </button>
              </div>
              <div class="dropdown-modal" v-if="filteredList.length === 0">
                <img src="../../assets/search.png" alt="search" />
                <span>No result is found</span>
              </div>
            </div>
          </div>
          <!-- content-input -->
          <Contentposts @contentPost="contentPost" />
        </div>
      </div>
      <div class="post-br"></div>
      <Uploadimg @imgChanged="imgChanged" />
      <Hastag @pushHadtags="pushHadtags" />
      <div class="post-btn">
        <button class="btn btn-Discard" @click="discardData">Discard</button>
        <button
          class="btn btn-Post"
          :class="[canPush ? 'activePush' : '']"
          @click="pushData"
        >
          Post
        </button>
      </div>
    </div>
  </div>
</template>
<script scoped>
import Contentposts from "./subpost/Contentposts.vue";
import Hastag from "./subpost/Hastag.vue";
import Uploadimg from "./subpost/Uploadimg.vue";

export default {
  name: "Post-page",
  data() {
    return {
      dataForm: {
        chanelName: "",
        contentPost: "",
        imgData: [],
        hasTag: [],
      },
      isPushData: false,
      isshow: false,
      active: false,
      author: {
        name: "Bessie Cooper",
        avt: require("../../assets/Divider.png"),
      },
      label: "Chanel",
      selectedItem: null,
      posts: "",
      // dropdown
      img: require("../../assets/search.png"),
      search: "",
      isModal: false,
      selections: [
        {
          id: 1,
          selected: "News",
          check: false,
          isActiveDrop: false,
        },
        {
          id: 2,
          selected: "Technology",
          check: false,
          isActiveDrop: false,
        },
        {
          id: 3,
          selected: "Music",
          check: false,
          isActiveDrop: false,
        },
        {
          id: 4,
          selected: "Education",
          check: false,
          isActiveDrop: false,
        },
        {
          id: 5,
          selected: "Home",
          check: false,
          isActiveDrop: false,
        },
        {
          id: 6,
          selected: "Music",
          check: false,
          isActiveDrop: false,
        },
        {
          id: 7,
          selected: "Education",
          check: false,
          isActiveDrop: false,
        },
        {
          id: 8,
          selected: "Home",
          check: false,
          isActiveDrop: false,
        },
      ],
    };
  },
  mounted() {
    this.select;
    this.emitter.on("load-post", this.processLoadPost);
  },
  methods: {
    showchanel() {
      this.isshow = !this.isshow;
      this.active = !this.active;
    },
    showSelected(id) {
      this.selections.forEach((item) => {
        if (item.id == id) {
          item.check = !item.check;
          item.isActiveDrop = !item.isActiveDrop;
          this.selectedItem = item;
          this.isshow = !this.isshow;
          this.active = !this.active;
        
          // console.log(this.selectedItem);
        } else {
          item.check = false;
          item.isActiveDrop = false;
        }
      });
    },
    focussSelect() {
      this.isshow = false;
    },
    delsearch() {
      return (this.search = "");
    },
    pushData() {
      this.dataForm.chanelName = this.selectedItem.selected;
      console.log(this.dataForm);
    },
    pushHadtags(e) {
      this.dataForm.hasTag = e;
      console.log(e);
    },
    contentPost(e) {
      this.dataForm.contentPost = e;
    },
    imgChanged(e) {
      this.dataForm.imgData = e;
    },
    discardData() {
      this.dataForm.chanelName = "";
      this.dataForm.contentPost = "";
      this.dataForm.imgData = [];
      this.dataForm.hasTag = [];
      console.log(this.dataForm);
    },
  },
  computed: {
    canPush() {
      if (
        this.dataForm.contentPost.length > 0 ||
        this.dataForm.imgData.length > 0 ||
        this.dataForm.hasTag.length > 0
      )
        return true;
      else {
        return false;
      }
    },
    filteredList() {
      return this.selections.filter((select) => {
        return select.selected
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  components: { Contentposts, Hastag, Uploadimg },
};
</script >

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post-onpage {
  background-color: #fff;
  padding: 16px;
  width: 620px;
}
.post-author-infor {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 48px;
}
.post-author-infor img {
  padding-right: 12px;
  height: 100%;
  object-fit: contain;
}
.post-author-infor span {
  height: 24px;
  font-size: 14px;
  font-weight: 700;
}
.post-header {
  margin-top: 12px;
  position: relative;
}
.post-title {
  font-size: 14px;
  font-weight: 500;
  height: 24px;
}
.post-dropdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
}
.post-dropdown.active {
  border: 2px solid #007c7c;
}
.post-dropdown.active span {
  color: #191919;
}
.post-dropdown.is-invalid {
  border-color: #dc3545;
}
.post-header input {
  width: 100%;
}
/* dropdown--------------------------------- */
.dropdown {
  border-radius: 8px;
  width: 100%;
  z-index: 100;
  position: absolute;
  border: 1px solid #d5d5d5;
  background: #fff;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
}
.dropdown-mainheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 16px;
}
.dropdown-search {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}
.dropdown-search input {
  border: none;
  font-size: 14px;
  font-weight: 400;
  padding-left: 8px;
  height: 24px;
  outline: none;
}
.dropdown-border {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 8px;
}
.dropdown-main-item {
  max-height: 200px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 8px;
  height: 113px;
}
::-webkit-scrollbar-thumb {
  background-color: #d5d5d5;
  border-radius: 4px;
}
.dorp-down-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 4px 4px 16px;
}
.dorp-down-select:hover {
  background-color: #e0efef;
  color: #007c7c;
}
.dorp-down-select div {
  height: 32px;
  padding: 4px 0px;
  /* border: 1px solid red; */
}
.dorp-down-select button {
  margin: 4px 10px;
  border: none;
  outline: none;
  background-color: #fff;
}
.activedrop {
  color: #007c7c;
}
.dropdown-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dropdown-modal img {
  /* height: 30px; */
  object-fit: contain;
  padding: 8px 0px;
}
.dropdown-modal span {
  font-weight: 400;
  font-size: 14px;
  height: 24px;
  text-align: center;
  color: #767676;
}
/* br ngăn trang*/
.post-br {
  border-bottom: 1px solid #e5e5e5;
}
.post-btn {
  background-color: #fff;
  padding-right: 16px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
}
.btn {
  border-radius: 20px;
  padding: 12px 24px;
}
.btn-Discard {
  background-color: #e5e5e5;
}
.btn-Post {
  background-color: #007c7c;
  opacity: 0.4;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
}
.activePush {
  background-color: #007c7c;
  opacity: 1;
}
</style>