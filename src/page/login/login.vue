<template>
  <div>
    <Form>
      <FormItem>
        <Row>
          <Col span="6">
              <label>用户名：</label>
          </Col>
          <Col span="18">
            <Input v-model="userName" prefix="ios-contact" placeholder="userName" :rules="{required: true, message: 'userName can not be empty', trigger: 'blur'}" />
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Row>
          <Col span="6">
          <label>密码：</label>
          </Col>
          <Col span="18">
          <Input v-model="password" prefix="ios-contact" placeholder="password" />
          </Col>
        </Row>
      </FormItem>
      <Button type="primary" @click="login()">login</Button>
    </Form>
  </div>
</template>

<script>
  import service from '../../service/service';
  import util from '../../utils/util';
  export default {
      data() {
          return {
              userName: '',
              password: ''
          }
      },
    methods: {
          login: function() {
              var vm = this;
              service.loginWidthEmail(vm.userName, vm.password).then(function(res) {
                  console.log(res);
                  if(res.loginType == 0) {
                      alert('登录成功');
                      util.setSessionStore('userName', res.bindings["0"].tokenJsonStr);
                      vm.$router.push('/');
                  }
              })
          }
    }
  }
</script>
