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
    <ChartsRegidurias />
  </q-page>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useCardsStore } from "src/stores/cards-store";
import filtros from "../../../components/filtrosComp.vue";
import ChartsRegidurias from "../components/chartsRegidurias.vue";
//---------------------------------------------------------------------------------

const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
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
