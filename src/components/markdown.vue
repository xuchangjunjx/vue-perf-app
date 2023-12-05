<template>
  <div class="markdown" v-html="output"></div>
</template>
<script>
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/base16/darcula.css";
export default {
  props: {
    input: {
      type: String,
      default: "",
    },
  },
  computed: {
    output() {
      let m = new Marked(
        markedHighlight({
          langPrefix: "hljs language-",
          highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
          },
        })
      );
      return m.parse(this.input);
    },
  },
};
</script>
<style scoped>
.markdown {
  padding: 24px;
}
</style>
