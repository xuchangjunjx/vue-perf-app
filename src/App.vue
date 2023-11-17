<template>
  <div class="main-conatiner">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  watch: {
    $route() {
      console.log(this.$route);
    },
  },
};
</script>
<style lang="less">
.main-conatiner {
  height: 100vh;
}
</style>
