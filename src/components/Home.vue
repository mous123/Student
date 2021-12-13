<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="header-left">
          <span>学生信息系统管理后台</span>
          <!-- <i :class="isCollapse ? 'coll el-icon-s-unfold' : 'coll el-icon-s-fold'" @click="isCollapse = !isCollapse"></i> -->
        </div>
        <div>
          {{username}}
          <span @click="loginOut" class="login-out">退出</span>
        </div>
      </el-header>
      <el-container class="main">
        <Menu></Menu>
        <el-main>
          <el-card>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
                  <strong>{{item.name}}</strong>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <router-view></router-view>
          <Foot></Foot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './common/Menu'
import Foot from './common/Footer'
export default {
  name: "Home",
  components: {
    Menu,
    Foot
  },
  data() {
    return {
      username: ''
    }
  },
  created () {
    this.username = localStorage.getItem('username') 
  },
  methods: {
    loginOut (){
      this.$alert('你确定退出吗？', '退出', {
          confirmButtonText: '确定',
          callback: action => {
            localStorage.removeItem('token')
            this.$router.push('/login')
          }
        })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  .el-header{
    background-color: #00b8ff;
    color: white;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  .header-left {
    .coll {
      cursor: pointer;
    }
  }
  }
  .login-out{
    cursor: pointer;
  }

  .main {
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
  }
}
</style>
