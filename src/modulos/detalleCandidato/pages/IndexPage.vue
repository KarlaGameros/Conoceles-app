<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Diputaciones" icon="library_books" />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <detalleCandidato />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import detalleCandidato from "../components/detalleCantidato.vue";
//-----------------------------------------------------------

const $q = useQuasar();
</script>

<style></style>
