<template>
  <div style="border-radius: 20px">
    <q-banner
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      style="border-radius: 20px"
    >
      <template v-slot:avatar>
        <q-icon name="search" color="purple-ieen" />
      </template>
      Consulte la información proporcionada de manera obligatoria por las
      candidaturas que participan en la contienda electoral local 2023. La
      información es responsabilidad de los partidos políticos. El Instituto
      únicamente apoya para su difusión.
    </q-banner>
  </div>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Rango de edades</div>
        <chartRangoEdad />
      </div>
      <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
        <div class="text-h6 q-mb-md">Sexo</div>
        <chartSexo class="flex flex-center" />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 shadow-7" style="border-radius: 20px">
      <q-banner
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        style="border-radius: 20px"
      >
        <template v-slot:avatar>
          <q-icon name="expand_more" color="purple-ieen" />
        </template>
        Seguir viendo estadísticas de las personas candidatas
      </q-banner>
    </div>
  </div>
  <br />
  <div>
    <q-splitter style="height: 500px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="grado_academico" label="Grado academico" />
          <q-tab name="nivel_ingresos" label="Nivel de ingresos" />
          <q-tab name="cand_indigenas" label="Candidaturas indígenas" />
          <q-tab
            name="cand_discapacidad"
            label="Candidaturas de discapacidad"
          />
          <q-tab name="cand_afromexicanas" label="Candidaturas afromexicanas" />
          <q-tab name="movies" label="Candidaturas de la diversidad sexual" />
          <q-tab name="movies" label="Candidaturas migrantes" />
          <q-tab name="movies" label="Candidaturas de personas jovenes" />
          <q-tab name="movies" label="Candidaturas de personas mayores" />
        </q-tabs>
      </template>
      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel
            name="grado_academico"
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
          >
            <div class="text-h4 q-mb-md">Grado academico</div>
            <chartGradoAcademico class="flex flex-center" />
          </q-tab-panel>

          <q-tab-panel name="nivel_ingresos">
            <div class="text-h4 q-mb-md">Nivel de ingresos</div>
            <chartNivelIngresos class="flex flex-center" />
          </q-tab-panel>

          <q-tab-panel name="cand_indigenas">
            <div class="text-h4 q-mb-md">Candidaturas Indigenas</div>
            <chartCandIndigenas class="flex flex-center" />
          </q-tab-panel>

          <q-tab-panel name="cand_discapacidad">
            <div class="text-h4 q-mb-md">Candidaturas con discapacidad</div>
            <chartCandDiscapacidad class="flex flex-center" />
          </q-tab-panel>

          <q-tab-panel name="cand_afromexicanas">
            <div class="text-h4 q-mb-md">Candidaturas Afromexicanas</div>
            <chartCandAfromexicanas class="flex flex-center" />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script setup>
import { ref } from "vue";
import chartRangoEdad from "../../../charts/chartRangoEdad.vue";
import chartGradoAcademico from "../../../charts/chartGradoAcademico.vue";
import chartSexo from "../../../charts/chartSexo.vue";
import chartNivelIngresos from "../../../charts/chartNivelIngresos.vue";
import chartCandIndigenas from "../../../charts/chartCandidaturaIndigenas.vue";
import chartCandDiscapacidad from "../../../charts/chartCandDiscapacidad.vue";
import chartCandAfromexicanas from "../../../charts/chartCandAfromexicacas.vue";

//---------------------------------------------------------------------------------
const tab = ref("grado_academico");
</script>

<style></style>
