<template>
  <apexchart
    type="bar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGraficasStore } from "src/stores/graficas-store";
import { onMounted, watch, ref } from "vue";

const graficasStore = useGraficasStore();
const { list_Graficas_Filtrado } = storeToRefs(graficasStore);
const series = ref([{ data: [] }]);
const categorias = ref([]);
const chartOptions = ref(null);
onMounted(() => {
  rellenarGrafica();
});

watch(list_Graficas_Filtrado, (val) => {
  series.value = [];
  categorias.value = [];
  if (val != null) {
    rellenarGrafica();
  }
});

const rellenarGrafica = () => {
  if (!series.value) {
    series.value = [{}];
  }
  let totalShhn = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.is_Coalicion == true && candidato.coalicion_Id == 1007
  );
  let shhn = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.is_Coalicion == true &&
      candidato.coalicion_Id == 1007 &&
      candidato.avance_Curricular == 100
  );

  let totalFycn = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.is_Coalicion == true && candidato.coalicion_Id == 1008
  );
  let fycn = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.is_Coalicion == true &&
      candidato.coalicion_Id == 1008 &&
      candidato.avance_Curricular == 100
  );

  let totalPt = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 11 && candidato.is_Coalicion == false
  );
  let pt = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 11 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  let totalPvem = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 12 && candidato.is_Coalicion == false
  );
  let pvem = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 12 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  let totalMc = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 13 && candidato.is_Coalicion == false
  );
  let mc = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 13 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  let totalMorena = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 14 && candidato.is_Coalicion == false
  );
  let morena = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 14 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  let totalNan = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 15 && candidato.is_Coalicion == false
  );
  let nan = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 15 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  let totalMln = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 16 && candidato.is_Coalicion == false
  );
  let mln = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 16 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  let totalFxmn = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 17 && candidato.is_Coalicion == false
  );
  let fxmn = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 17 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  let totalRspn = list_Graficas_Filtrado.value.filter(
    (candidato) => candidato.partido_Id == 18 && candidato.is_Coalicion == false
  );

  let rspn = list_Graficas_Filtrado.value.filter(
    (candidato) =>
      candidato.partido_Id == 18 &&
      candidato.avance_Curricular == 100 &&
      candidato.is_Coalicion == false
  );

  if (!series.value[0]) {
    series.value[0] = {};
  }

  if (!series.value[0].data) {
    series.value[0].data = [];
  }

  series.value[0].data = [
    parseInt((shhn.length * 100) / totalShhn.length),
    parseInt((fycn.length * 100) / totalFycn.length),
    parseInt((pt.length * 100) / totalPt.length),
    parseInt((pvem.length * 100) / totalPvem.length),
    parseInt((mc.length * 100) / totalMc.length),
    parseInt((morena.length * 100) / totalMorena.length),
    parseInt((nan.length * 100) / totalNan.length),
    parseInt((mln.length * 100) / totalMln.length),
    parseInt((fxmn.length * 100) / totalFxmn.length),
    parseInt((rspn.length * 100) / totalRspn.length),
  ];

  categorias.value = [];

  categorias.value = [
    `SHHN ${shhn.length} de ${totalShhn.length}`,
    `FCN ${fycn.length} de ${totalFycn.length}`,
    `PT ${pt.length} de ${totalPt.length}`,
    `PVEM ${pvem.length} de ${totalPvem.length}`,
    `MC ${mc.length} de ${totalMc.length}`,
    `PM ${morena.length} de ${totalMorena.length}`,
    `NAN ${nan.length} de ${totalNan.length}`,
    `MLN ${mln.length} de ${totalMln.length}`,
    `FXMN ${fxmn.length} de ${totalFxmn.length}`,
    `RSPN ${rspn.length} de ${totalRspn.length}`,
  ];
};

const colors = ["#af7ead"];

rellenarGrafica();

watch(categorias, (val) => {
  if (val != null) {
    chartOptions.value = {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: colors,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        formatter: (val) => {
          return val + "%";
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },

      xaxis: {
        categories: categorias.value,
      },
      fill: {
        opacity: 1,
      },
    };
  }
});
</script>
