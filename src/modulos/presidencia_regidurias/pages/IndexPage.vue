<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Numeralia" icon="library_books" />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <PresidenciaRegidurias v-if="filtro == false" />
    <cardsDiputaciones v-if="filtro == true" />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import PresidenciaRegidurias from "../components/presidenciaRegiduriasCharts.vue";
import cardsDiputaciones from "../../cards/components/cardsDiputaciones.vue";
import { onMounted } from "vue";
import { useCardsStore } from "src/stores/cards-store";

//-----------------------------------------------------------

const $q = useQuasar();
const filtro = false;
const cardsStore = useCardsStore();

onMounted(() => {
  cardsStore.actualizarMenu(true);
});
</script>

<style></style>
