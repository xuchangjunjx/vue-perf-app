<template>
  <svg :class="[className, theme]" :style="styles" @click="click">
    <use :xlink:href="'#' + name" />
  </svg>
</template>
<script>
export default {
  name: "sm-svg-icon",
  props: {
    name: {
      type: String,
      required: true,
    },
    theme: String,
    size: {
      type: [String, Number],
      default() {
        return "24";
      },
    },
    className: {
      type: String,
      default: "svg-icons",
    },
  },

  computed: {
    styles() {
      return {
        height: this.size + "px",
        width: this.size + "px",
      };
    },
  },
  methods: {
    click(event) {
      // event.stopPropagation();
      this.$emit("click", event);
    },
  },
};
</script>
