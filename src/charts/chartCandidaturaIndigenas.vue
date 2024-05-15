<template>
  <div class="flex-center">
    <apexchart
      width="500px"
      type="pie"
      :options="chartOptions"
      :series="series"
    />
    <div class="text-subtitle1 text-bold">
      De las {{ total }} (100%) candidaturas que respondieron el cuestionario de
      identidad, {{ totalIndigena }} se autoidentificaron como personas
      indígenas.
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useGraficasStore } from "src/stores/graficas-store";
import { onMounted, ref, watch } from "vue";

const $q = useQuasar();
const graficasStore = useGraficasStore();
const { list_Graficas_By_Eleccion } = storeToRefs(graficasStore);
const series = ref([]);
const total = ref(null);
const totalIndigena = ref(null);

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
    (candidato) => candidato.indigena != null
  );

  let totalIndigenaCandidaturas = totalCandidaturas.filter(
    (candidato) =>
      candidato.indigena == "Sí" ||
      candidato.indigena == "SÍ" ||
      candidato.indigena == "SI" ||
      candidato.indigena == "Si"
  );
  total.value = totalCandidaturas.length;
  totalIndigena.value = totalIndigenaCandidaturas.length;
  let si = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.indigena == "Sí" ||
      candidato.indigena == "SÍ" ||
      candidato.indigena == "SI" ||
      candidato.indigena == "Si"
  );
  let no = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.indigena == "No" || candidato.indigena == "NO"
  );
  let prefiero_No_Contestar = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.indigena == "Prefiero no contestar"
  );
  series.value.push(si.length, no.length, prefiero_No_Contestar.length);
};

const chartOptions = {
  chart: {
    width: "100%",
    type: "pie",
  },
  labels: ["Si", "No", "Prefiero no contestar"],
  colors: ["#af7ead", "#e4c0ed", "#dcbadb"],
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
  },
  legend: {
    position: $q.screen.xs ? "top" : "right",
  },
};
</script>

<style></style>
