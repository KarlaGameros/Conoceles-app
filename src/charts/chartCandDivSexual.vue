<template>
  <div class="flex-center">
    <apexchart
      width="500"
      type="pie"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div class="text-subtitle1 text-bold">
      De las {{ total }} (100%) candidaturas que respondieron el cuestionario de
      identidad, {{ totaDiversidad }} se autoidentificaron como parte de la
      comunidad LGBTTTIQ+.
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
const totaDiversidad = ref(null);

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
    (candidato) => candidato.lgbttiq != null
  );
  let totalDiversidadCandidaturas = totalCandidaturas.filter(
    (candidato) =>
      candidato.lgbttiq == "Sí" ||
      candidato.lgbttiq == "SÍ" ||
      candidato.lgbttiq == "Si" ||
      candidato.lgbttiq == "SI"
  );
  total.value = totalCandidaturas.length;
  totaDiversidad.value = totalDiversidadCandidaturas.length;

  let si = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.lgbttiq == "Sí" ||
      candidato.lgbttiq == "SÍ" ||
      candidato.lgbttiq == "Si" ||
      candidato.lgbttiq == "SI"
  );
  let no = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.lgbttiq == "No" || candidato.lgbttiq == "NO"
  );
  let prefiero_No_Contestar = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.lgbttiq == "Prefiero no contestar"
  );

  series.value.push(si.length, no.length, prefiero_No_Contestar.length);
};

const chartOptions = {
  chart: {
    width: 380,
    type: "pie",
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: [],
      },
      export: {
        csv: {
          filename: "CandidaturasDiversidadSexual",
          columnDelimiter: ",",
          headerCategory: "Candidaturas diversidad sexual",
          headerValue: "Cantidad",
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString();
          },
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        },
      },
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
  },
  colors: ["#af7ead", "#e4c0ed", "#dcbadb"],
  labels: ["Sí", "No", "Prefiero no contestar"],
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
