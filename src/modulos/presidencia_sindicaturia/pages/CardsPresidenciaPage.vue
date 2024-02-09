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
    <filtros v-if="$q.screen.xs" class="q-mb-md" />
    <CardsPresidenciaSindicauria :eleccion_Id="props.eleccion_Id" />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, watch, onBeforeMount, defineProps } from "vue";
import { useCardsStore } from "src/stores/cards-store";
import CardsPresidenciaSindicauria from "../components/cardsPresidenciaSindicaturia.vue";
import filtros from "../../../components/filtrosComp.vue";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const cardsStore = useCardsStore();
const props = defineProps({
  eleccion_Id: { type: String, required: true },
});

//---------------------------------------------------------------------------------
</script>

<style></style>
