<template>
  <apexchart
    width="500"
    type="pie"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const series = [25, 5, 2];
const chartOptions = {
  chart: {
    width: "100%",
    type: "pie",
  },
  labels: ["Si", "No", "Prefiero no contestar"],
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
      },
    },
  },
  colors: ["#af7ead", "#e4c0ed", "#f1d9f6"],
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
  },
  legend: {
    show: false,
  },
};
</script>

<style></style>
