<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el
              icon="recent_actors"
              label="Candidatas y candidatos"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <filtros v-show="isSmallScreen" class="q-mb-md" />
    <CardsRegidurias />
  </q-page>
</template>

<script setup>
import { ref, watch, onBeforeMount } from "vue";
import { useCardsStore } from "src/stores/cards-store";
import CardsRegidurias from "../components/cardsRegidurias.vue";
import filtros from "../../../components/filtrosComp.vue";
import { useQuasar } from "quasar";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
const cardsStore = useCardsStore();

//---------------------------------------------------------------------------------

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
</script>

<style></style>
