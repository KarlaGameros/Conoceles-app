<template>
  <div class="flex-center">
    <apexchart
      width="500"
      type="pie"
      :options="chartOptions"
      :series="series"
    />
    <div class="text-subtitle1 text-bold">
      De las {{ total }} (100%) candidaturas que respondieron el cuestionario de
      identidad, {{ totalMayor }} se autoidentificaron como población mayor.
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
const totalMayor = ref(null);

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
    (candidato) => candidato.poblacion_Mayor != null
  );

  let totalMayorCandidaturas = totalCandidaturas.filter(
    (candidato) =>
      candidato.poblacion_Mayor == "Sí" ||
      candidato.poblacion_Mayor == "SÍ" ||
      candidato.poblacion_Mayor == "Si" ||
      candidato.poblacion_Mayor == "SI"
  );

  total.value = totalCandidaturas.length;
  totalMayor.value = totalMayorCandidaturas.length;

  let si = totalCandidaturas.filter(
    (candidato) =>
      candidato.poblacion_Mayor == "Sí" ||
      candidato.poblacion_Mayor == "SÍ" ||
      candidato.poblacion_Mayor == "Si" ||
      candidato.poblacion_Mayor == "SI"
  );
  console.log(si);
  let no = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.poblacion_Mayor == "No" || candidato.poblacion_Mayor == "NO"
  );
  let prefiero_No_Contestar = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.poblacion_Mayor == "Prefiero no contestar"
  );
  series.value.push(si.length, no.length, prefiero_No_Contestar.length);
};

const chartOptions = {
  chart: {
    width: "100%",
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
          filename: "CandidaturasMayores",
          columnDelimiter: ",",
          headerCategory: "Candidaturas mayores",
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
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
      },
    },
  },
  labels: ["Sí", "No", "Prefiero no contestar"],
  colors: ["#af7ead", "#e4c0ed", "#f1d9f6"],
  states: {
    hover: {
      filter: "none",
    },
  },
  legend: {
    show: true,
  },
};
</script>

<style></style>
