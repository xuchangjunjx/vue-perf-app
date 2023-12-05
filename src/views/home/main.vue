<template>
  <el-container class="h-full g-dark">
    <el-header class="header">
      <div class="flex justify-between">
        <div class="flex">
          <router-link to="/" class="menu-item cursor-pointer"
            >首页</router-link
          >
          <router-link to="/about" class="menu-item cursor-pointer"
            >关于</router-link
          >
          <router-link to="/charts" class="menu-item cursor-pointer"
            >图表</router-link
          >
          <router-link to="/svg-icons" class="menu-item cursor-pointer"
            >svg icon</router-link
          >
          <router-link to="/markdown" class="menu-item cursor-pointer"
            >markdown</router-link
          >
          <router-link to="/child" class="menu-item cursor-pointer"
            >child</router-link
          >
        </div>
        <div class="states" v-show="userName">欢迎👏 {{ userName }}</div>
      </div>
    </el-header>
    <el-main class="p-0">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userName"]),
  },
};
</script>
<style scoped lang="less">
.header {
  border-bottom: 1px solid rgba(248, 250, 252, 0.06);
}
</style>
