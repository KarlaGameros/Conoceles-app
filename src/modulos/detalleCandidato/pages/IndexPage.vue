<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el icon="bar_chart" to="/diputaciones" />
            <q-breadcrumbs-el icon="recent_actors" to="/cardsDiputaciones" />
            <q-breadcrumbs-el
              label="Detalle del candidato o candidata"
              icon="library_books"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
    <detalleCandidato />
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import detalleCandidato from "../../diputaciones/components/detalleCantidato.vue";
//-----------------------------------------------------------

const $q = useQuasar();
</script>

<style></style>
