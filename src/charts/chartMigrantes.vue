<template>
  <apexchart
    width="600"
    type="donut"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const series = [20, 0];
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
  labels: ["No", "Si"],
  grid: {
    padding: {
      bottom: -80,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
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
