// import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

// import {library} from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import { faHouse,faMagnifyingGlass,faCaretDown} from '@fortawesome/free-solid-svg-icons'
// import { faPaperPlane, faHeart,faBookmark,faBell} from '@fortawesome/free-regular-svg-icons';
// import '../src/static/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css'
// library.add(faHouse,faPaperPlane,faHeart,faBookmark,faMagnifyingGlass,faBell,faCaretDown)

// createApp(App).use(router).mount('#app')
//     .component(('font-awesome-icon', FontAwesomeIcon))

// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App)
  .use(router)
  .mount("#app")

