<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el
              icon="bar_chart"
              to="/diputaciones"
              @click="onCharts(true)"
            />
            <q-breadcrumbs-el
              v-if="isCandidatosPage == true"
              icon="recent_actors"
              to="/diputaciones"
              @click="onCards(true)"
            />
            <q-breadcrumbs-el
              v-if="isDetallePage == true"
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
          <h5>Diputados</h5>
        </div>
      </div>
    </div>
    <DiputacionesComp v-if="isChartPage == true" />
    <CardsDiputaciones
      v-if="isCandidatosPage == true && isDetallePage == false"
    />
    <DetalleCantidato v-if="isDetallePage == true" />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import DiputacionesComp from "../components/diputacionesComp.vue";
import CardsDiputaciones from "../components/cardsDiputaciones.vue";
import { onMounted } from "vue";
import { useCardsStore } from "src/stores/cards-store";
import { storeToRefs } from "pinia";
import DetalleCantidato from "../components/detalleCantidato.vue";

//-----------------------------------------------------------

const $q = useQuasar();
const cardsStore = useCardsStore();
const { isCandidatosPage, isDetallePage, isChartPage, isHomePage } =
  storeToRefs(cardsStore);

onMounted(() => {
  cardsStore.actualizarMenu(true);
});

const onCards = () => {
  cardsStore.actualizarCandidatos(true);
  cardsStore.actualizarDetalle(false);
};

const onCharts = () => {
  cardsStore.actualizarChart(true);
  cardsStore.actualizarCandidatos(false);
  cardsStore.actualizarDetalle(false);
};
</script>

<style></style>
