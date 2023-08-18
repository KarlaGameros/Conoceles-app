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
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "",
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
            name: "Edades",
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

<style scoped></style>
