<template>
  <apexchart
    type="donut"
    width="500"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const series = [20, 15, 15, 10, 10, 5, 5, 20];
const chartOptions = {
  chart: {
    width: 500,
    type: "donut",
  },
  labels: [
    "Menos de $11,000",
    "De $11,001 a $25,000",
    "De $25,001 a $50,000",
    "De $50,001 a $75,000",
    "De $75,001 a $112,000",
    "Más de $112,000",
    "No recibe ingresos",
    "Prefiero no contestar",
  ],
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  colors: [
    "#af7ead",
    "#b988b8",
    "#dcbadb",
    "#f3e0f4",
    "#e7c7e9",
    "#dbaede",
    "#cf95d3",
    "#c675ff",
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 380,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
</script>

<style></style>
