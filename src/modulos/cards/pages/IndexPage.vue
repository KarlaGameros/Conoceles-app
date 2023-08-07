<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el icon="bar_chart" to="/diputaciones" />
            <q-breadcrumbs-el
              label="Candidatas y candidatos"
              icon="library_books"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <cardsDiputaciones />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import cardsDiputaciones from "../components/cardsDiputaciones.vue";
//-----------------------------------------------------------

const $q = useQuasar();
</script>

<style></style>
