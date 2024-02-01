<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el icon="recent_actors" :to="{ name: 'PYScards' }" />
            <q-breadcrumbs-el
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <filtros v-if="$q.screen.xs" class="q-mb-md" />
    <DetalleCantidato :id="props.id" />
  </q-page>
</template>

<script setup>
import { ref, watch, defineProps, onMounted } from "vue";
import { useCardsStore } from "src/stores/cards-store";
import DetalleCantidato from "../components/detalleCantidato.vue";
import filtros from "../../../components/filtrosComp.vue";

//---------------------------------------------------------------------------------

const cardsStore = useCardsStore();
const props = defineProps({
  id: { type: String, required: true },
  puesto: { type: String, required: true },
});
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);

//---------------------------------------------------------------------------------

onMounted(async () => {
  cardsStore.actualizarMenu(true);
  await cardsStore.loadCandidatoById(props.id);
  await cardsStore.loadFormacionAcademicaById(props.id, props.puesto);
  await cardsStore.loadDatosGeneralesById(props.id, props.puesto);
  await cardsStore.loadPropuestasByCandidato(props.id, props.puesto);
});

//---------------------------------------------------------------------------------

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
</script>

<style></style>
