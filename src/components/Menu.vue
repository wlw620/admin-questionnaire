<template>
  <Menu
    theme="light" width="auto"
    :class="menuitemClasses"
    :active-name="activename"
    :open-names="openname"
  >
    <!-- logo -->
    <div class="logo-con">
      <img src="../static/imgs/logo.png" alt="三士渡教育">
    </div>
    <!-- logo end -->

    <!-- menu -->
    <template v-for="item in menuList">
      <MenuItem :name="item.name" v-if="!item.children" :to="item.link">
      <Icon type="ios-paper" />
      <span>{{item.title}}</span>
      </MenuItem>
      <Submenu :name="item.name" v-else>
        <template slot="title">
          <Icon type="ios-people" />
          <span>{{item.title}}</span>
        </template>
        <MenuItem v-for="childItem in item.children" :name="childItem.name" :to="childItem.link">
          {{ childItem.title }}
        </MenuItem>
      </Submenu>
    </template>
  </Menu>
  <!-- menu end-->
</template>

<script>
import "../static/styles/menu.less";
import menuList from "../config/menuListConf";

export default {
  data() {
    return {
      menuList: menuList(this.$store.state.identity)
    };
  },
  props: ["activename", "openname", "menuitemClasses"]
};
</script>
