// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
import service from './service'
import 'font-awesome/css/font-awesome.min.css' //引入font-awesome样式图标

Vue.use(ElementUI)
Vue.config.productionTip = false
// Vue.prototype.axios = axios
Vue.prototype.service = service

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
