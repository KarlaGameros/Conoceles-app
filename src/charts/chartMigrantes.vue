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
      identidad, {{ totalMigrante }} se identificaron como migrantes.
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
const totalMigrante = ref(null);

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
    (candidato) => candidato.migrante != null
  );
  let totalMigrantesCandidaturas = totalCandidaturas.filter(
    (candidato) =>
      candidato.migrante == "Sí" ||
      candidato.migrante == "SÍ" ||
      candidato.migrante == "Si" ||
      candidato.migrante == "SI"
  );
  total.value = totalCandidaturas.length;
  totalMigrante.value = totalMigrantesCandidaturas.length;
  let si = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.migrante == "Sí" ||
      candidato.migrante == "SÍ" ||
      candidato.migrante == "Si" ||
      candidato.migrante == "SI"
  );
  let no = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.migrante == "No" || candidato.migrante == "NO"
  );
  let prefiero_No_Contestar = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.migrante == "Prefiero no contestar"
  );

  series.value.push(si.length, no.length, prefiero_No_Contestar.length);
};

const chartOptions = {
  chart: { width: "100%", type: "donut" },
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
  colors: ["#af7ead", "#c88edb", "#e4c0ed"],
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
