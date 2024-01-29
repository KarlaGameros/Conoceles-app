<template>
  <apexchart
    width="450"
    type="pie"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const series = [20, 5, 5];
const chartOptions = {
  chart: {
    width: "100%",
    type: "pie",
  },
  labels: ["No", "Si", "Prefiero no contestar"],
  colors: ["#af7ead", "#e4c0ed", "#dcbadb"],
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
      },
    },
  },
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
