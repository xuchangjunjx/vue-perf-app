<template>
  <el-container class="h-full">
    <el-aside width="200px" class="aside p-12">
      <div>
        <router-link to="/child/page1" class="menu-item cursor-pointer"
          >子路由1</router-link
        >
      </div>
      <div>
        <router-link to="/child/page2" class="menu-item cursor-pointer"
          >子路由2</router-link
        >
      </div>
    </el-aside>
    <el-container>
      <el-main class="p-12">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less" scoped>
.aside {
  border-right: 1px solid rgba(248, 250, 252, 0.06);
  & > div {
    padding: 8px 0;
    margin-bottom: 8px;
    color: rgb(226, 232, 240);
    &:hover {
      // background: rgb(56, 189, 248);
      color: rgb(56, 189, 248);
    }
  }
}
</style>
