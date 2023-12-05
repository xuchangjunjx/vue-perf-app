<template>
  <div>
    <markdown :input="input" />
    <markdown :input="js" />
  </div>
</template>
<script>
import markdown from "../../components/markdown";
export default {
  components: {
    markdown,
  },
  data() {
    return {
      input: "# Hello World \n ## Guide \n 1. Hello \n 2. World \n 3. Markdown",
      js:"```javascript\nfunction test(){\n  console.log('test');\n}\n```"
    };
  },
};
</script>
<style lang="less" scoped></style>
