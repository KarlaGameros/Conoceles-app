<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el icon="bar_chart" label="Numeralia" />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <filtros v-show="isSmallScreen" class="q-mb-md" />
    <PresidenciaSindicatura />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import PresidenciaSindicatura from "../components/presidenciaSindicaturiaCharts.vue";
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
</script>
<style></style>
