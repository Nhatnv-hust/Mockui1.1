<template>
  <div class="hastag-post">
    <div class="hastag-post-label">
      <span>Add your tag</span>
    </div>
    <div class="hastag-post-add">
      <input
        type="text"
        placeholder="Enter tag you want"
        v-model="Hastags"
        :class="active"
      />
      <button
        :class="[Hastags ? 'active' : '']"
        class="addActive"
        @click="addActive"
      >
        Add
      </button>
    </div>
    <div class="hastag-result">
      <div class="hastag-result-item" v-for="add in addHadtags" :key="add.id">
        <div class="hastag-result-add">
          <span class="hastag-add-item">{{ add.hastag }}</span>
          <img
            src="../../../assets/times.png"
            alt="times"
            @click="delsearch(add.id)"
          />
        </div>
      </div>
    </div>
    <div class="hastag-suggest">
      <span>Add tag suggest</span>
      <div class="hastag-suggest-item">
        <div
          class="hastag-suggest-main"
          v-for="suggest in hastagsuggest"
          :key="suggest.id"
        >
          <div @click="addSuggest(suggest)" class="hastag-suggest-add">
            {{ suggest.hastag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "Hastag-post",
  data() {
    return {
      Hastags: "",
      activeDefault: false,
      results: "",
      countIndex: 0,
      hastagsuggest: [
        { id: 1, hastag: "#willseed" },
        { id: 2, hastag: "#willseed_noel" },
        { id: 3, hastag: "#willseed_love" },
        { id: 4, hastag: "#willseed_tech" },
        { id: 5, hastag: "#activitylovewillseed" },
        { id: 6, hastag: "CN - Trung tâm" },
        { id: 7, hastag: "CN - Trung tâm" },
      ],
      addHadtags: [],
    };
  },
  watch: {
    addHadtags: {
      handler: function () {
        this.$emit("pushHadtags", this.addHadtags);
      },
      deep: true,
    },
  },
  methods: {
    addActive() {
      if (this.Hastags != "") {
        this.addHadtags.push({
          id: this.countIndex++,
          hastag: this.Hastags,
        });
      }
      this.Hastags = "";
    },
    delsearch(id) {
      this.addHadtags.splice(this.addHadtags.indexOf(id), 1);
      // console.log(this.addHadtags)
    },
    addSuggest(hastag) {
      this.addHadtags.push(hastag);
      // console.log(this.addHadtags);
    },
  },
};
</script>

<style scoped>
.hastag-post {
  width: 620px;
  padding: 12px 16px 4px 16px;
  background-color: #fff;
  /* height: 24px; */
  /* font-weight: 500;
  font-size: 14px; */
}
.hastag-post-label {
  height: 24px;
  font-weight: 500;
  font-size: 14px;
}
.hastag-post-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
}
.hastag-post-add input {
  width: 100%;
  border: none;
  outline: none;
  margin: 8px 4px 8px 12px;
  font-weight: 400;
  font-size: 14px;
}
.hastag-post-add button {
  margin: 4px;
  border-radius: 40px;
  color: #ffffff;
  background-color: #007c7c;
  width: 58px;
  height: 32px;
  border: none;
  object-fit: contain;
  outline: none;
}
.hastag-result-item {
  display: inline-block;
  align-items: center;
  padding-right: 4px;
  padding-top: 6px;
}
.hastag-result-add {
  font-weight: 400;
  font-size: 14px;
  background-color: #e5e5e5;
  border-radius: 54px;
}
.hastag-result-add {
  border: none;
  outline: none;
}
.hastag-result-add img {
  cursor: pointer;
}
.hastag-result-add img:hover {
  opacity: 0.7;
}
.hastag-add-item {
  padding: 4px 4px 4px 16px;
}
.hastag-result-add img {
  padding: 9px 16px 9px 8px;
}
.hastag-suggest {
  padding-top: 12px;
}
.hastag-suggest span {
  font-weight: 500;
  font-size: 14px;
}
.hastag-suggest-main {
  display: inline-block;
  align-items: center;
  padding-top: 6px;
  padding-right: 4px;
}

.hastag-suggest-item {
  padding-right: 4px;
  padding: 6px 4px 6px 0px;
}
button.addActive {
  background-color: #c3dede;
  color: black;
}
.addActive.active {
  background-color: #007c7c;
  color: white;
  transition: 0.3s ease;
}
.hastag-suggest-add {
  font-weight: 400;
  font-size: 14px;
  background-color: #007c7c;
  border-radius: 54px;
  padding: 4px 16px;
  color: white;
  cursor: pointer;
}
@media screen and (max-width: 620px){
 .hastag-post{
    width: 100%;
  }
}
</style>