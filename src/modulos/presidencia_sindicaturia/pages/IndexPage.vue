<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el icon="bar_chart" to="/diputaciones" />
            <q-breadcrumbs-el
              v-if="isCandidatosPage == true"
              icon="recent_actors"
              to="/cardsDiputaciones"
            />
            <q-breadcrumbs-el
              v-if="isDetallePage == true"
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
          <h5>Presidencia y Sindicaturia</h5>
        </div>
      </div>
    </div>
    <PresidenciaSindicatura v-if="isCandidatosPage == false" />
    <CardsPresidenciaSindicauria
      v-if="isCandidatosPage == true && isDetallePage == false"
    />

    <DetalleCantidato v-if="isDetallePage == true" />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import PresidenciaSindicatura from "../components/presidenciaSindicaturiaCharts.vue";
import CardsPresidenciaSindicauria from "../components/cardsPresidenciaSindicaturia.vue";
import DetalleCantidato from "../components/detalleCantidato.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { usePresidenciaSindicaturiaStore } from "src/stores/presidencia_sindicaturia_store";

//-----------------------------------------------------------

const $q = useQuasar();
const filtro = false;
const presidenciaSindicaturiaStore = usePresidenciaSindicaturiaStore();
const { isCandidatosPage, isDetallePage } = storeToRefs(
  presidenciaSindicaturiaStore
);

onMounted(() => {
  presidenciaSindicaturiaStore.actualizarMenu(true);
});
</script>
<style></style>
