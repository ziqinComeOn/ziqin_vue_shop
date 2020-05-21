<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 投向区域 -->
            <div class="avatar_box">
                <img src="../../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghutianchong"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-suoding"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary">登录</el-button>
                    <el-button @click="resetLoginForm" type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'))
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error('两次输入密码不一致!'))
    //   } else {
    //     callback()
    //   }
    // }

    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
        // 验证第二次密码是否合法
        // checkPassword: [
        //   { validator: validatePass2, trigger: 'blur' }
        // ]
      }
    }
  },
  methods: {
    // 表单重置函数
    resetLoginForm () {
      // console.log(this)
      this.$refs.loginFormRef.resetFields() // resetFields对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
      // this.loginForm.username = ''
      // this.loginForm.password = ''
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.avatar_box{
    width:130px;
    height: 130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding:10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left:50%;
    transform:translate(-50%,-50%) ;
    background-color: #FFFFFF;
    img{
        width:100%;
        height: 100%;
        border-radius:50%;
        background-color: #eee;
    }
}
.login_form{
    position: absolute;
    bottom:0;
    width: 100%;
    padding:0 20px;
    box-sizing:border-box ;
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>
