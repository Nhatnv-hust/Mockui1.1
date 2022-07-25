<template>
  <div class="uploadimg">
    <div class="upload-header">
      <div class="upload-label">{{ this.label }}</div>
      <div class="upload-count">{{ dataimg.length }}/5</div>
    </div>
    <div class="sub-upload">{{ this.sub }}</div>
    <div class="uploading-img">
      <label v-for="(value, index) in dataimg" :key="index">
        <div :class="{ activeClass: active == value.id }">
          <img
            class="frame-img imgactive"
            :src="value.src"
            alt=""
            @click="active = value.id"
          />
        </div>
        <div class="sub-upload-modal-btn" v-if="active == value.id">
          <button class="sub-btn-delete">
            <img
              src="../../../assets/times.png"
              alt=""
              @click="handleDelete(value)"
            />
            <span class="tooltipdel">Remove</span>
          </button>
          <div class="sub-btn-edit">
            <label for="imgedit">
              <img src="../../../assets/pen.png" alt="" />
              <span class="tooltipedit">Edit</span>
            </label>

            <input type="file" id="imgedit" @change="handleOnEdit(value)" />
          </div>
        </div>
        <div class="sub-upload-imgname">
          <p>{{ value.name }}</p>
          <span class="tooltipfullname">{{ value.name }}</span>
        </div>
        <!--  -->
      </label>
      <label class="frame-img-fix" v-if="dataimg.length < 5" for="imgInp">
        <div>
          <img src="../../../assets/plus.png" alt="" />
          <span class="tooltiptext">Add photo & file</span>
        </div>

        <input
          type="file"
          id="imgInp"
          ref="imageUploader"
          @click="resetImageUploader"
          @change="handleOnchage"
        />
      </label>
    </div>
  </div>
</template>

<script >
export default {
  name: "Uploadimg-page",
  data() {
    return {
      countImg: 0,
      label: "Photo Upload",
      sub: "You can upload photo and file type .jpg, .gif, .png, .doc, .dpf, .ppt, .xlsx. Each photo maximum 5MB.",
      dataimg: [],
      showModal: false,
      post: {},
      active: Boolean,
    };
  },
  watch: {
    dataimg: {
      handler: function () {
        this.$emit("imgChanged", this.dataimg);
      },
      deep: true,
    },
  },
  methods: {
    handleShowModal() {
      this.showModal = !this.showModal;
    },

    handleOnEdit(value) {
      this.dataimg[this.dataimg.indexOf(value)] = {
        name: event.target.files[0].name,
        src: this.handleUploadImage(event.target.files[0]),
      };
    },
    resetImageUploader() {
      this.$refs.imageUploader.value = "";
      this.active = false;
    },

    handleUploadImage: function (base64) {
      return URL.createObjectURL(base64);
    },
    handleOnchage() {
      this.countImg++;
      this.dataimg.push({
        id: event.target.files[0].lastModified + this.countImg,
        name: event.target.files[0].name,
        src: this.handleUploadImage(event.target.files[0]),
      });
      console.log(this.dataimg);
      this.beforeUpload = true;
    },
    handleSeenterImage(value) {
      this.enableEditDelete = true;
      this.imageFocused = value;
    },
    handleMouseleaveImage(value) {
      this.enableEditDelete = false;
      this.imageFocused = value;
    },
    handleDelete(value) {
      //call api to delete the image
      //call againt getList functio
      this.dataimg.splice(this.dataimg.indexOf(value), 1);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.uploadimg {
  padding: 16px 16px 12px 16px;
  background-color: #fff;
  width: 620px;
}
.upload-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.upload-label {
  font-weight: 500;
  font-size: 14px;
  height: 24px;
  text-align: left;
  color: #191919;
}
.upload-count {
  font-weight: 400;
  font-size: 13px;
}

.sub-upload {
  height: 20px;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 13px;
}
.uploading-img {
  display: flex;
}
.uploading-img label {
  margin-right: 12px;
}
.frame-img {
  width: 105px;
  height: 105px;
  border-radius: 8px;
  border: 1px solid #007c7c;
}
.frame-img-fix {
  width: 105px;
  height: 105px;
  border-radius: 8px;
  border: 1px dashed #007c7c;
  position: relative;
  display: inline-block;
}
.frame-img-fix:hover {
  border: 1px solid #007c7c;
  color: #e0efef;
}
.frame-img-fix:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
.frame-img-fix .tooltiptext {
  visibility: hidden;
  width: 116px;
  height: 32px;
  background-color: #191919;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 6px 0px;
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 13px;
}

.frame-img-fix .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #191919 transparent transparent transparent;
}
.frame-img-fix div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.frame-img-fix div img {
  padding: 12px;
  border-radius: 20px;
}
.frame-img-fix:hover div img {
  background-color: #e0efef;
}
.frame-img.imgactive {
  border: none;
}
.uploading-img input {
  opacity: 0;
  width: 15px;
}
.frame-img img {
  width: 105px;
  height: 105px;
  margin: 0;
}
.sub-upload-imgname {
  height: 20px;
  width: 105px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  display: inline-block;
}
.sub-upload-imgname .tooltipfullname {
  visibility: hidden;
  height: 32px;
  background-color: #191919;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 6px 0px;
  position: absolute;
  z-index: 100;
  bottom: 125%;
  left: 130%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 13px;
}
.sub-upload-imgname .tooltipfullname::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: #191919 transparent transparent transparent;
}

.sub-upload-imgname :hover .tooltipfullname {
  visibility: visible;
  opacity: 1;
  cursor: pointer;
}
.sub-upload-imgname > p {
  /* text-overflow: ellipsis;
  font-weight: 400;
  font-size: 13px; */
  /* text-overflow: clip;  */
  width: 104.8px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.btn-info {
  margin-left: 5px;
}
.sub-upload-modal-btn {
  width: 105px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  position: absolute;
  margin-top: -70px;
  z-index: 100;
}
.sub-btn-delete {
  width: 32px;
  height: 32px;
  padding: 0px 12px;
  border-radius: 20px;
  background-color: #fff;
  margin-right: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
}
.sub-btn-delete .tooltipdel {
  visibility: hidden;
  width: 71px;
  height: 32px;
  background-color: #191919;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 6px 0px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 130%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 13px;
}
.sub-btn-delete .tooltipdel::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: #191919 transparent transparent transparent;
}

.sub-btn-delete:hover .tooltipdel {
  visibility: visible;
  opacity: 1;
}
.sub-btn-delete:hover {
  background-color: #e72511;
  color: #fff;
}
.sub-btn-edit {
  padding: 0px 8px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  display: inline-block;
}
.sub-btn-edit .tooltipedit {
  visibility: hidden;
  width: 47px;
  height: 32px;
  background-color: #191919;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 6px 0px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 160%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 13px;
}
.sub-btn-edit .tooltipedit::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: #191919 transparent transparent transparent;
}

.sub-btn-edit:hover .tooltipedit {
  visibility: visible;
  opacity: 1;
}
.sub-btn-edit:hover {
  background-color: #007c7c;
  color: #fff;
}
.sub-btn-edit label {
  margin: auto;
  cursor: pointer;
}
.sub-btn-edit input {
  width: 0;
}
.activeClass {
  border: 1px solid #007c7c;
  border-radius: 8px;
}
</style>