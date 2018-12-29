<template>
  <div id="app">
    <loading-component v-if="login===null"></loading-component>
    <login-component v-else-if="!login"></login-component>
    <div v-else-if="login" class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <!--左侧菜单-->
        <!-- <Sider
            collapsible
            theme="light"
            :style="{
              position: 'fixed',
              height: '100vh',
              left: 0, overflow: 'auto'
            }"
            :collapsed-width="78"
            v-model="isCollapsed"
          >
            <menu-component
              :menuitemClasses="menuitemClasses"
              :activename="activeName"
              :openname="openname"
            ></menu-component>
          </Sider> -->
        <!--左侧菜单 END-->
        <!--右侧内容-->
        <Layout :class="rightClasses">
          <Header class="header">
            <a class="logout" @click="logout">退出登录</a>
          </Header>
          <Content class="content">
            <div class="container">
              <router-view></router-view>
            </div>
          </Content>
        </Layout>
        <!--右侧内容-->
      </Layout>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";
  import "./static/styles/common.less";
  import "./static/styles/layout.less";
  import LoadingComponent from "./components/Loading";
  import LoginComponent from "./components/Login";
  import MenuComponent from "./components/Menu";
  import service from "./service/main/index";
  import menuList from "./config/menuListConf";

  export default {
    name: "App",

    data() {
      return {
        isCollapsed: false,
        activeName: "",
        openname: []
      };
    },

    components: {
      "menu-component": MenuComponent,
      "loading-component": LoadingComponent,
      "login-component": LoginComponent
    },

    computed: {
      login() {
        return this.$store.state.isLogin;
      },

      menuitemClasses: function() {
        return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
      },

      rightClasses: function() {
        return ["", this.isCollapsed ? "collapsed-right" : ""];
      }
    },

    mounted() {
      this.getLoginState().then(() => {
        this.setBreadCrumb(this.$route);
      });
    },

    methods: {
      logout() {
        service
          .logout()
          .then(res => {
            if (res && res.identity) {
              let some = "unlogin";
              this.$store.commit(some);
            }
          })
          .catch(e => {});
      },

      getLoginState() {
        return new Promise((resolve, reject) => {
          let type = [
            "*",
            "mentee", // 学员
            "mentor", // 个性化导师
            "esmentor", // 文书导师
            "opmentor", // 行政导师
            "headmentor", // 规划导师
            "specialist" // 专项导师
          ][0];

          // // debugger;
          // let currentList = menuList(type);

          // let defPageUrl = this.getChildrenItem(currentList).link;
          // this.$store.commit("login");
          // this.$store.commit("setIdentity", type);
          // this.$router.replace(defPageUrl);
          // resolve();

          //TODO 暂无导师数据，需要确定数据个时候 动态变更menu
          // this.$store.commit("unlogin");

          service
            .getLoginState()
            .then(res => {
              let some = "unlogin";
              if (res && res.identity) {
                some = "login";
                console.log("角色:::" + res.identity);
                let type = res.identity;
                let defPageUrl = menuList(type)[0].link;
                console.error(defPageUrl);
                this.$store.commit("login");
                this.$store.commit("setIdentity", type);
                this.$router.replace(defPageUrl);
              }
              this.$store.commit(some);
              resolve();
            })
            .catch(e => {
              this.$store.commit("unlogin");
              this.$store.commit("setIdentity", type);
              let defPageUrl = menuList(type)[0].link;
              this.$router.replace(defPageUrl);
              resolve();
            });
        });
      },

      setBreadCrumb(route) {
        let name = route.path.slice(1);
        if (name.indexOf("/") > -1) {
          name = name.replace("/", "_");
        }
        this.activeName = name;
      },

      // 查找子项link
      getChildrenItem(list) {
        let _this = this;
        let currentItem = list;
        query(currentItem);

        function query(list) {
          if (list && list.length) {
            currentItem = list[0];

            // 存储父元素name 用于展开menu
            if (!_this.openname.length) {
              _this.openname.push(currentItem.name);
            }
          }

          if (
            currentItem &&
            currentItem.children &&
            currentItem.children.length
          ) {
            query(currentItem.children);
          }
        }
        return currentItem;
      }
    },

    watch: {
      $route(newRoute) {
        this.setBreadCrumb(newRoute);
      }
    }
  };
</script>
