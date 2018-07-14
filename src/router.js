import Vue from 'vue'
import Router from 'vue-router'
import BlogContent from './views/BlogContent.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'blog-content',
      component: BlogContent
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
      props: true
    }
  ]
})
