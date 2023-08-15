<template>
  <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
</template>

<script setup>
const series = [10, 3];
const chartOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["No", "Si"],
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
