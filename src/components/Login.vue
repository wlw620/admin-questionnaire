<template>
  <div class="login-wrap">
    <Card class="card">
      <p class="sub-title">选择<strong>三士渡</strong> / 人生不耽误</p>
      <ul>
        <Form ref="formInline" :model="loginInfo" inline>
          <li>
            <FormItem class="item" prop="user">
              <Input type="text" v-model="loginInfo.username" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </li>
          <li>
            <FormItem class="item" prop="password">
              <Input type="password" v-model="loginInfo.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </li>
          <li class="margin-t-20">
            <FormItem class="item">
              <Button class="button" type="primary" size="large" @click="login" long>LOGIN</Button>
              <Button class="button margin-t-10" type="primary" size="large" @click="wechatLogin" long>微信扫码登录</Button>
            </FormItem>
          </li>
        </Form>
      </ul>
    </Card>
  </div>
</template>
<script>
import service from "../service/main/index";
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      service
        .login(this.loginInfo)
        .then(res => {
          if (!res || res.err_code) {
            this.$store.commit("unlogin");
          } else {
            this.$store.commit("login");
            this.$store.commit("setIdentity", res.identity);
            this.route
          }
        })
        .catch(e => {
          this.$store.commit("login");
          this.$store.commit("setIdentity", res.identity);
          this.route
        });
    },
    // 微信扫码登录
    wechatLogin() {
      service.getWechatloginUrl().then(res => {
        if (res && res.url) {
          window.location.href = res.url;
        }
      });
    }
  }
};
</script>

<style lang="less">
.login-wrap {
  position: relative;
  background: url('../static/imgs/loginbg.jpg') no-repeat;
  background-size: 100% 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    background: url('../static/imgs/logo.png') no-repeat center 40px #fff;
    background-size: 60%;
    padding: 20px;
    padding-top: 106px;
    box-sizing: border-box;
    width: 380px;
    height: 450px;
    margin-top: -100px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.6);
  }
  .sub-title {
    font-size: 16px;
    color: #2b458c;
    padding-bottom: 30px;
  }
  li {
    height: 65px;
    .item {
      width: 100%;
      .ivu-input-wrapper {
        height: 50px;
      }
      .ivu-input,
      .button {
        height: 50px;
      }
    }
  }
  .ivu-btn-primary{
    background: #2b458c;
    height: 40px !important;
    line-height: 24px !important;
  }
}
</style>
