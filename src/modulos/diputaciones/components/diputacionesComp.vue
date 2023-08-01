<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 500px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="mails" icon="leaderboard" label="Edad" />
          <q-tab name="alarms" icon="school" label="Grado academico" />
          <q-tab name="movies" icon="analytics" label="Sexo" />
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
  </div>
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
