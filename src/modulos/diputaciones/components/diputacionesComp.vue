<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Rango de edades</div>
        <chartRangoEdad />
      </div>
      <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Grado academico</div>
        <chartGradoAcademico class="flex flex-center" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Nivel de ingresos</div>
        <chartSexo />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Candidaturas indígenas</div>
        <chartSexo />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Candidaturas con discapacidad</div>
        <chartSexo />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Candidaturas afromexicanas</div>
        <chartGradoAcademico class="flex flex-center" />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Candidaturas de la diversidad sexual</div>
        <chartSexo />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Candidaturas migrantes</div>
        <chartGradoAcademico class="flex flex-center" />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Candidaturas de personas jovenes</div>
        <chartGradoAcademico class="flex flex-center" />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Candidaturas de personas mayores</div>
        <chartGradoAcademico class="flex flex-center" />
      </div>
    </div>
  </div>
  <!-- <div>
    <q-splitter v-model="splitterModel" style="height: 500px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="mails" label="Edad" />
          <q-tab name="alarms" label="Grado academico" />
          <q-tab name="movies" label="Sexo" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="mails">
            <div class="text-h4 q-mb-md">Rango de edades</div>
            <chartRangoEdad />
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Grado academico</div>
            <chartGradoAcademico class="flex flex-center" />
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">Movies</div>
            <chartSexo />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div> -->
</template>

<script setup>
import chartRangoEdad from "../../../charts/chartRangoEdad.vue";
import chartGradoAcademico from "../../../charts/chartGradoAcademico.vue";
import chartSexo from "../../../charts/chartSexo.vue";

import { ref } from "vue";

const tab = ref("mails");
const splitterModel = ref(20);
</script>

<style></style>
