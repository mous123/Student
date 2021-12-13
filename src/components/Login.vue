<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">学生信息管理系统</span>
      </div>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="form-box">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password"> 
          <el-input type= "password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" @click="login('form')">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
         form: {
          username: '',
          password: ''
        },
        rules: {
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
            ]
        }
    }
  },
  methods: {
      login(form) {
        //把用户名和密码传给后台，进行验证
        // this.$refs[form].validate((valid) =>{
        //   if (valid) {
        //     this.service.post('login',this.form)
        //     .then( (res)=> {
        //       if (res.data.status === '200') {
        //         this.$message({
        //           message: "登陆成功",
        //           type: 'success',
        //           duration: 800
        //         })
        //         setTimeout(() =>{
        //             this.$router.push('/home')
        //             localStorage.setItem('token',res.data.data.token)
        //             localStorage.setItem('username',res.data.data.username)
        //         },1000)
        //       }else {
        //         console.log (res.data.msg)
        //       }
        //     })
        //     .catch(function (error) {
        //       console.log(error)
        //     })
        //   }else {
        //     return false
        //   }
        // })
        this.$router.push('/home')
      
      }
  }
}
</script>

<style lang="scss">
    .login{
        width: 100vw;
        height: 100vh;
        background: url('../assets/login.jpg') no-repeat ;
        background-size: cover;
        .box-card{
            width: 480px;
            position: absolute;
            top: 300px;
            left: 80%;
            transform: translateX(-50%);
            .title{
                font-size: 28px;
                color: palevioletred;
            }
            .form-box{
                width: 350px;
            }
            .loginBtn{
                width: 100%;
            }
        }
    }
</style>
