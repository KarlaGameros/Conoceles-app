<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el icon="bar_chart" @click="onCharts(true)" />
            <q-breadcrumbs-el
              v-if="isCandidatosPage"
              icon="recent_actors"
              @click="onCards(true)"
            />
            <q-breadcrumbs-el
              v-if="isDetallePage"
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <filtros v-show="isSmallScreen" />
    <br />
    <div v-show="isChartPageRE">
      <ChartsRegidurias />
    </div>
    <div
      v-show="
        isCandidatosPage == true &&
        isDetallePage == false &&
        isChartPageRE == false
      "
    >
      <CardsRegidurias />
    </div>

    <div v-show="isDetallePage">
      <DetalleCandidatosRegidurias />
    </div>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useRegiduriasStore } from "src/stores/regidurias_store";
import { onMounted, ref, watch } from "vue";
import CardsRegidurias from "../components/cardsRegidurias.vue";
import ChartsRegidurias from "../components/chartsRegidurias.vue";
import DetalleCandidatosRegidurias from "../components/detalleCandidatosRegidurias.vue";
import { useCardsStore } from "src/stores/cards-store";
import filtros from "../../../components/filtrosComp.vue";

//---------------------------------------------------------------------------------

const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
const $q = useQuasar();
const regiduriasStore = useRegiduriasStore();
const { isCandidatosPage, isDetallePage, isChartPageRE, isHomePage } =
  storeToRefs(regiduriasStore);
const cardsStore = useCardsStore();

//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarMenu(true);
});

//---------------------------------------------------------------------------------

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
//---------------------------------------------------------------------------------

const onCards = () => {
  regiduriasStore.actualizarCandidatos(true);
  regiduriasStore.actualizarDetalle(false);
};

const onCharts = () => {
  regiduriasStore.actualizarChart(true);
  regiduriasStore.actualizarCandidatos(false);
  regiduriasStore.actualizarDetalle(false);
};
</script>

<style></style>
