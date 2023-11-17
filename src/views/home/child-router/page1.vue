<template>
  <div class="w-50">
    <div>用户名<el-input v-model="user.userName" /></div>
    <div>密码:<el-input v-model="user.password" /></div>
    <el-button type="primary" @click="login">登陆</el-button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["SET_INFO"]),
    login() {
      new Promise(resolve => {
        resolve((Math.random() * 1000000) | 0);
      }).then(token => {
        this.$message.success("登陆成功");
        this.SET_INFO({
          userName: this.user.userName,
          token: token,
        });
      });
    },
  },
};
</script>
