<template>
  <q-page class="flex flex-center">
    <div class="text-center col-lg-6 col-md-5 col-sm-12 col-xs-12">
      <div class="text-h4 text-bold text-purple-ieen-1">Te damos la</div>
      <div class="text-h2 text-bold text-purple-ieen-1">BIENVENIDA</div>
      <div class="text-subtitle1">
        Al sistema de consulta de información proporcionada por las y los
        candidatos
      </div>
    </div>
    <div class="imgHome col-lg-6 col-md-5 col-sm-12 col-xs-12">
      <img
        alt="PREP logo"
        src="../assets/opcion2.png"
        :style="
          isSmallScreen
            ? 'width: 400px; height: 350px'
            : 'width: 800px; height: 700px'
        "
      />
    </div>

    <div class="absolute-bottom-right">
      <div class="text-subtitle1 q-pr-md text-purple-ieen">
        <strong>Eres el visitante número:</strong> 100
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useCardsStore } from "src/stores/cards-store";
import { usePresidenciaSindicaturiaStore } from "src/stores/presidencia_sindicaturia_store";
import { useRegiduriasStore } from "src/stores/regidurias_store";
import { onMounted, ref, watch } from "vue";

//---------------------------------------------------------------------------------

const cardsStore = useCardsStore();
const presidenciaStore = usePresidenciaSindicaturiaStore();
const regiduriasStore = useRegiduriasStore();
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);

//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarMenu(false);
  presidenciaStore.actualizarMenu(false);
  regiduriasStore.actualizarMenu(false);
  if (screen.width < 576) {
    console.log("pequeña");
  } else if (screen.width < 768) {
    console.log("Mediana");
  } else {
    console.log("Grande");
  }
});

//---------------------------------------------------------------------------------

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
</script>
<style scoped>
@media screen and (max-width: 780px) {
  .imgHome {
    height: 300px;
    min-width: 310px;
    max-width: 800px;
  }
}
</style>
