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
const { list_Graficas_Genero_Edad, cargoGrafica } = storeToRefs(graficasStore);

export default {
  data() {
    const priPorcentaje = ref(null);
    const priSeries = ref([]);
    const panPorcentaje = ref(null);
    const panSeries = ref([]);
    const prdPorcentaje = ref(null);
    const prdSeries = ref([]);
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
    const comunPorcentaje = ref(null);
    const comunSeries = ref([]);
    const totalShhn = ref(null);
    const shhn = ref(null);
    const totalFycn = ref(null);
    const fycn = ref(null);
    const totalPt = ref(null);
    const pt = ref(null);
    const totalPvem = ref(null);
    const pvem = ref(null);
    const totalMc = ref(null);
    const mc = ref(null);
    const totalMorena = ref(null);
    const morena = ref(null);
    const totalNan = ref(null);
    const nan = ref(null);
    const totalMln = ref(null);
    const mln = ref(null);
    const totalFxmn = ref(null);
    const fxmn = ref(null);
    const totalRspn = ref(null);
    const rspn = ref(null);
    const totalPri = ref(null);
    const pri = ref(null);
    const totalPan = ref(null);
    const pan = ref(null);
    const totalPrd = ref(null);
    const prd = ref(null);
    const totalComun = ref(null);
    const comun = ref(null);
    const data = ref([]);
    const series = ref([]);

    const rellenarGrafica = () => {
      shhnPorcentaje.value = null;
      shhnSeries.value = [];
      fycnPorcentaje.value = null;
      fycnSeries.value = [];
      ptPorcentaje.value = null;
      ptSeries.value = [];
      pvemPorcentaje.value = null;
      pvemSeries.value = [];
      mcPorcentaje.value = null;
      mcSeries.value = [];
      morenaPorcentaje.value = null;
      morenaSeries.value = [];
      nanPorcentaje.value = null;
      nanSeries.value = [];
      mlnPorcentaje.value = null;
      mlnSeries.value = [];
      fxmnPorcentaje.value = null;
      fxmnSeries.value = [];
      rspnPorcentaje.value = null;
      rspnSeries.value = [];
      priPorcentaje.value = null;
      priSeries.value = [];
      panPorcentaje.value = null;
      panSeries.value = [];
      prdPorcentaje.value = null;
      prdSeries.value = [];
      comunPorcentaje.value = null;
      comunSeries.value = [];
      totalShhn.value = null;
      shhn.value = null;
      totalFycn.value = null;
      fycn.value = null;
      totalPri.value = null;
      pri.value = null;
      totalPan.value = null;
      pan.value = null;
      totalPrd.value = null;
      prd.value = null;
      totalPt.value = null;
      pt.value = null;
      totalPvem.value = null;
      pvem.value = null;
      totalMc.value = null;
      mc.value = null;
      totalMorena.value = null;
      morena.value = null;
      totalNan.value = null;
      nan.value = null;
      totalMln.value = null;
      mln.value = null;
      totalFxmn.value = null;
      fxmn.value = null;
      totalRspn.value = null;
      rspn.value = null;
      totalComun.value = null;
      comun.value = null;
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalPan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PAN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        pan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PAN" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalPan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PAN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        pan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PAN" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalPan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PAN" && candidato.is_Coalicion == false
        );
        pan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PAN" &&
            candidato.avance_Curricular == 100
        );
      }

      panPorcentaje.value = parseInt(
        (pan.value.length * 100) / totalPan.value.length
      );
      if (pan.value.length > 0) {
        let mujeres = pan.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = pan.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = pan.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        panSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / pan.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / pan.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / pan.value.length),
          ]
        );
      }

      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalPri.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PRI" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        pri.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PRI" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalPri.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PRI" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        pri.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PRI" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalPri.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PRI" && candidato.is_Coalicion == false
        );
        pri.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PRI" &&
            candidato.avance_Curricular == 100
        );
      }

      priPorcentaje.value = parseInt(
        (pri.value.length * 100) / totalPri.value.length
      );
      if (pri.value.length > 0) {
        let mujeres = pri.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = pri.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = pri.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        priSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / pri.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / pri.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / pri.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalPrd.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PRD" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        prd.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PRD" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalPrd.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PRD" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        prd.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PRD" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalPrd.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PRD" && candidato.is_Coalicion == false
        );
        prd.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == false &&
            candidato.partido == "PRD" &&
            candidato.avance_Curricular == 100
        );
      }

      prdPorcentaje.value = parseInt(
        (prd.value.length * 100) / totalPrd.value.length
      );
      if (prd.value.length > 0) {
        let mujeres = prd.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = prd.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = prd.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        prdSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / prd.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / prd.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / prd.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalShhn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "SHHN" &&
            candidato.tipo_Candidato == "RP"
        );
        shhn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "SHHN" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalShhn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "SHHN" &&
            candidato.tipo_Candidato == "MR"
        );
        shhn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "SHHN" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalShhn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true && candidato.coalicion == "SHHN"
        );
        shhn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "SHHN" &&
            candidato.avance_Curricular == 100
        );
      }

      shhnPorcentaje.value = parseInt(
        (shhn.value.length * 100) / totalShhn.value.length
      );
      if (shhn.value.length > 0) {
        let mujeres = shhn.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = shhn.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = shhn.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        shhnSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / shhn.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / shhn.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / shhn.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalFycn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "FCN" &&
            candidato.tipo_Candidato == "RP"
        );
        fycn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "FCN" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalFycn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "FCN" &&
            candidato.tipo_Candidato == "MR"
        );
        fycn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "FCN" &&
            candidato.avance_Curricular == 100 &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalFycn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true && candidato.coalicion == "FCN"
        );

        fycn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.is_Coalicion == true &&
            candidato.coalicion == "FCN" &&
            candidato.avance_Curricular == 100
        );
      }

      fycnPorcentaje.value = parseInt(
        (fycn.value.length * 100) / totalFycn.value.length
      );
      if (fycn.value.length > 0) {
        let mujeres = fycn.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = fycn.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = fycn.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        fycnSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / fycn.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / fycn.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / fycn.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalPt.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PT" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        pt.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PT" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalPt.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PT" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        pt.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PT" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalPt.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PT" && candidato.is_Coalicion == false
        );
        pt.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PT" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false
        );
      }

      ptPorcentaje.value = parseInt(
        (pt.value.length * 100) / totalPt.value.length
      );
      if (pt.value.length > 0) {
        let mujeres = pt.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = pt.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = pt.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        ptSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / pt.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / pt.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / pt.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalPvem.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PVEM" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        pvem.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PVEM" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalPvem.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PVEM" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        pvem.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PVEM" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalPvem.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PVEM" && candidato.is_Coalicion == false
        );
        pvem.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "PVEM" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false
        );
      }

      pvemPorcentaje.value = parseInt(
        (pvem.value.length * 100) / totalPvem.value.length
      );
      if (pvem.value.length > 0) {
        let mujeres = pvem.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = pvem.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = pvem.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );

        pvemSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / pvem.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / pvem.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / pvem.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalMc.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MC" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        mc.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MC" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalMc.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MC" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        mc.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MC" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalMc.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MC" && candidato.is_Coalicion == false
        );
        mc.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MC" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false
        );
      }

      mcPorcentaje.value = parseInt(
        (mc.value.length * 100) / totalMc.value.length
      );
      if (mc.value.length > 0) {
        let mujeres = mc.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = mc.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = mc.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        mcSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / mc.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / mc.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / mc.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalMorena.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MORENA" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        morena.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MORENA" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalMorena.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MORENA" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        morena.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MORENA" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalMorena.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MORENA" && candidato.is_Coalicion == false
        );
        morena.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MORENA" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false
        );
      }

      morenaPorcentaje.value = parseInt(
        (morena.value.length * 100) / totalMorena.value.length
      );
      if (morena.value.length > 0) {
        let mujeres = morena.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = morena.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = morena.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        morenaSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / morena.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / morena.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / morena.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalNan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "NAN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP" &&
            candidato.is_Comun == false
        );
        nan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "NAN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP" &&
            candidato.is_Comun == false
        );
      } else if (cargoGrafica.value == "MR") {
        totalNan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "NAN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR" &&
            candidato.is_Comun == false
        );
        nan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "NAN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR" &&
            candidato.is_Comun == false
        );
      } else {
        totalNan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "NAN" &&
            candidato.is_Coalicion == false &&
            candidato.is_Comun == false
        );
        nan.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "NAN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.is_Comun == false
        );
      }

      nanPorcentaje.value = parseInt(
        (nan.value.length * 100) / totalNan.value.length
      );
      if (nan.value.length > 0) {
        let mujeres = nan.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = nan.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = nan.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        nanSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / nan.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / nan.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / nan.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalMln.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MLN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP" &&
            candidato.is_Comun == false
        );
        mln.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MLN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.is_Comun == false &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalMln.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MLN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR" &&
            candidato.is_Comun == false
        );
        mln.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MLN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.is_Comun == false &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalMln.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MLN" &&
            candidato.is_Coalicion == false &&
            candidato.is_Comun == false
        );
        mln.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "MLN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.is_Comun == false
        );
      }

      mlnPorcentaje.value = parseInt(
        (mln.value.length * 100) / totalMln.value.length
      );
      if (mln.value.length > 0) {
        let mujeres = mln.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = mln.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = mln.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );

        mlnSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / mln.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / mln.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / mln.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalFxmn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "FXMN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        fxmn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "FXMN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalFxmn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "FXMN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
        fxmn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "FXMN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalFxmn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "FXMN" && candidato.is_Coalicion == false
        );
        fxmn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "FXMN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false
        );
      }

      fxmnPorcentaje.value = parseInt(
        (fxmn.value.length * 100) / totalFxmn.value.length
      );
      if (fxmn.value.length > 0) {
        let mujeres = fxmn.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = fxmn.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = fxmn.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );
        fxmnSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / fxmn.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / fxmn.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / fxmn.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      if (cargoGrafica.value == "RP") {
        totalRspn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "RSPN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
        rspn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "RSPN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "RP"
        );
      } else if (cargoGrafica.value == "MR") {
        totalRspn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "RSPN" &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );

        rspn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "RSPN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false &&
            candidato.tipo_Candidato == "MR"
        );
      } else {
        totalRspn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "RSPN" && candidato.is_Coalicion == false
        );

        rspn.value = list_Graficas_Genero_Edad.value.filter(
          (candidato) =>
            candidato.partido == "RSPN" &&
            candidato.avance_Curricular == 100 &&
            candidato.is_Coalicion == false
        );
      }

      rspnPorcentaje.value = parseInt(
        (rspn.value.length * 100) / totalRspn.value.length
      );
      if (rspn.value.length > 0) {
        let mujeres = rspn.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = rspn.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = rspn.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );

        rspnSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / rspn.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / rspn.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / rspn.value.length),
          ]
        );
      }
      //-----------------------------------------------------
      totalComun.value = list_Graficas_Genero_Edad.value.filter(
        (candidato) =>
          candidato.comun == "NAN-MLN" && candidato.is_Comun == true
      );
      comun.value = list_Graficas_Genero_Edad.value.filter(
        (candidato) =>
          candidato.comun == "NAN-MLN" &&
          candidato.avance_Curricular == 100 &&
          candidato.is_Comun == true
      );
      comunPorcentaje.value = parseInt(
        (comun.value.length * 100) / totalComun.value.length
      );
      if (comun.value.length > 0) {
        let mujeres = comun.value.filter(
          (candidato) => candidato.sexo === "Mujer"
        );
        let hombres = comun.value.filter(
          (candidato) => candidato.sexo === "Hombre"
        );
        let noBinario = comun.value.filter(
          (candidato) => candidato.sexo === "No binario"
        );

        comunSeries.value.push(
          [
            `Mujer: ${mujeres.length}`,
            parseInt((mujeres.length * 100) / comun.value.length),
          ],
          [
            `Hombre: ${hombres.length}`,
            parseInt((hombres.length * 100) / comun.value.length),
          ],
          [
            `No binario: ${noBinario.length}`,
            parseInt((noBinario.length * 100) / comun.value.length),
          ]
        );
      }

      if (list_Graficas_Genero_Edad.value.length > 0) {
        data.value =
          cargoGrafica.value == "RP"
            ? [
                {
                  name: `PAN: ${pan.value.length}/${totalPan.value.length}`,
                  y: panPorcentaje.value,
                  drilldown: "PAN",
                },
                {
                  name: `PRI: ${pri.value.length}/${totalPri.value.length}`,
                  y: priPorcentaje.value,
                  drilldown: "PRI",
                },
                {
                  name: `PRD: ${prd.value.length}/${totalPrd.value.length}`,
                  y: prdPorcentaje.value,
                  drilldown: "PRD",
                },
                {
                  name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                  y: ptPorcentaje.value,
                  drilldown: "PT",
                },
                {
                  name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                  y: pvemPorcentaje.value,
                  drilldown: "PVEM",
                },
                {
                  name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                  y: mcPorcentaje.value,
                  drilldown: "MC",
                },
                {
                  name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                  y: morenaPorcentaje.value,
                  drilldown: "MORENA",
                },
                {
                  name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                  y: nanPorcentaje.value,
                  drilldown: "NAN",
                },
                {
                  name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                  y: mlnPorcentaje.value,
                  drilldown: "MLN",
                },
                {
                  name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                  y: fxmnPorcentaje.value,
                  drilldown: "FXMN",
                },
                {
                  name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                  y: rspnPorcentaje.value,
                  drilldown: "RSPN",
                },
              ]
            : cargoGrafica.value == "MR" &&
              list_Graficas_Genero_Edad.value[0].tipo_Eleccion_Id != 3
            ? [
                {
                  name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                  y: ptPorcentaje.value,
                  drilldown: "PT",
                },
                {
                  name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                  y: pvemPorcentaje.value,
                  drilldown: "PVEM",
                },
                {
                  name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                  y: mcPorcentaje.value,
                  drilldown: "MC",
                },
                {
                  name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                  y: morenaPorcentaje.value,
                  drilldown: "MORENA",
                },
                {
                  name: `NAN-MLN: ${comun.value.length}/${totalComun.value.length}`,
                  y: comunPorcentaje.value,
                  drilldown: "NAN-MLN",
                },
                {
                  name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                  y: nanPorcentaje.value,
                  drilldown: "NAN",
                },
                {
                  name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                  y: mlnPorcentaje.value,
                  drilldown: "MLN",
                },
                {
                  name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                  y: fxmnPorcentaje.value,
                  drilldown: "FXMN",
                },
                {
                  name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                  y: rspnPorcentaje.value,
                  drilldown: "RSPN",
                },
                {
                  name: `FYCN: ${fycn.value.length}/${totalFycn.value.length}`,
                  y: fycnPorcentaje.value,
                  drilldown: "FYCN",
                },
                {
                  name: `SHHN: ${shhn.value.length}/${totalShhn.value.length}`,
                  y: shhnPorcentaje.value,
                  drilldown: "SHHN",
                },
              ]
            : list_Graficas_Genero_Edad.value[0].tipo_Eleccion_Id == 3
            ? [
                {
                  name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                  y: ptPorcentaje.value,
                  drilldown: "PT",
                },
                {
                  name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                  y: pvemPorcentaje.value,
                  drilldown: "PVEM",
                },
                {
                  name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                  y: mcPorcentaje.value,
                  drilldown: "MC",
                },
                {
                  name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                  y: morenaPorcentaje.value,
                  drilldown: "MORENA",
                },
                {
                  name: `NAN-MLN: ${comun.value.length}/${totalComun.value.length}`,
                  y: comunPorcentaje.value,
                  drilldown: "NAN-MLN",
                },
                {
                  name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                  y: nanPorcentaje.value,
                  drilldown: "NAN",
                },
                {
                  name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                  y: mlnPorcentaje.value,
                  drilldown: "MLN",
                },
                {
                  name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                  y: fxmnPorcentaje.value,
                  drilldown: "FXMN",
                },
                {
                  name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                  y: rspnPorcentaje.value,
                  drilldown: "RSPN",
                },
                {
                  name: `FYCN: ${fycn.value.length}/${totalFycn.value.length}`,
                  y: fycnPorcentaje.value,
                  drilldown: "FYCN",
                },
                {
                  name: `SHHN: ${shhn.value.length}/${totalShhn.value.length}`,
                  y: shhnPorcentaje.value,
                  drilldown: "SHHN",
                },
              ]
            : [
                {
                  name: `PAN: ${pan.value.length}/${totalPan.value.length}`,
                  y: panPorcentaje.value,
                  drilldown: "PAN",
                },
                {
                  name: `PRI: ${pri.value.length}/${totalPri.value.length}`,
                  y: priPorcentaje.value,
                  drilldown: "PRI",
                },
                {
                  name: `PRD: ${prd.value.length}/${totalPrd.value.length}`,
                  y: prdPorcentaje.value,
                  drilldown: "PRD",
                },
                {
                  name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                  y: ptPorcentaje.value,
                  drilldown: "PT",
                },
                {
                  name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                  y: pvemPorcentaje.value,
                  drilldown: "PVEM",
                },
                {
                  name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                  y: mcPorcentaje.value,
                  drilldown: "MC",
                },
                {
                  name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                  y: morenaPorcentaje.value,
                  drilldown: "MORENA",
                },
                {
                  name: `NAN-MLN: ${comun.value.length}/${totalComun.value.length}`,
                  y: comunPorcentaje.value,
                  drilldown: "NAN-MLN",
                },
                {
                  name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                  y: nanPorcentaje.value,
                  drilldown: "NAN",
                },
                {
                  name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                  y: mlnPorcentaje.value,
                  drilldown: "MLN",
                },
                {
                  name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                  y: fxmnPorcentaje.value,
                  drilldown: "FXMN",
                },
                {
                  name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                  y: rspnPorcentaje.value,
                  drilldown: "RSPN",
                },
                {
                  name: `FYCN: ${fycn.value.length}/${totalFycn.value.length}`,
                  y: fycnPorcentaje.value,
                  drilldown: "FYCN",
                },
                {
                  name: `SHHN: ${shhn.value.length}/${totalShhn.value.length}`,
                  y: shhnPorcentaje.value,
                  drilldown: "SHHN",
                },
              ];
        series.value =
          cargoGrafica.value == "RP"
            ? [
                {
                  id: "PAN",
                  data: panSeries.value,
                },
                {
                  id: "PRI",
                  data: priSeries.value,
                },
                {
                  id: "PRD",
                  data: prdSeries.value,
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
              ]
            : cargoGrafica.value == "MR" &&
              list_Graficas_Genero_Edad.value[0].tipo_Eleccion_Id != 3
            ? [
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
                  id: "NAN-MLN",
                  data: comunSeries.value,
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
                {
                  id: "FYCN",
                  data: fycnSeries.value,
                },
                {
                  id: "SHHN",
                  data: shhnSeries.value,
                },
              ]
            : list_Graficas_Genero_Edad.value[0].tipo_Eleccion_Id == 3
            ? [
                {
                  name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                  y: ptPorcentaje.value,
                  drilldown: "PT",
                },
                {
                  name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                  y: pvemPorcentaje.value,
                  drilldown: "PVEM",
                },
                {
                  name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                  y: mcPorcentaje.value,
                  drilldown: "MC",
                },
                {
                  name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                  y: morenaPorcentaje.value,
                  drilldown: "MORENA",
                },
                {
                  name: `NAN-MLN: ${comun.value.length}/${totalComun.value.length}`,
                  y: comunPorcentaje.value,
                  drilldown: "NAN-MLN",
                },
                {
                  name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                  y: nanPorcentaje.value,
                  drilldown: "NAN",
                },
                {
                  name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                  y: mlnPorcentaje.value,
                  drilldown: "MLN",
                },
                {
                  name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                  y: fxmnPorcentaje.value,
                  drilldown: "FXMN",
                },
                {
                  name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                  y: rspnPorcentaje.value,
                  drilldown: "RSPN",
                },
                {
                  name: `FYCN: ${fycn.value.length}/${totalFycn.value.length}`,
                  y: fycnPorcentaje.value,
                  drilldown: "FYCN",
                },
                {
                  name: `SHHN: ${shhn.value.length}/${totalShhn.value.length}`,
                  y: shhnPorcentaje.value,
                  drilldown: "SHHN",
                },
              ]
            : [
                {
                  id: "PAN",
                  data: panSeries.value,
                },
                {
                  id: "PRI",
                  data: priSeries.value,
                },
                {
                  id: "PRD",
                  data: prdSeries.value,
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
                  id: "NAN-MLN",
                  data: comunSeries.value,
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
                {
                  id: "FYCN",
                  data: fycnSeries.value,
                },
                {
                  id: "SHHN",
                  data: shhnSeries.value,
                },
              ];
      }
    };

    watch(list_Graficas_Genero_Edad, (val) => {
      if (val != null) {
        actualizarGrafica();
      }
    });

    watch(cargoGrafica, (val) => {
      if (val != null) {
        actualizarGrafica();
      }
    });

    const actualizarGrafica = () => {
      rellenarGrafica();
      this.chartOptions.series[0].data =
        cargoGrafica.value == "RP"
          ? [
              {
                name: `PAN: ${pan.value.length}/${totalPan.value.length}`,
                y: panPorcentaje.value,
                drilldown: "PAN",
              },
              {
                name: `PRI: ${pri.value.length}/${totalPri.value.length}`,
                y: priPorcentaje.value,
                drilldown: "PRI",
              },
              {
                name: `PRD: ${prd.value.length}/${totalPrd.value.length}`,
                y: prdPorcentaje.value,
                drilldown: "PRD",
              },
              {
                name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                y: ptPorcentaje.value,
                drilldown: "PT",
              },
              {
                name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                y: pvemPorcentaje.value,
                drilldown: "PVEM",
              },
              {
                name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                y: mcPorcentaje.value,
                drilldown: "MC",
              },
              {
                name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                y: morenaPorcentaje.value,
                drilldown: "MORENA",
              },
              {
                name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                y: nanPorcentaje.value,
                drilldown: "NAN",
              },
              {
                name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                y: mlnPorcentaje.value,
                drilldown: "MLN",
              },
              {
                name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                y: fxmnPorcentaje.value,
                drilldown: "FXMN",
              },
              {
                name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                y: rspnPorcentaje.value,
                drilldown: "RSPN",
              },
            ]
          : cargoGrafica.value == "MR"
          ? [
              {
                name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                y: ptPorcentaje.value,
                drilldown: "PT",
              },
              {
                name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                y: pvemPorcentaje.value,
                drilldown: "PVEM",
              },
              {
                name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                y: mcPorcentaje.value,
                drilldown: "MC",
              },
              {
                name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                y: morenaPorcentaje.value,
                drilldown: "MORENA",
              },
              {
                name: `NAN-MLN: ${comun.value.length}/${totalComun.value.length}`,
                y: comunPorcentaje.value,
                drilldown: "NAN-MLN",
              },
              {
                name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                y: nanPorcentaje.value,
                drilldown: "NAN",
              },
              {
                name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                y: mlnPorcentaje.value,
                drilldown: "MLN",
              },
              {
                name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                y: fxmnPorcentaje.value,
                drilldown: "FXMN",
              },
              {
                name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                y: rspnPorcentaje.value,
                drilldown: "RSPN",
              },
              {
                name: `SHHN: ${shhn.value.length}/${totalShhn.value.length}`,
                y: shhnPorcentaje.value,
                drilldown: "SHHN",
              },
              {
                name: `FYCN: ${fycn.value.length}/${totalFycn.value.length}`,
                y: fycnPorcentaje.value,
                drilldown: "FYCN",
              },
            ]
          : [
              {
                name: `PAN: ${pan.value.length}/${totalPan.value.length}`,
                y: panPorcentaje.value,
                drilldown: "PAN",
              },
              {
                name: `PRI: ${pri.value.length}/${totalPri.value.length}`,
                y: priPorcentaje.value,
                drilldown: "PRI",
              },
              {
                name: `PRD: ${prd.value.length}/${totalPrd.value.length}`,
                y: prdPorcentaje.value,
                drilldown: "PRD",
              },
              {
                name: `PT: ${pt.value.length}/${totalPt.value.length}`,
                y: ptPorcentaje.value,
                drilldown: "PT",
              },
              {
                name: `PVEM: ${pvem.value.length}/${totalPvem.value.length}`,
                y: pvemPorcentaje.value,
                drilldown: "PVEM",
              },
              {
                name: `MC: ${mc.value.length}/${totalMc.value.length}`,
                y: mcPorcentaje.value,
                drilldown: "MC",
              },
              {
                name: `MORENA: ${morena.value.length}/${totalMorena.value.length}`,
                y: morenaPorcentaje.value,
                drilldown: "MORENA",
              },
              {
                name: `NAN-MLN: ${comun.value.length}/${totalComun.value.length}`,
                y: comunPorcentaje.value,
                drilldown: "NAN-MLN",
              },
              {
                name: `NAN: ${nan.value.length}/${totalNan.value.length}`,
                y: nanPorcentaje.value,
                drilldown: "NAN",
              },
              {
                name: `MLN: ${mln.value.length}/${totalMln.value.length}`,
                y: mlnPorcentaje.value,
                drilldown: "MLN",
              },
              {
                name: `FXMN: ${fxmn.value.length}/${totalFxmn.value.length}`,
                y: fxmnPorcentaje.value,
                drilldown: "FXMN",
              },
              {
                name: `RSPN: ${rspn.value.length}/${totalRspn.value.length}`,
                y: rspnPorcentaje.value,
                drilldown: "RSPN",
              },
              {
                name: `SHHN: ${shhn.value.length}/${totalShhn.value.length}`,
                y: shhnPorcentaje.value,
                drilldown: "SHHN",
              },
              {
                name: `FYCN: ${fycn.value.length}/${totalFycn.value.length}`,
                y: fycnPorcentaje.value,
                drilldown: "FYCN",
              },
            ];

      this.chartOptions.drilldown.series =
        cargoGrafica.value == "RP"
          ? [
              { id: "PAN", data: panSeries.value },
              { id: "PRI", data: priSeries.value },
              { id: "PRD", data: prdSeries.value },
              { id: "PT", data: ptSeries.value },
              { id: "PVEM", data: pvemSeries.value },
              { id: "MC", data: mcSeries.value },
              { id: "MORENA", data: morenaSeries.value },
              { id: "NAN", data: nanSeries.value },
              { id: "MLN", data: mlnSeries.value },
              { id: "FXMN", data: fxmnSeries.value },
              { id: "RSPN", data: rspnSeries.value },
            ]
          : cargoGrafica.value == "MR"
          ? [
              { id: "SHHN", data: shhnSeries.value },
              { id: "FYCN", data: fycnSeries.value },
              { id: "PT", data: ptSeries.value },
              { id: "PVEM", data: pvemSeries.value },
              { id: "MC", data: mcSeries.value },
              { id: "MORENA", data: morenaSeries.value },
              { id: "NAN-MLN", data: comunSeries.value },
              { id: "NAN", data: nanSeries.value },
              { id: "MLN", data: mlnSeries.value },
              { id: "FXMN", data: fxmnSeries.value },
              { id: "RSPN", data: rspnSeries.value },
            ]
          : [
              { id: "SHHN", data: shhnSeries.value },
              { id: "FYCN", data: fycnSeries.value },
              { id: "PAN", data: panSeries.value },
              { id: "PRI", data: priSeries.value },
              { id: "PRD", data: prdSeries.value },
              { id: "PT", data: ptSeries.value },
              { id: "PVEM", data: pvemSeries.value },
              { id: "MC", data: mcSeries.value },
              { id: "MORENA", data: morenaSeries.value },
              { id: "NAN-MLN", data: comunSeries.value },
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
          min: 0,
          max: 100,
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
            data: data.value,
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
          series: series.value,
        },
      },
    };
  },
};
</script>
