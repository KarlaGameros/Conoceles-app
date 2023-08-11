<template>
  <apexchart
    type="bar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
//const colors = ["#f3cfc6", "#77dd77", "#c89ed3", "#fdfd96"];

const series = [
  {
    name: "chartRangoEdad",
    data: [21, 22, 10, 28, 5, 20],
  },
];
const chartOptions = {
  chart: {
    height: 350,
    type: "bar",
    events: {
      click: function (chart, w, e) {},
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      ["18-24"],
      ["25-29"],
      ["30-39"],
      ["40-49"],
      ["50-59"],
      ["60 o más"],
    ],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
};
</script>

<style></style>
