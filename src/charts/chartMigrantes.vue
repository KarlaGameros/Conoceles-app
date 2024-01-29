<template>
  <apexchart
    width="600"
    type="donut"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const series = [20, 5, 1];
const chartOptions = {
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
    },
  },
  labels: ["No", "Si", "Prefiero no contestar"],
  grid: {
    padding: {
      bottom: -80,
    },
  },
  colors: ["#af7ead", "#c88edb", "#e4c0ed"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 400,
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
