<template>
  <div class="tec-page">
    <div class="tec-container">
      <div class="title">
        <img :src="src" alt="" />
        <label for="posts" class="tec-lable">{{ this.Title }}</label>
      </div>
      <div class="tec-content" v-for="post in posts" :key="post.id">
        <Avata />
        <div class="hastag">
          {{ post.hastag }}
        </div>

        <div class="document-ui">
          <div
            class="document-main"
            v-for="document in post.documents"
            :key="document.id"
          >
            <div class="document-pre">
              <div class="document-type">
                <img :src="document.type" alt="" />
              </div>
              <div class="document-name">{{ document.name }}</div>
            </div>
            <div class="document-after">
              <div class="document-datas">{{ document.dungluong }}</div>
              <div class="document-download">
                <img :src="document.download" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="imgMain">
          <img :src="post.src" alt="" />
        </div>
        <Action />

        <div class="comment-ui">
          <div
            class="comment-users"
            v-for="caption in post.captions"
            :key="caption.id"
          >
            <div class="comment-users-id">
              <div class="avata">
                <img :src="caption.avt" alt="" />
              </div>
              <div class="users__id">
                <div class="name-time">
                  <div class="name">{{ caption.name }}</div>
                  <div class="time">{{ caption.statustime }}</div>
                </div>
                <div class="comment__id">{{ caption.comment }}</div>
              </div>
            </div>
          </div>
          <div class="numbercm">{{ this.numbercm }}</div>
        </div>
        <!-- <Input/> -->
        <div class="input-ui">
          <div class="input-main">
            <div class="input-users-id">
              <div class="input-users-id-avata">
                <img :src="post.inputavt" alt="" />
              </div>
            </div>
            <div class="input-form">
              <input
                type="text"
                name="input"
                placeholder="Write a comment..."
              />
              <button class="inputpost">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from "./childTechnology/Action.vue";
import Avata from "./childTechnology/avata.vue";
export default {
  name: "technology-page",
  data() {
    return {
      Title: "Technology",
      src: require("../../assets/laptop.png"),
      posts: [
        {
          id: 1,
          src: require("../../assets/Rectangle2.png"),
          hastag: "",
          captions: [
            {
              id: 1,
              avt: require("../../assets/Divider.png"),
              name: "Bessie Cooper",
              comment: "Soo great!!!",
              statustime: "15 minutes ago",
            },
            {
              id: 2,
              avt: require("../../assets/Divider1.png"),
              name: "Theresa Webb",
              comment: "Still doing this man",
              statustime: "30 minutes ago",
            },
            {
              id: 3,
              avt: require("../../assets/Divider2.png"),
              name: "Brosanova",
              comment: "Still doing this man",
              statustime: "40 minutes ago",
            },
            {
              id: 4,
              avt: require("../../assets/Divider3.png"),
              name: "Kathryn Murphy",
              comment: "Great choice of Acronym AF1`s",
              statustime: "1 hour ago",
            },
          ],
          documents: "",
          inputavt: require("../../assets/Divider.png"),
        },
        {
          id: 2,
          src: require("../../assets/Rectangle3.png"),
          hastag: "",
          captions: "",
          documents: "",
          inputavt: require("../../assets/Divider.png"),
        },
        {
          id: 3,
          src: "",
          hastag: `#reels #instagramreels
#beautifuldestinations #earthfocus #earthbestshots #earthoffcial #earthpix #thegreatplanet 
#discoverearth #fantastic_earth #awesome_earthpix #roamtheplanet`,
          captions: [
            {
              id: 1,
              avt: require("../../assets/Divider.png"),
              name: "Bessie Cooper",
              comment: "Soo great!!!",
              statustime: "15 minutes ago",
            },
            {
              id: 2,
              avt: require("../../assets/Divider1.png"),
              name: "Theresa Webb",
              comment: "Still doing this man",
              statustime: "30 minutes ago",
            },
            {
              id: 3,
              avt: require("../../assets/Divider2.png"),
              name: "Brosanova",
              comment: "Still doing this man",
              statustime: "40 minutes ago",
            },
            {
              id: 4,
              avt: require("../../assets/Divider3.png"),
              name: "Kathryn Murphy",
              comment: "Great choice of Acronym AF1`s",
              statustime: "1 hour ago",
            },
          ],
          documents: [
            {
              id: 1,
              type: require("../../assets/ppt.png"),
              name: "Jerry-2020_I-9_Form.ppt",
              dungluong: "19 KB",
              download: require("../../assets/arrow-to-bottom.png"),
            },
            {
              id: 2,
              type: require("../../assets/doc.png"),
              name: "pdf-docusign.doc",
              dungluong: "18 MB",
              download: require("../../assets/arrow-to-bottom.png"),
            },
            {
              id: 3,
              type: require("../../assets/xls.png"),
              name: "mine.xlsx",
              dungluong: "1 MB",
              download: require("../../assets/arrow-to-bottom.png"),
            },
            {
              id: 4,
              type: require("../../assets/doc.png"),
              name: "sharefile.doc",
              dungluong: "25 MB",
              download: require("../../assets/arrow-to-bottom.png"),
            },
            {
              id: 5,
              type: require("../../assets/pdf.png"),
              name: "formsi9.pdf",
              dungluong: "10 KB",
              download: require("../../assets/arrow-to-bottom.png"),
            },
          ],
          inputavt: require("../../assets/Divider.png"),
        },
        {
          id: 4,
          src: require("../../assets/Rectangle4.png"),
          hastag: "",
          captions: "",
          documents: "",
          inputavt: require("../../assets/Divider.png"),
        },
        {
          id: 5,
          src: require("../../assets/Rectangle5.png"),
          hastag: "",
          captions: [
            {
              id: 1,
              avt: require("../../assets/Divider.png"),
              name: "Bessie Cooper",
              comment: "Soo great!!!",
              statustime: "15 minutes ago",
            },
            {
              id: 2,
              avt: require("../../assets/Divider1.png"),
              name: "Theresa Webb",
              comment: "Still doing this man",
              statustime: "30 minutes ago",
            },
            {
              id: 3,
              avt: require("../../assets/Divider2.png"),
              name: "Brosanova",
              comment: "Still doing this man",
              statustime: "40 minutes ago",
            },
            {
              id: 4,
              avt: require("../../assets/Divider3.png"),
              name: "Kathryn Murphy",
              comment: "Great choice of Acronym AF1`s",
              statustime: "1 hour ago",
            },
          ],
          documents: "",
          inputavt: require("../../assets/Divider.png"),
        },
      ],
    };
  },
  components: { Action, Avata },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gulzar&family=Mingzat&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.tec-page {
  border: 1px solid #f0f0f0;
  position: relative;
  left: 200px;
  padding-top: 16px;
  width: 100%;
}
.tec-content {
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  margin-bottom: 24px;
}
.title {
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: start;
  margin: 24px 0px;
}
.tec-lable {
  padding-left: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
}
.hastag {
  white-space: pre;
  padding: 0px 16px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #0e489b;
  background-color: #ffffff;
}
/* comment */
.comment-ui {
  width: 100%;
  background-color: #fff;
  padding-top: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.comment-users {
  padding: 4px 16px;
}
.comment-users-id {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: start;
}
.users__id {
  /* display: inline-block; */
  padding-left: 12px;
}
.name-time {
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 3px;
}
.name-time .name {
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
.name-time .time {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding: 2px 0px 2px 8px;
}
.comment__id {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
.numbercm {
  height: 24px;
  color: #0e489b;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  padding-left: 16px;
}
.document-ui {
  background-color: #ffffff;
  padding: 6px 16px;
}
/* document */
.document-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.document-pre {
  display: flex;
  justify-content: start;
  align-items: center;
}
.document-after {
  display: flex;
  justify-content: end;
  align-items: center;
}
.document-type {
  width: 32px;
  padding: 0px 4px;
}
.document-name {
  /* width: 438px; */
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding-left: 12px;
  color: #191919;
}

.document-datas {
  padding-right: 16px;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
}

.document-download img {
  padding: 10px;
}
/* input */
.input-ui {
  width: 100%;
  height: 56px;
  padding: 0px 16px;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.input-main {
  display: flex;
  justify-content: space-between;
}
.input-form {
  width: 540px;
  height: 40px;
  border-radius: 20px;
  padding-left: 8px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-form input {
  width: 100%;
  background-color: #f0f0f0;
  border: none;
  outline: none;
}
.input-form button {
  width: 61px;
  margin: 4px;
  border-radius: 40px;
  background-color: #007c7c;
  border: none;
  color: #ffffff;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .tec-page{
    left: 0;
    right: 0;
  }
}
@media only screen and (max-width: 620px) {
   .tec-page{
    width: 100%;
  }
  .tec-container{
     width: 100%;
  }
  .tec-content .imgMain img {
    width: 100%;
}
.hastag {
  white-space: normal;
}
}
</style>