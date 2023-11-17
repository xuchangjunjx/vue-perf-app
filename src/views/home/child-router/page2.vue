<template>
  <div>
    <el-button type="success" @click="login">发送一个请求</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.axios.post("/login").then(res => {
        console.log(res);
      });
      this.axios.get("/test").then(res => {
        console.log(res);
      });
    },
  },
};
</script>
