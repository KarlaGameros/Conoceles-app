<template>
  <div class="row">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import highchartsVue from "highcharts-vue";
import drilldown from "highcharts/modules/drilldown";
drilldown(Highcharts);
export default {
  data() {
    return {
      // title: "",
      // numNum: Number,
      // durationOptions: [0, 500, 1000, 2000],
      // points: [10, 0, 8, 2, 6, 4, 5, 5],
      // chartType: "column",
      // seriesColor: "#6fcd98",
      // colorInputIsSupported: null,
      // animationDuration: 1000,
      // updateArgs: [true, true, { duration: 1000 }],
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Basic drilldown",
        },
        xAxis: {
          type: "category",
        },

        legend: {
          enabled: false,
        },

        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
            },
          },
        },

        series: [
          {
            name: "Things",
            colorByPoint: true,
            data: [
              {
                name: "18-24",
                y: 5,
                drilldown: "18-24",
              },
              {
                name: "25-29",
                y: 2,
                drilldown: "25-29",
              },
              {
                name: "30-39",
                y: 4,
                drilldown: "30-39",
              },
              {
                name: "40-49",
                y: 4,
                drilldown: "40-49",
              },
              {
                name: "50-59",
                y: 4,
                drilldown: "50-59",
              },
              {
                name: "60 o más",
                y: 4,
                drilldown: "60 o más",
              },
            ],
          },
        ],
        drilldown: {
          series: [
            {
              id: "18-24",
              data: [
                ["Mujer", 4],
                ["Hombre", 2],
                ["Persona no binaria", 1],
              ],
            },
            {
              id: "25-29",
              data: [
                ["Mujer", 4],
                ["Hombre", 2],
                ["Persona no binaria", 1],
              ],
            },
            {
              id: "30-39",
              data: [
                ["Mujer", 4],
                ["Hombre", 2],
                ["Persona no binaria", 1],
              ],
            },
            {
              id: "40-49",
              data: [
                ["Mujer", 4],
                ["Hombre", 2],
                ["Persona no binaria", 1],
              ],
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

#container {
  height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>
