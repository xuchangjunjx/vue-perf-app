export default {
  name: "my-table",
  props: {
    data: Array,
    columns: Array,
  },
  render(h) {
    return h(
      "el-table",
      {
        class: "my-table",
        props: {
          data: this.data,
        },
      },
      this.columns.map(column => {
        // 允许在column中自定义render函数
        const { label, width, prop, render } = column;
        let scopedSlots;
        // 如果有render函数 就是自定义渲染
        if (render) {
          // 将h传过去
          scopedSlots = {
            default: props => render(h, props),
          };
        }
        // 这个还是正常渲染
        return h("el-table-column", {
          props: {
            label,
            width,
            prop,
          },
          // 利用scopedSlots来渲染内容
          scopedSlots,
        });
      }),
    );
  },
};
