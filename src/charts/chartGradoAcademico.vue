<template>
  <apexchart
    type="pie"
    width="550"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
const colors = [
  "#af7ead",
  "#d1b3ef",
  "#dcbadb",
  "#f3e0f4",
  "#e7c7e9",
  "#dbaede",
  "#e8a9d4",
  "#e8ccf7",
  "#fbc9fb",
];
const series = [2, 10, 10, 10, 20, 20, 30, 15];
const chartOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  colors: colors,
  labels: [
    "Primaria",
    "Secundaria",
    "Preparatoria",
    "Técnica",
    "Licenciatura",
    "Maestría",
    "Doctorado",
    "Especialidad",
    "Postdoctorado",
  ],
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
