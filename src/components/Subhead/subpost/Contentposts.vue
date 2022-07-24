<template>
  <div class="contentpost">
    <div class="contentpost-main">
      <textarea
        type="text"
        placeholder="What are you thinking ?"
        v-model="contentpost"
        @keydown="onKeyDown"
      ></textarea>
    </div>
    <div class="content-count">{{ totalChar }}/1000</div>
  </div>
</template>

<script>
export default {
  name: "Contentposts-page",
  data() {
    return {
      contentpost: "",
      totalChar: 0,
      max: 1000,
    };
  },
   watch: {
    contentpost: {
      handler: function () {
        this.$emit('contentPost', this.contentpost)
      },
      immediate: true,
    },
  },
  methods: {
    onKeyDown(evt) {
      if (this.contentpost.length > this.max) {
        if (evt.keyCode >= 48 && evt.keyCode <= 90) {
          evt.preventDefault();
          return;
        }
      } else {
        this.totalChar = this.contentpost.length;
      }
    },
    // countChar(e) {
    //     let len = this.contentpost.length;
    //     this.totalChar = len
    //     // if(this.totalChar === 1000)

    //     // console.log(this.contentpost);

    // }
  },
  //   computed: {
  //     internalValue: {
  //       get() {
  //         return this.contentpost;
  //       },
  //       set(v) {
  //         this.$emit("input", v);
  //       },
  //     },
  //   },
};
</script >

<style scoped>
.contentpost {
  width: 100%;
  margin-top: 12px;
}
.contentpost-main {
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  padding: 8px 0px 8px 8px;
}
.contentpost-main textarea {
  width: 100%;
  height: 180px;
  border: none;
  object-fit: none;
  outline: none;
  resize: none;
  font-size: 14px;
  font-weight: 400;
   overflow-y: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
}
::-webkit-scrollbar {
  width: 8px;
  height: 50px;
}
::-webkit-scrollbar-thumb {
  background-color: #d5d5d5;
  border-radius: 4px;
}
.content-count {
  margin-top: 6px;
  text-align: right;
  font-weight: 300;
  font-size: 13px;
  color: #767676;
}
</style>