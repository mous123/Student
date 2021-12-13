import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import StudentList from '@/components/students/StudentList'
import WorkList from '@/components/students/WorkList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/home',
      name: '学生信息管理',
      component: Home,
      iconClass: 'fa fa-list-alt',
      children: [
        {
          path: '/home/student',
          name: '学生列表',
          iconClass: 'fa fa-user',
          component: StudentList
        },
        {
          path: '/home/work',
          name: '作业列表',
          iconClass: 'fa fa-user-circle-o',
          component: WorkList
        },
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      hidden: true
    }
  ],
  mode: 'history'
})
