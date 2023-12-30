<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="search" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      Consulte la información proporcionada de manera obligatoria por las
      candidaturas que participan en la contienda electoral local 2024. La
      información es responsabilidad de los partidos políticos. El Instituto
      únicamente apoya para su difusión.
    </template>
  </banner>
  <br />
  <!---------------------------CHARTS--------------------------->
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="text-h6 q-mb-md">Rango de edades</div>
        <chartRangoEdad />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="text-h6 q-mb-md">Sexo</div>
        <chartSexo class="flex flex-center" />
      </div>
    </div>
  </div>
  <br />
  <banner v-if="!isSmallScreen">
    <template v-slot:icono>
      <q-icon name="manage_search" color="purple-ieen" />
    </template>
    <template v-slot:contenido> Consulta más gráficas a continuación </template>
  </banner>
  <br />
  <q-list v-if="isSmallScreen" dark padding bordered class="rounded-borders">
    <q-expansion-item
      icon="manage_search"
      class="bg-grey-3 text-justify"
      style="border-radius: 20px"
      label="Consulta más gráficas a continuación "
      header-class="text-purple"
      expand-icon-class="text-purple"
      v-model="open_tab"
    >
      <q-tabs
        v-model="tab"
        vertical
        class="text-purple"
        active-bg-color="purple-3"
        active-color="white"
      >
        <q-tab
          name="grado_academico"
          label="Grado académico"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="nivel_ingresos"
          label="Nivel de ingresos"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="cand_indigenas"
          label="Candidaturas indígenas"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="cand_discapacidad"
          label="Candidaturas con discapacidad"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="cand_afromexicanas"
          label="Candidaturas afromexicanas"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="cand_div_sex"
          label="Candidaturas de la diversidad sexual"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="cand_mig"
          label="Candidaturas migrantes"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="cand_jov"
          label="Candidaturas de personas jóvenes"
          @click="open_tab = !open_tab"
        />
        <q-tab
          name="cand_mayores"
          label="Candidaturas de personas mayores"
          @click="open_tab = !open_tab"
        />
      </q-tabs>
    </q-expansion-item>
  </q-list>
  <q-splitter style="height: 500px">
    <template v-if="!isSmallScreen" v-slot:before>
      <q-tabs
        v-model="tab"
        vertical
        class="text-purple"
        active-bg-color="purple-3"
        active-color="white"
      >
        <q-tab name="grado_academico" label="Grado académico" />
        <q-tab name="nivel_ingresos" label="Nivel de ingresos" />
        <q-tab name="cand_indigenas" label="Candidaturas indígenas" />
        <q-tab name="cand_discapacidad" label="Candidaturas con discapacidad" />
        <q-tab name="cand_afromexicanas" label="Candidaturas afromexicanas" />
        <q-tab
          name="cand_div_sex"
          label="Candidaturas de la diversidad sexual"
        />
        <q-tab name="cand_mig" label="Candidaturas migrantes" />
        <q-tab name="cand_jov" label="Candidaturas de personas jóvenes" />
        <q-tab name="cand_mayores" label="Candidaturas de personas mayores" />
      </q-tabs>
    </template>
    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel
          name="grado_academico"
          class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
        >
          <div class="text-h6 q-mb-md">Grado académico</div>
          <chartGradoAcademico class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="nivel_ingresos">
          <div class="text-h6 q-mb-md">Nivel de ingresos</div>
          <chartNivelIngresos class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="cand_indigenas">
          <div class="text-h6 q-mb-md">Candidaturas Indígenas</div>
          <chartCandIndigenas class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="cand_discapacidad">
          <div class="text-h6 q-mb-md">Candidaturas con discapacidad</div>
          <chartCandDiscapacidad class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="cand_afromexicanas">
          <div class="text-h6 q-mb-md">Candidaturas Afromexicanas</div>
          <chartCandAfromexicanas class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="cand_div_sex">
          <div class="text-h6 q-mb-md">
            Candidaturas de la diversidad sexual
          </div>
          <chartCandDivSexual class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="cand_mig">
          <div class="text-h6 q-mb-md">Candidaturas migrantes</div>
          <chartCandMigrantes class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="cand_jov">
          <div class="text-h6 q-mb-md">Candidaturas de personas jóvenes</div>
          <chartCandJov class="flex flex-center" />
        </q-tab-panel>

        <q-tab-panel name="cand_mayores">
          <div class="text-h6 q-mb-md">Candidaturas de personas mayores</div>
          <chartCandMayores class="flex flex-center" />
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>

<script setup>
import { useCardsStore } from "src/stores/cards-store";
import { onMounted, ref, watch } from "vue";
import chartRangoEdad from "../../../charts/chartRangoEdad.vue";
import chartGradoAcademico from "../../../charts/chartGradoAcademico.vue";
import chartSexo from "../../../charts/chartSexo.vue";
import chartNivelIngresos from "../../../charts/chartNivelIngresos.vue";
import chartCandIndigenas from "../../../charts/chartCandidaturaIndigenas.vue";
import chartCandDiscapacidad from "../../../charts/chartCandDiscapacidad.vue";
import chartCandAfromexicanas from "../../../charts/chartCandAfromexicacas.vue";
import chartCandDivSexual from "../../../charts/chartCandDivSexual.vue";
import chartCandMigrantes from "../../../charts/chartMigrantes.vue";
import chartCandJov from "../../../charts/chartCandJovenes.vue";
import chartCandMayores from "../../../charts/chartCandMayores.vue";
import banner from "../../../components/bannerComp.vue";

//---------------------------------------------------------------------------------

const tab = ref("grado_academico");
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
const open_tab = ref(false);
const useCards = useCardsStore();

//---------------------------------------------------------------------------------

onMounted(() => {
  useCards.actualizarButtonColor(false);
});

//---------------------------------------------------------------------------------

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
</script>

<style scoped>
.chart {
  height: 300px;
  min-width: 310px;
  max-width: 800px;
}
</style>
