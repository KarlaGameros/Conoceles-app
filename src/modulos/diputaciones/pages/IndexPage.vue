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
    <filtros v-show="$q.screen.xs" class="q-mb-md" />
    <DiputacionesComp />
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useCardsStore } from "src/stores/cards-store";
import DiputacionesComp from "../components/diputacionesComp.vue";
import filtros from "../../../components/filtrosComp.vue";

//---------------------------------------------------------------------------------

const cardsStore = useCardsStore();

//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarMenu(true);
  cargarData();
});

const cargarData = async () => {
  await cardsStore.loadCandidatos();
};
//---------------------------------------------------------------------------------
</script>

<style></style>
