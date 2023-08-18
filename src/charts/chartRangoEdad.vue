<template>
  <div class="row">
    <highcharts class="chart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown";
import { ref, watch } from "vue";
drilldown(Highcharts);

//---------------------------------------------------------------------------------

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
        align: "center",
        xAxis: {
          type: "category",
        },
        accessibility: {
          announceNewData: {
            enabled: true,
          },
        },
        yAxis: {
          title: "",
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
          breadcrumbs: {
            position: {
              align: "right",
            },
          },
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
            {
              id: "50-59",
              data: [
                ["Mujer", 4],
                ["Hombre", 2],
                ["Persona no binaria", 1],
              ],
            },
            {
              id: "60 o más",
              data: [
                ["Mujer", 4],
                ["Hombre", 2],
                ["Persona no binaria", 1],
              ],
            },
          ],
        },
      },
      isSmallScreen: ref(false),
    };
  },
};
</script>

<style scoped>
.chart {
  width: 650px;
  min-width: 310px;
  max-width: 800px;
}

@media screen and (max-width: 780px) {
  .chart {
    height: 300px;
    min-width: 310px;
    max-width: 800px;
  }
}
</style>
