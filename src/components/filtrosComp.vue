<template>
  <div v-if="isSmallScreen" class="bg-grey-2" style="border-radius: 20px">
    <div class="text-h6 q-pl-md text-bold" style="color: grey">CONSULTA:</div>
    <div class="subtitule-2 q-pl-md" style="color: grey">
      Selecciona el reporte que deseas consultar:
    </div>
    <div class="text-center q-pb-md">
      <q-btn
        rounded
        @click="activaNumeralia"
        :to="{
          name:
            selectedTab == 'diputaciones'
              ? 'diputaciones'
              : selectedTab == 'presidencia'
              ? 'presidenciaSindicatura'
              : 'regidurias',
        }"
        label="Numeralia"
        :class="buttons == false ? 'bg-pink-ieen' : 'bg-pink-ieen-3'"
      />
      <q-btn
        rounded
        :to="{
          name:
            selectedTab == 'diputaciones'
              ? 'diputacionesCards'
              : selectedTab == 'presidencia'
              ? 'cardsPresidenciaSindicatura'
              : 'cardsRegidurias',
        }"
        label="Candidatas y candidatos"
        :class="buttons ? 'bg-pink-ieen' : 'bg-pink-ieen-3'"
        @click="activaCandidatos"
      />
    </div>

    <!--------------------FILTROS PARA SMALLSCREEN----------------------------->
    <q-list v-if="!isDetallePage" dark bordered class="rounded-borders">
      <q-expansion-item
        icon="manage_search"
        expand-icon-class="text-purple"
        label="Seleccionar filtros de consulta"
        header-class="text-purple"
      >
        <q-card class="bg-grey-5">
          <q-card-section>
            <q-item
              v-if="selectedTab === 'diputaciones'"
              :content-inset-level="2"
              :header-inset-level="2"
            >
              <q-item-section>
                <q-item-label class="label-title text-bold"
                  >Distrito</q-item-label
                >
                <q-select
                  color="purple"
                  rounded
                  outlined
                  bg-color="grey-3"
                  v-model="distritos_Id"
                  :options="list_Distritos"
                />
              </q-item-section>
            </q-item>

            <q-item
              v-if="
                selectedTab === 'presidencia' || selectedTab === 'regidurias'
              "
              :content-inset-level="2"
              :header-inset-level="2"
            >
              <q-item-section>
                <q-item-label class="label-title text-bold"
                  >Municipio</q-item-label
                >
                <q-select
                  color="purple"
                  outlined
                  rounded
                  bg-color="grey-3"
                  v-model="municipio_Id"
                  :options="list_Municipios"
                />
              </q-item-section>
            </q-item>

            <q-item
              v-if="selectedTab === 'regidurias'"
              :content-inset-level="2"
              :header-inset-level="2"
            >
              <q-item-section>
                <q-item-label class="label-title text-bold"
                  >Demarcación</q-item-label
                >
                <q-select
                  color="purple"
                  outlined
                  bg-color="grey-3"
                  rounded
                  v-model="demarcacion_Id"
                  :options="list_Demarcaciones"
                />
              </q-item-section>
            </q-item>

            <q-item :content-inset-level="2" :header-inset-level="2">
              <q-item-section>
                <q-item-label class="label-title text-bold"
                  >Actor político</q-item-label
                >
                <q-select
                  color="purple"
                  rounded
                  outlined
                  bg-color="grey-3"
                  v-model="actor_politico_Id"
                  :options="list_Partidos_Politicos"
                />
              </q-item-section>
            </q-item>

            <q-item :content-inset-level="2" :header-inset-level="2">
              <q-item-section>
                <q-item-label class="label-title text-bold"
                  >Rango de edad</q-item-label
                >
                <q-select
                  color="purple"
                  rounded
                  outlined
                  bg-color="grey-3"
                  v-model="rango_edad_Id"
                  :options="list_Edades"
                />
              </q-item-section>
            </q-item>

            <q-item :content-inset-level="2" :header-inset-level="2">
              <q-item-section>
                <q-item-label class="label-title text-bold">Sexo</q-item-label>
                <q-select
                  color="purple"
                  rounded
                  outlined
                  bg-color="grey-3"
                  v-model="sexo_Id"
                  :options="list_Sexo"
                />
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useCardsStore } from "src/stores/cards-store";
import { useConfiguracionStore } from "src/stores/configuracion-store";

import { onBeforeMount, onMounted, ref, watch, watchEffect } from "vue";

//---------------------------------------------------------------------------------

const $q = useQuasar();

const cardsStore = useCardsStore();
const configuracionStore = useConfiguracionStore();
const {
  isHomePage,
  isDetallePage,
  listDistritos,
  listEdades,
  listActorPolitico,
  listSexo,
  listCards,
  listFiltroCards,
  buttons,
  selectedTab,
} = storeToRefs(cardsStore);
const {
  tipos_Elecciones,
  list_Distritos,
  list_Partidos_Politicos,
  list_Municipios,
  list_Demarcaciones,
  list_Edades,
  list_Sexo,
} = storeToRefs(configuracionStore);
const distritos_Id = ref(null);
const actor_politico_Id = ref(null);
const rango_edad_Id = ref(null);
const sexo_Id = ref(null);

const numeraliaSelected = ref(true);
const candidatosSelected = ref(false);
//---------------------------------------------------------------------------------

const municipio_Id = ref(null);

//---------------------------------------------------------------------------------

const demarcacion_Id = ref(null);

//---------------------------------------------------------------------------------
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);

onBeforeMount(() => {
  limpiarFiltros();
});

watch(listCards, (val) => {
  listFiltroCards.value = val;
});
watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
onMounted(() => {
  if (selectedTab.value == "") {
    selectedTab.value = "inicio";
  } else {
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) {
      selectedTab.value = savedTab;
    }
  }
});

//---------------------------------------------------------------------------------
//DIPUTACIONES

const activaNumeralia = () => {
  cardsStore.actualizarButtonColor(false);
  limpiarFiltros();
};

const activaCandidatos = () => {
  cardsStore.actualizarButtonColor(true);
  limpiarFiltros();
};

const limpiarFiltros = () => {
  distritos_Id.value = { value: 0, label: "Todos" };
  rango_edad_Id.value = { value: 0, label: "Todos" };
  actor_politico_Id.value = { value: 0, label: "Todos" };
  sexo_Id.value = { value: 0, label: "Todos" };
  municipio_Id.value = { value: 0, label: "Todos" };
  demarcacion_Id.value = { value: 0, label: "Todos" };
};

//---------------------------------------------------------------------------------
const filtrar = (listCards, filtro) => {
  listFiltroCards.value = listCards.filter((item) => {
    let cumple = true;
    if (filtro.distrito !== undefined) {
      if (filtro.distrito == "") {
        cumple = cumple && item.distrito === item.distrito;
      } else {
        cumple = cumple && item.distrito === filtro.distrito;
      }
    }
    if (filtro.actor_politico !== undefined) {
      if (filtro.actor_politico == "") {
        cumple = cumple && item.siglas === item.siglas;
      } else {
        cumple = cumple && item.siglas === filtro.actor_politico;
      }
    }

    if (filtro.edad !== undefined) {
      if (filtro.edad == "Todos") {
        cumple = cumple && item.edad_prop > 0;
      } else {
        const rango = filtro.edad.split("-").map(Number);
        if (rango.length === 2) {
          cumple =
            cumple && item.edad_prop >= rango[0] && item.edad_prop <= rango[1];
        } else if (rango.length === 1 && rango[0] === 60) {
          cumple = cumple && item.edad_prop >= rango[0];
        }
      }
    }

    if (filtro.sexo !== undefined) {
      if (filtro.sexo == "Todos") {
        cumple = cumple && item.sexo_prop === item.sexo_prop;
      } else {
        cumple = cumple && item.sexo_prop === filtro.sexo;
      }
    }

    if (filtro.municipio !== undefined) {
      if (filtro.municipio == "") {
        cumple = cumple && item.municipio === item.municipio;
      } else {
        cumple = cumple && item.municipio === filtro.municipio;
      }
    }

    if (filtro.demarcacion !== undefined) {
      if (filtro.demarcacion == "") {
        cumple = cumple && item.demarcacion_Id === item.demarcacion_Id;
      } else {
        cumple = cumple && item.demarcacion_Id === filtro.demarcacion;
      }
    }

    return cumple;
  });
};
watchEffect(() => {
  const filtro = {};
  if (distritos_Id.value != null) filtro.distrito = distritos_Id.value.value;
  if (actor_politico_Id.value != null)
    filtro.actor_politico = actor_politico_Id.value.value;
  if (rango_edad_Id.value != null) filtro.edad = rango_edad_Id.value.label;
  if (sexo_Id.value != null) filtro.sexo = sexo_Id.value.label;
  if (municipio_Id.value != null) filtro.municipio = municipio_Id.value.value;
  if (demarcacion_Id.value != null)
    filtro.demarcacion = demarcacion_Id.value.value;
  filtrar(listCards.value, filtro);
});
</script>

<style></style>
