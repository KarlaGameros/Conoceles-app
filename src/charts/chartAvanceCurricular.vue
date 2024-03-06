<template>
  <div class="col-12">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useGraficasStore } from "src/stores/graficas-store";
import { storeToRefs } from "pinia";
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown";
import accessibility from "highcharts/modules/accessibility";
import exporting from "highcharts/modules/exporting";

drilldown(Highcharts);
accessibility(Highcharts);
exporting(Highcharts);
const graficasStore = useGraficasStore();
const { list_Graficas_Filtrado } = storeToRefs(graficasStore);

export default {
  data() {
    const shhnPorcentaje = ref(null);
    const shhnSeries = ref([]);
    const fycnPorcentaje = ref(null);
    const fycnSeries = ref([]);
    const ptPorcentaje = ref(null);
    const ptSeries = ref([]);
    const pvemPorcentaje = ref(null);
    const pvemSeries = ref([]);
    const mcPorcentaje = ref(null);
    const mcSeries = ref([]);
    const morenaPorcentaje = ref(null);
    const morenaSeries = ref([]);
    const nanPorcentaje = ref(null);
    const nanSeries = ref([]);
    const mlnPorcentaje = ref(null);
    const mlnSeries = ref([]);
    const fxmnPorcentaje = ref(null);
    const fxmnSeries = ref([]);
    const rspnPorcentaje = ref(null);
    const rspnSeries = ref([]);

    const rellenarGrafica = () => {
      shhnPorcentaje.value = null;
      shhnSeries.value = [];
      fycnPorcentaje.value = null;
      fycnSeries.value = [];
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
      if (shhn.length > 0) {
        let mujeres = shhn.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = shhn.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = shhn.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        shhnPorcentaje.value = parseInt((shhn.length * 100) / totalShhn.length);
        shhnSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

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
      if (fycn.length > 0) {
        let mujeres = fycn.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = fycn.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = fycn.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        fycnPorcentaje.value = parseInt((fycn.length * 100) / totalFycn.length);
        fycnSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalPt = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 11 && candidato.is_Coalicion == false
      );
      let pt = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 11 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (pt.length > 0) {
        let mujeres = pt.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = pt.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = pt.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        ptPorcentaje.value = parseInt((pt.length * 100) / totalPt.length);
        ptSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalPvem = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 12 && candidato.is_Coalicion == false
      );
      let pvem = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 12 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (pvem.length > 0) {
        let mujeres = pvem.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = pvem.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = pvem.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        pvemPorcentaje.value = parseInt((pvem.length * 100) / totalPvem.length);
        pvemSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalMc = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 13 && candidato.is_Coalicion == false
      );
      let mc = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 13 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (mc.length > 0) {
        let mujeres = mc.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = mc.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = mc.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        mcPorcentaje.value = parseInt((mc.length * 100) / totalMc.length);
        mcSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalMorena = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 14 && candidato.is_Coalicion == false
      );
      let morena = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 14 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (morena.length > 0) {
        let mujeres = morena.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = morena.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = morena.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        morenaPorcentaje.value = parseInt(
          (morena.length * 100) / totalMorena.length
        );
        morenaSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalNan = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 15 && candidato.is_Coalicion == false
      );
      let nan = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 15 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (nan.length > 0) {
        let mujeres = nan.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = nan.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = nan.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        nanPorcentaje.value = parseInt((nan.length * 100) / totalNan.length);
        nanSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalMln = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 16 && candidato.is_Coalicion == false
      );
      let mln = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 16 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (mln.length > 0) {
        let mujeres = mln.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = mln.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = mln.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        mlnPorcentaje.value = parseInt((mln.length * 100) / totalMln.length);
        nanSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalFxmn = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 17 && candidato.is_Coalicion == false
      );
      let fxmn = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 17 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (fxmn.length > 0) {
        let mujeres = fxmn.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = fxmn.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = fxmn.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        fxmnPorcentaje.value = parseInt((fxmn.length * 100) / totalFxmn.length);
        nanSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }

      let totalRspn = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 18 && candidato.is_Coalicion == false
      );
      let rspn = list_Graficas_Filtrado.value.filter(
        (candidato) =>
          candidato.partido_Id == 18 &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Coalicion == false
      );
      if (rspn.length > 0) {
        let mujeres = rspn.filter((candidato) => candidato.sexo === "Mujer");
        let hombres = rspn.filter((candidato) => candidato.sexo === "Hombre");
        let noBinario = rspn.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        rspnPorcentaje.value = parseInt((rspn.length * 100) / totalRspn.length);
        nanSeries.value.push(
          ["Mujer", mujeres.length],
          ["Hombre", hombres.length],
          ["No binario", noBinario.length]
        );
      }
    };

    watch(list_Graficas_Filtrado, (val) => {
      if (val != null) {
        actualizarGrafica();
      }
    });

    const actualizarGrafica = () => {
      rellenarGrafica();

      this.chartOptions.series[0].data = [
        { name: "SHHN", y: shhnPorcentaje.value, drilldown: "SHHN" },
        { name: "FYCN", y: shhnPorcentaje.value, drilldown: "FYCN" },
        { name: "PT", y: shhnPorcentaje.value, drilldown: "PT" },
        { name: "PVEM", y: shhnPorcentaje.value, drilldown: "PVEM" },
        { name: "MC", y: shhnPorcentaje.value, drilldown: "MC" },
        { name: "MORENA", y: shhnPorcentaje.value, drilldown: "MORENA" },
        { name: "NAN", y: shhnPorcentaje.value, drilldown: "NAN" },
        { name: "MLN", y: shhnPorcentaje.value, drilldown: "MLN" },
        { name: "FXMN", y: shhnPorcentaje.value, drilldown: "FXMN" },
        { name: "RSPN", y: shhnPorcentaje.value, drilldown: "RSPN" },
      ];

      this.chartOptions.drilldown.series = [
        { id: "SHHN", data: shhnSeries.value },
        { id: "FYCN", data: fycnSeries.value },
        { id: "PT", data: ptSeries.value },
        { id: "PVEM", data: pvemSeries.value },
        { id: "MC", data: mcSeries.value },
        { id: "MORENA", data: morenaSeries.value },
        { id: "NAN", data: nanSeries.value },
        { id: "MLN", data: mlnSeries.value },
        { id: "FXMN", data: fxmnSeries.value },
        { id: "RSPN", data: rspnSeries.value },
      ];
    };

    rellenarGrafica();

    return {
      chartOptions: {
        colors: ["#af7ead", "#b988b8", "#dcbadb"],
        chart: {
          type: "column",
        },
        title: {
          text: "",
        },
        align: "center",
        xAxis: {
          type: "category",
        },
        accessibility: {
          announceNewData: {
            enabled: true,
          },
        },
        yAxis: {
          title: "",
        },
        legend: {
          enabled: false,
        },
        tooltip: {
          pointFormat: "<b>{point.y} %<br/>",
          shared: true,
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              pointFormat: "<b>{point.y} %<br/>",
            },
          },
        },
        series: [
          {
            name: "Avance",
            colorByPoint: true,
            data: [
              {
                name: "SHHN",
                y: shhnPorcentaje.value,
                drilldown: "SHHN",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "FYCN",
                y: fycnPorcentaje.value,
                drilldown: "FYCN",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "PT",
                y: ptPorcentaje.value,
                drilldown: "PT",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "PVEM",
                y: pvemPorcentaje.value,
                drilldown: "PVEM",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "MC",
                y: mcPorcentaje.value,
                drilldown: "MC",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "MORENA",
                y: morenaPorcentaje.value,
                drilldown: "MORENA",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "NAN",
                y: nanPorcentaje.value,
                drilldown: "NAN",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "MLN",
                y: mlnPorcentaje.value,
                drilldown: "MLN",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "FXMN",
                y: fxmnPorcentaje.value,
                drilldown: "FXMN",
                dataLabels: {
                  color: "#444344",
                },
              },
              {
                name: "RSPN",
                y: rspnPorcentaje.value,
                drilldown: "RSPN",
                dataLabels: {
                  color: "#444344",
                },
              },
            ],
          },
        ],
        drilldown: {
          dataLabels: {
            enabled: false,
          },
          breadcrumbs: {
            position: {
              align: "right",
            },
          },
          series: [
            {
              id: "SHHN",
              data: shhnSeries.value,
            },
            {
              id: "FYCN",
              data: fycnSeries.value,
            },
            {
              id: "PT",
              data: ptSeries.value,
            },
            {
              id: "PVEM",
              data: pvemSeries.value,
            },
            {
              id: "MC",
              data: mcSeries.value,
            },
            {
              id: "MORENA",
              data: morenaSeries.value,
            },
            {
              id: "NAN",
              data: nanSeries.value,
            },
            {
              id: "MLN",
              data: mlnSeries.value,
            },
            {
              id: "FXMN",
              data: fxmnSeries.value,
            },
            {
              id: "RSPN",
              data: rspnSeries.value,
            },
          ],
        },
      },
    };
  },
};
</script>
