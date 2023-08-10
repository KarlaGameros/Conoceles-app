<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <div class="text-h4 text-bold text-purple-ieen-1">Te damos la</div>
      <div class="text-h2 text-bold text-purple-ieen-1">BIENVENIDA</div>
      <div class="text-subtitle1">
        Al sistema de consulta de información proporcionada por las y los
        candidatos
      </div>
    </div>
    <img
      alt="PREP logo"
      src="../assets/opcion2.png"
      style="width: 800px; height: 700px"
    />
  </q-page>
</template>

<script setup>
import { useCardsStore } from "src/stores/cards-store";
import { usePresidenciaSindicaturiaStore } from "src/stores/presidencia_sindicaturia_store";
import { useRegiduriasStore } from "src/stores/regidurias_store";
import { onMounted } from "vue";

const cardsStore = useCardsStore();
const presidenciaStore = usePresidenciaSindicaturiaStore();
const regiduriasStore = useRegiduriasStore();

onMounted(() => {
  cardsStore.actualizarMenu(false);
  presidenciaStore.actualizarMenu(false);
  regiduriasStore.actualizarMenu(false);
});
</script>
