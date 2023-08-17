<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el icon="bar_chart" @click="onCharts(true)" />
            <q-breadcrumbs-el
              v-if="isCandidatosPage == true"
              icon="recent_actors"
              @click="onCards(true)"
            />
            <q-breadcrumbs-el
              v-if="isDetallePage == true"
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <filtros v-if="isSmallScreen" />
    <br />
    <PresidenciaSindicatura v-if="isChartPagePS == true" />
    <CardsPresidenciaSindicauria
      v-if="
        isCandidatosPage == true &&
        isDetallePage == false &&
        isChartPagePS == false
      "
    />

    <DetalleCantidato v-if="isDetallePage == true" />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import PresidenciaSindicatura from "../components/presidenciaSindicaturiaCharts.vue";
import CardsPresidenciaSindicauria from "../components/cardsPresidenciaSindicaturia.vue";
import DetalleCantidato from "../components/detalleCantidato.vue";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { usePresidenciaSindicaturiaStore } from "src/stores/presidencia_sindicaturia_store";
import { useCardsStore } from "src/stores/cards-store";
import filtros from "../../../components/filtrosComp.vue";
//---------------------------------------------------------------------------------
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
const $q = useQuasar();
const presidenciaSindicaturiaStore = usePresidenciaSindicaturiaStore();
const { isCandidatosPage, isDetallePage, isChartPagePS } = storeToRefs(
  presidenciaSindicaturiaStore
);
const cardsStore = useCardsStore();
//---------------------------------------------------------------------------------

onMounted(() => {
  presidenciaSindicaturiaStore.actualizarMenu(true);
  cardsStore.actualizarMenu(true);
});

//---------------------------------------------------------------------------------

const onCards = () => {
  presidenciaSindicaturiaStore.actualizarCandidatos(true);
  presidenciaSindicaturiaStore.actualizarDetalle(false);
};

const onCharts = () => {
  presidenciaSindicaturiaStore.actualizarChart(true);
  presidenciaSindicaturiaStore.actualizarCandidatos(false);
  presidenciaSindicaturiaStore.actualizarDetalle(false);
};
watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
</script>
<style></style>
