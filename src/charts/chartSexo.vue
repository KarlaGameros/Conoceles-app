<template>
  <apexchart
    type="bar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const colors = ["#f3cfc6", "#77dd77"];
const series = [
  {
    name: "Hombres",
    data: [44, 55, 57],
  },
  {
    name: "Mujeres",
    data: [76, 85, 101],
  },
  {
    name: "No binario",
    data: [35, 41, 36],
  },
];
const chartOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["PVEM", "Juntos hacemos historia", "Va por México"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};
</script>

<style></style>
