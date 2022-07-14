import { createRouter , createWebHistory } from "vue-router";

import Feedback from '../components/sidebar/Feedback.vue'
import Music from '../components/sidebar/Music.vue'
import Technology from '../components/sidebar/Technology.vue'
import News from '../components/sidebar/News.vue'
import Survey from '../components/sidebar/Survey.vue'
import Home from '../components/Subhead/Home.vue'
import Post from '../components/Subhead/Post.vue'
import Bookmark from '../components/Subhead/Bookmark.vue'
import Activity from '../components/Subhead/Activity.vue'


const routes =[
    { path: '/', component: Technology},
    { path: '/News', component: News},
    { path: '/Feedback', component: Feedback},
    { path: '/Music', component: Music},
    { path: '/Survey', component: Survey},
    { path: '/Home', component: Home},
    { path: '/Post', component: Post},
    { path: '/Bookmark', component: Bookmark},
    { path: '/Activity', component: Activity},

]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router