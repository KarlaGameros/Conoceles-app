<template>
  <apexchart
    type="donut"
    width="380"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const series = [44, 55, 41, 17];
const chartOptions = {
  chart: {
    width: 380,
    type: "donut",
  },
  labels: [
    "De $11,001 a $25,000",
    "De $25,001 a $50,000",
    "De $75,001 a $112,000",
    "Más de $112,000",
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
