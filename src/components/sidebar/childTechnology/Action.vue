<template>
  <div class="action-ui">
    <div class="actton-btn">
      <div class="btn">
        <button class="btn-act" @click="count++">
          <img :src="iconlike" alt="iconlike" />
        </button>
        <div class="message">{{ count }} {{ reactions }}</div>
      </div>
      <div class="btn">
        <button class="btn-act">
          <img :src="iconcm" alt="iconcomment" />
        </button>
        <div class="message">{{ comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "action-ui",
  data() {
    return {
      iconlike: require("../../../assets/smile.png"),
      iconcm: require("../../../assets/comment-alt.png"),
      reactions: "reactions",
      comment: "32 comments",
      count: 41,
    };
  },
};
</script>

<style scoped>
.action-ui {
  width:100%;
  height: 56px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
}
.actton-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  /* cursor: none; */
}
.btn-act {
  border: none;
  background-color: #fff;
  padding: 9px;
  cursor: pointer;
}
.message {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  padding: 0px 8px;
}
</style>