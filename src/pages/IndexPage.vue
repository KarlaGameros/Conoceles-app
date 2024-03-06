<template>
  <q-page class="row flex flex-center selectable-text-area">
    <div class="col-2"></div>
    <div class="text-center col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="text-h4 text-bold text-purple-ieen-1" id="speak">
        Candidatas y Candidatos,
      </div>
      <div class="text-h2 text-bold text-purple-ieen-1" id="speak">Conóceles</div>
      <div class="text-subtitle2 center text-justify q-pa-md" id="speak">
        Consulta la trayectoria política y profesional, las propuestas de
        campaña y la autoidentificación a determinados grupos en situación de
        discriminación de las y los candidatos que participan en el Proceso
        Local Ordinario 2024 en Nayarit.
      </div>
    </div>
    <div class="imgHome col-lg-6 col-md-5 col-sm-12 col-xs-12">
      <img alt="PREP logo" src="../assets/ConocelesInicio.png" :style="$q.screen.xs
        ? 'width: 400px; height: 350px'
        : 'width: 650px; height: 550px'
        " />
    </div>

    <div class="absolute-bottom-right">
      <div class="text-subtitle1 q-pr-md text-purple-ieen">
        <!-- <strong>Eres el visitante número:</strong> 100 -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useCardsStore } from "src/stores/cards-store";
import { onMounted, ref, watch } from "vue";

//---------------------------------------------------------------------------------

const cardsStore = useCardsStore();

//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarMenu(false);
});

//---------------------------------------------------------------------------------
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