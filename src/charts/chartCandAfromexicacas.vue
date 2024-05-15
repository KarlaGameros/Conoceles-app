<template>
  <div class="flex-center">
    <apexchart
      width="550"
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div class="text-subtitle1 text-bold q-pt-md">
      De las {{ total }} (100%) candidaturas que respondieron el cuestionario de
      identidad, {{ totalAfromexicana }} se autoidentificaron como
      afromexicanas.
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGraficasStore } from "src/stores/graficas-store";
import { onMounted, ref, watch } from "vue";

const graficasStore = useGraficasStore();
const { list_Graficas_By_Eleccion } = storeToRefs(graficasStore);
const series = ref([]);
const total = ref(null);
const totalAfromexicana = ref(null);

onMounted(() => {
  rellenarGrafica();
});

watch(list_Graficas_By_Eleccion, (val) => {
  series.value = [];
  if (val != null) {
    rellenarGrafica();
  }
});

const rellenarGrafica = () => {
  let totalCandidaturas = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.afromexicano != null
  );
  let totalAfroCandidaturas = totalCandidaturas.filter(
    (candidato) =>
      candidato.afromexicano == "Sí" ||
      candidato.afromexicano == "SÍ" ||
      candidato.afromexicano == "Si" ||
      candidato.afromexicano == "SI"
  );
  total.value = totalCandidaturas.length;
  totalAfromexicana.value = totalAfroCandidaturas.length;

  let si = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.afromexicano == "Sí" ||
      candidato.afromexicano == "SÍ" ||
      candidato.afromexicano == "Si" ||
      candidato.afromexicano == "SI"
  );
  let no = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.afromexicano == "No" || candidato.afromexicano == "NO"
  );
  let prefiero_No_Contestar = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.afromexicano == "Prefiero no contestar"
  );

  series.value.push(si.length, no.length, prefiero_No_Contestar.length);
};

const chartOptions = {
  chart: {
    width: "100%",
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
    },
  },
  labels: ["Sí", "No", "Prefiero no contestar"],
  grid: {
    padding: {
      bottom: -80,
    },
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
  },
  colors: ["#af7ead", "#e4c0ed", "#dcbadb"],
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
