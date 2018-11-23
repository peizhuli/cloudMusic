<template>
  <div class="login-box">
    <div class="logo-box">
      <img class="logo" src="../../../static/logo.jpeg" />
      <span class="logo-name">网易云音乐</span>
    </div>
    <Form class="login-form">
      <FormItem>
        <label>用户名</label>
        <Row>
          <Col span="24">
            <Input v-model="userName" placeholder="userName" :rules="{required: true, message: 'userName can not be empty', trigger: 'blur'}" />
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <label>密码</label>
        <Row>
          <Col span="24">
          <Input type="password" v-model="password" placeholder="password" />
          </Col>
        </Row>
      </FormItem>
      <div class="button-group">
        <Button class="login-btn" @click="login()">登录</Button>
        <Button class="" @click="login()">注册</Button>
      </div>
    </Form>
    <div class="other-login-type-box">
      <p>第三方登录</p>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  import util from '../../utils/util';
  import { mapState, mapMutations, mapActions } from 'vuex';
  export default {
      data() {
          return {
              userName: '',
              password: ''
          }
      },
    methods: {
        ...mapMutations(['SET_PROFILE', 'SET_ACCOUNT']),
      ...mapActions(['getLikeMusicList']),
          login: function() {
              var vm = this;
              service.loginWidthEmail(vm.userName, vm.password).then(function(res) {
                  if(res.code == 200) {
                    util.setCookie('tokenJsonStr', res.bindings["0"].tokenJsonStr, res.bindings["0"].expiresIn);
                    vm.SET_PROFILE(res);
                    util.setLocalStore('user', res);
//                    var uid = res.profile.userId;
                    vm.getLikeMusicList();
                        alert('登陆成功！');
                        vm.$router.push('/account');
                  }
              })
          }
    }
  }
</script>

<style scoped>
  .login-box {
    width: 500px;
    height: 700px;
    margin: 0 auto;
    padding: 5%;
    background: #fff;
  }
  .logo-box {
    width: 100%;
    height: 15%;
    text-align: left;
  }
  .logo {
    display: inline-block;
    max-height: 90%;
  }
  .logo-name {
    color: #d6413d;
    font-size: 1.4rem;
  }
  .login-form {
    text-align: left;
    padding: 3rem 0;
  }
  .login-form label {
    color: #ccc;
    font-size: 1rem;
  }
  .button-group {
    padding: 3rem 0;
    text-align: center;
  }
  .login-form button {
    width: 34%;
    padding: 0.6rem 1rem;
    border: 1px solid #d6413d;
    border-radius: 2rem;
    font-size: 1rem;
    color: #d6413d;
  }
  .login-form button.login-btn {
    color: #fff;
    background: #d6413d;
  }
</style>
<style>
  .login-form input.ivu-input,
  .login-form input.ivu-input:focus,
  .login-form input.ivu-input:active {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    outline: none;
    box-shadow: none;
  }
</style>
