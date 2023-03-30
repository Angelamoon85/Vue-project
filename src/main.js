import Vue from 'vue'
import App from './App.vue'
// import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import service from './service'
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.prototype.$echarts=echarts
Vue.prototype.service=service//挂载在原型就可以全局使用
Vue.config.productionTip = false
//渲染前还需要挂载router


//路由导航守卫
router.beforeEach((to,from,next)=>{
    if(!localStorage.getItem('username')){
      if(to.path!=='/login'){
      next('/login')
      }else next()
    }next()
})


new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')


// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
