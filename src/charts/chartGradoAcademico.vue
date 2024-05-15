<template>
  <apexchart
    type="pie"
    width="550"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useGraficasStore } from "src/stores/graficas-store";
import { onMounted, ref, watch } from "vue";

const $q = useQuasar();
const graficasStore = useGraficasStore();
const { list_Graficas_By_Eleccion, cargoGrafica } = storeToRefs(graficasStore);
const series = ref([]);

onMounted(() => {
  rellenarGrafica();
});

watch(list_Graficas_By_Eleccion, (val) => {
  if (val != null) {
    rellenarGrafica();
  }
});

watch(cargoGrafica, (val) => {
  if (val != null) {
    rellenarGrafica();
  }
});

const rellenarGrafica = () => {
  series.value = [];
  let sinEstudios = null;
  let primaria = null;
  let secundaria = null;
  let preparatoria = null;
  let tecnica = null;
  let licenciatura = null;
  let maestria = null;
  let doctorado = null;
  let especialidad = null;
  let postdoctorado = null;
  if (cargoGrafica.value == "RP") {
    sinEstudios = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Sin estudios" &&
        candidato.tipo_Candidato == "RP"
    );
    primaria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Primaria" &&
        candidato.tipo_Candidato == "RP"
    );
    secundaria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Secundaria" &&
        candidato.tipo_Candidato == "RP"
    );
    preparatoria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Preparatoria" &&
        candidato.tipo_Candidato == "RP"
    );
    tecnica = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Técnica" &&
        candidato.tipo_Candidato == "RP"
    );
    licenciatura = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Licenciatura" &&
        candidato.tipo_Candidato == "RP"
    );
    maestria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Maestría" &&
        candidato.tipo_Candidato == "RP"
    );
    doctorado = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Doctorado" &&
        candidato.tipo_Candidato == "RP"
    );
    especialidad = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Especialidad" &&
        candidato.tipo_Candidato == "RP"
    );
    postdoctorado = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Postdoctorado" &&
        candidato.tipo_Candidato == "RP"
    );
  } else if (cargoGrafica.value == "MR") {
    sinEstudios = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Sin estudios" &&
        candidato.tipo_Candidato == "MR"
    );
    primaria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Primaria" &&
        candidato.tipo_Candidato == "MR"
    );
    secundaria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Secundaria" &&
        candidato.tipo_Candidato == "MR"
    );
    preparatoria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Preparatoria" &&
        candidato.tipo_Candidato == "MR"
    );
    tecnica = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Técnica" &&
        candidato.tipo_Candidato == "MR"
    );
    licenciatura = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Licenciatura" &&
        candidato.tipo_Candidato == "MR"
    );
    maestria = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Maestría" &&
        candidato.tipo_Candidato == "MR"
    );
    doctorado = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Doctorado" &&
        candidato.tipo_Candidato == "MR"
    );
    especialidad = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Especialidad" &&
        candidato.tipo_Candidato == "MR"
    );
    postdoctorado = list_Graficas_By_Eleccion.value.filter(
      (candidato) =>
        candidato.grado_Maximo_Studio == "Postdoctorado" &&
        candidato.tipo_Candidato == "MR"
    );
  } else {
    sinEstudios = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Sin estudios"
    );
    primaria = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Primaria"
    );
    secundaria = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Secundaria"
    );
    preparatoria = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Preparatoria"
    );
    tecnica = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Técnica"
    );
    licenciatura = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Licenciatura"
    );
    maestria = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Maestría"
    );
    doctorado = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Doctorado"
    );
    especialidad = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Especialidad"
    );
    postdoctorado = list_Graficas_By_Eleccion.value.filter(
      (candidato) => candidato.grado_Maximo_Studio == "Postdoctorado"
    );
  }

  series.value.push(
    sinEstudios.length,
    primaria.length,
    secundaria.length,
    preparatoria.length,
    tecnica.length,
    licenciatura.length,
    maestria.length,
    doctorado.length,
    especialidad.length,
    postdoctorado.length
  );
};

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
  "#af7ead",
];

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
          filename: undefined,
          columnDelimiter: ",",
          headerCategory: "category",
          headerValue: "value",
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
  colors: colors,
  labels: [
    "Sin estudios",
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
  legend: {
    show: true,
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
</script>
