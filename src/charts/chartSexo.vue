<template>
  <apexchart
    type="pie"
    width="380"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const colors = [
  "#f3cfc6",
  "#77dd77",
  "#c89ed3",
  "#fdfd96",
  "#f4c2c2",
  "#74bbfb",
  "#fbb474",
  "#89cff0",
  "#c8f3cds",
];
const series = [44, 55];
const chartOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  colors: colors,
  labels: ["Mujer", "Hombre"],
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  legend: {
    show: true,
  },
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
