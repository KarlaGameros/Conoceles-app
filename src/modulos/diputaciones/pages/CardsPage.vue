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
    <CardsDiputaciones />
  </q-page>
</template>

<script setup>
import CardsDiputaciones from "../components/cardsDiputaciones.vue";
import filtros from "../../../components/filtrosComp.vue";

//---------------------------------------------------------------------------------
</script>
