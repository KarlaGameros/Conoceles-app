<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el
              icon="recent_actors"
              :to="{ name: 'cardsPresidenciaSindicatura' }"
            />
            <q-breadcrumbs-el
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <filtros v-show="isSmallScreen" class="q-mb-md" />
    <DetalleCandidatosRegidurias />
  </q-page>
</template>

<script setup>
import DetalleCandidatosRegidurias from "../components/detalleCandidatosRegidurias.vue";
import filtros from "../../../components/filtrosComp.vue";
import { useCardsStore } from "src/stores/cards-store";
import { onMounted, ref, watch } from "vue";

const cardsStore = useCardsStore();
const props = defineProps({
  id: { type: Number, required: true },
});
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
//---------------------------------------------------------------------------------

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
onMounted(async () => {
  cardsStore.actualizarMenu(true);
  await cardsStore.loadCard(props.id);
});
</script>

<style></style>
