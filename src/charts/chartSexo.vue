<template>
  <apexchart
    type="pie"
    width="450"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
import { onMounted } from "vue";

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
const series = [44, 55, 5];
const chartOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  colors: colors,

  style: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  labels: ["Mujer", "Hombre", "No binario"],
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

onMounted(() => {
  setTimeout(() => {
    console.log("Cargo");
    let spans = document.querySelectorAll(".apexcharts-legend-text");
    for (let span of spans) {
      span.style.fontSize = "18px";
    }
  }, 1000);
});
</script>

<style scoped>
.apexcharts-legend-text {
  font-size: 20px !important;
}
</style>
