<template>
  <div>
    <ve-histogram
      style="background: white"
      :legend="legend"
      :data="chartData"
      :colors="colors"
      :extend="extend"
      :yAxis="yAxis"
    ></ve-histogram>
    <a-divider />
    <span
      v-for="(data, index) in summaryInPieChart"
      :key="index"
      style="text-align: center"
    >
      <ve-pie
        :title="{ text: 'Q' + index }"
        :legend="pieLegend"
        :colors="colors"
        width="300px"
        height="320px"
        style="background: white; display: inline-block"
        :data="data"
      ></ve-pie>
    </span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: teacherGetters } = createNamespacedHelpers("teacher");
export default {
  data() {
    return {
      chartData: {
        columns: ["Q", "選項A", "選項B", "選項C", "選項D"],
        rows: null,
      },
      colors: ["#66B8C9", "#A98AB0", "#FEB06A", "#9DCED0"],
      extend: {
        barWidth: 30,
        dimensions: 1,
      },
      yAxis: { minInterval: 1 },
      legend: {
        show: false,
      },
      pieLegend: {
        selectedMode: false,
      },
    };
  },
  computed: {
    ...teacherGetters(["summaryInBarChart", "summaryInPieChart"]),
  },
  created() {
    this.chartData.rows = this.summaryInBarChart;
    console.log(this.summaryInPieChart);
  },
};
</script>
