<template>
  <div class="uploadimg">
    <div class="upload-header">
      <div class="upload-label">{{ this.label }}</div>
      <div class="upload-count">{{ dataimg.length }}/5</div>
    </div>
    <div class="sub-upload">{{ this.sub }}</div>
    <div class="uploading-img">
      <label class="" v-for="value in dataimg" :key="value">
        <img
          class="frame-img imgactive"
          :src="value.src"
          alt=""
          @mouseout="handleMouseleaveImage(value)"
          @mouseover="handleSeenterImage(value)"
        />
        <div
          :key="value.id"
          style="position: absolute; margin-top: -50px; z-index: 100"
        >
          <button
            class="btn btn-danger"
            @click="handleDelete"
            v-if="enableEditDelete && value.id === this.imageFocused.id"
            key="123"
            style="border: 1px solid red"
          >
            Xoa
          </button>
          <button
            class="btn btn-info"
            @click="handleEdit"
            v-if="enableEditDelete && value.id === this.imageFocused.id"
            key="456"
            style="border: 1px solid black"
          >
            Edit
          </button>
        </div>
        <div class="sub-upload-imgname">
          <p>{{ value.name }}</p>
        </div>
        <!--  -->
      </label>

      <label class="frame-img-fix" v-if="dataimg.length < 5" for="imgInp">
        <span>
          <img v-if="beforeUpload" src="../../../assets/plus.png" alt="" />
          <!-- <div v-if="!beforeUpload" style="border: 1px solid black">Process bar</div> -->
        </span>
        <input type="file" id="imgInp" @input="handleOnchage" />
      </label>
    </div>
  </div>
</template>

<script >
import axios from "axios";

const id = 1;

export default {
  name: "Uploadimg-page",
  data() {
    return {
      countImg: 0,
      label: "Photo Upload",
      sub: "You can upload photo and file type .jpg, .gif, .png, .doc, .dpf, .ppt, .xlsx. Each photo maximum 5MB.",
      imgadd: "window.URL.createObjectURL(this.files[0])",
      dataimg: [],
      previewImage: null,
      beforeUpload: true,
      enableEditDelete: false,
      enableProcessBar: false,
      imageFocused: {},
      post: {},
    };
  },
  computed: {
    txtContent() {
      return this.post.content;
    },
  },
  mounted() {
    this.getPost();
  },
  methods: {
    getPost() {
      //call api get data from svr
      axios
        .get(`http://localhost:3000/posts/${id}`)
        .then((res) => {
          console.log(res.data);
          this.post = res.data;
          this.dataimg = res.data.image;
          this.emitter.emit("load-post", this.post);
        })
        .catch((error) => console.log(error));
    },
    handleUploadImage: function (base64) {
      return URL.createObjectURL(base64);
    },
    handleOnchage(e) {
      // this.beforeUpload = false
      let idex = this.dataimg.length + 1;
      this.dataimg.push({
        id: idex,
        name: e.target.files[0].name,
        src: URL.createObjectURL(e.target.files[0]),
      });
      // this.beforeUpload = true
    },
    handleSeenterImage(value) {
      this.enableEditDelete = true;
      this.imageFocused = value;
    },
    handleMouseleaveImage(value) {
      this.enableEditDelete = false;
      this.imageFocused = value;
    },
    handleDelete() {
      //call api to delete the image
      //call againt getList function

      let idToDel = this.imageFocused.id;
      this.dataimg = this.dataimg.filter(function (img) {
        return img.id !== idToDel;
      });
    },
    handleEdit() {},
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
  padding: 16px;
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
  font-weight: 400;
  font-size: 13px;
}
.uploading-img {
  display: flex;
}
.uploading-img label {
  margin-right: 16px;
}
.frame-img {
  width: 105px;
  height: 105px;
  border-radius: 8px;
  border: 1px solid #007c7c;
  cursor: pointer;
}
.frame-img-fix {
  width: 105px;
  height: 105px;
  border-radius: 8px;
  border: 1px dashed #007c7c;
  cursor: pointer;
}
.frame-img-fix:hover {
  border: 1px solid #007c7c;
  color: #e0efef;
}
.frame-img-fix span {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.frame-img-fix span img {
  padding: 12px;
  border-radius: 20px;
}
.frame-img-fix span img:hover {
  background-color: #e0efef;
}
.frame-img.imgactive {
  border: none;
}
.uploading-img input {
  opacity: 0;
}
.frame-img img {
  width: 105px;
  height: 105px;
}
.sub-upload-imgname {
  height: 20px;
  width: 105px;
  white-space: nowrap;
  overflow: hidden;
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
</style>