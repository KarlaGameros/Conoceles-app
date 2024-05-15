<template>
  <div class="flex-center">
    <apexchart
      type="donut"
      width="500"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div class="text-subtitle1 text-bold">
      De las {{ total }} (100%) candidaturas que respondieron el cuestionario de
      identidad, {{ totalDiscapacidad }} se autoidentificaron con alguna
      discapacidad.
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
const totalDiscapacidad = ref(null);

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
    (candidato) => candidato.discapacidad != null
  );
  let totalCandidaturasDiscapacidad = totalCandidaturas.filter(
    (candidato) =>
      candidato.discapacidad == "Sí" ||
      candidato.discapacidad == "Si" ||
      candidato.discapacidad == "SÍ" ||
      candidato.discapacidad == "SI"
  );
  total.value = totalCandidaturas.length;
  totalDiscapacidad.value = totalCandidaturasDiscapacidad.length;
  let si = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.discapacidad == "Sí" ||
      candidato.discapacidad == "Si" ||
      candidato.discapacidad == "SÍ" ||
      candidato.discapacidad == "SI"
  );
  let no = list_Graficas_By_Eleccion.value.filter(
    (candidato) =>
      candidato.discapacidad == "No" || candidato.discapacidad == "NO"
  );
  let prefiero_No_Contestar = list_Graficas_By_Eleccion.value.filter(
    (candidato) => candidato.discapacidad == "Prefiero no contestar"
  );

  series.value.push(si.length, no.length, prefiero_No_Contestar.length);
};

const chartOptions = {
  chart: {
    width: "100%",
    type: "donut",
    dropShadow: {
      enabled: true,
      color: "#111",
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  labels: ["Sí", "No", "Prefiero no contestar"],
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
  },
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      enabled: true,
      style: [
        "verticalLines",
        "squares",
        "horizontalLines",
        "circles",
        "slantedLines",
      ],
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  theme: {
    palette: "palette2",
  },
  colors: ["#af7ead", "#b988b8", "#dcbadb"],
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
