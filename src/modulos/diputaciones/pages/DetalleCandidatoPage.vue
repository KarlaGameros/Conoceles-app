<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el
              icon="recent_actors"
              :to="{ name: 'diputacionesCards' }"
            />
            <q-breadcrumbs-el
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <filtros v-show="$q.screen.xs" class="q-mb-md" />
    <DetalleCantidato />
  </q-page>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { useCardsStore } from "src/stores/cards-store";
import DetalleCantidato from "../components/detalleCantidato.vue";
import filtros from "../../../components/filtrosComp.vue";

//---------------------------------------------------------------------------------

const cardsStore = useCardsStore();
const props = defineProps({
  id: { type: String, required: true },
});

//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarMenu(true);
  cardsStore.loadCandidatoById(props.id);
});

//---------------------------------------------------------------------------------
</script>

<style></style>
