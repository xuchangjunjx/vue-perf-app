<template>
  <div style="width: 100%; height: 100%; padding: 24px">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { sortBy } from 'lodash';
export default {
  mounted() {
    const myChart = echarts.init(this.$refs.echarts, "dark");
    const option = {
      title: {
        text: "Stacked Area Chart",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: sortBy([120, 132, 101, 134, 90, 230, 210]),
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: sortBy([220, 182, 191, 234, 290, 330, 310]),
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: sortBy([150, 232, 201, 154, 190, 330, 410]),
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: sortBy([320, 332, 301, 334, 390, 330, 320]),
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          label: {
            show: true,
            position: "top",
          },
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: sortBy([932,820, 901, 934, 1290, 1330, 1320]),
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>
<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 400px;
}
</style>
