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
              ? 'presidencia'
              : 'regidurias',
        }"
        label="Numeralia"
        :class="{
          'bg-pink-ieen': numeraliaSelected,
          'bg-pink-ieen-3': !numeraliaSelected,
        }"
      />
      <q-btn
        rounded
        :to="{
          name:
            selectedTab == 'diputaciones'
              ? 'diputaciones'
              : selectedTab == 'presidencia'
              ? 'presidencia'
              : 'regidurias',
        }"
        label="Candidatas y candidatos"
        :class="{
          'bg-pink-ieen': candidatosSelected,
          'bg-pink-ieen-3': !candidatosSelected,
        }"
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
                  :options="listDistritos"
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
                  :options="listMunicipios"
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
                  :options="listDemarcacion"
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
                  :options="listActorPolitico"
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
                  :options="listEdades"
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
                  :options="listSexo"
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
import { usePresidenciaSindicaturiaStore } from "src/stores/presidencia_sindicaturia_store";
import { useRegiduriasStore } from "src/stores/regidurias_store";
import { onBeforeMount, onMounted, ref, watch, watchEffect } from "vue";

//---------------------------------------------------------------------------------

const $q = useQuasar();

const cardsStore = useCardsStore();
const {
  isHomePage,
  isDetallePage,
  listDistritos,
  listEdades,
  listActorPolitico,
  listSexo,
  listCards,
  listFiltroCards,
  back,
  selectedTab,
} = storeToRefs(cardsStore);

const distritos_Id = ref(null);
const actor_politico_Id = ref(null);
const rango_edad_Id = ref(null);
const sexo_Id = ref(null);

const numeraliaSelected = ref(true);
const candidatosSelected = ref(false);
//---------------------------------------------------------------------------------

const presidenciaSindicaturiaStore = usePresidenciaSindicaturiaStore();
const { listMunicipios } = storeToRefs(presidenciaSindicaturiaStore);
const municipio_Id = ref(null);

//---------------------------------------------------------------------------------

const regiduriasStore = useRegiduriasStore();
const { listDemarcacion } = storeToRefs(regiduriasStore);
const demarcacion_Id = ref(null);

//---------------------------------------------------------------------------------
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
watch(back, (val) => {
  if (val == true) {
    numeraliaSelected.value = true;
    candidatosSelected.value = false;
  }
});
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

onBeforeMount(() => {
  cardsStore.loadCards();
  cardsStore.loadDistritos();
  cardsStore.loadEdades();
  cardsStore.loadActorPolitico();
  cardsStore.loadSexo();
  presidenciaSindicaturiaStore.loadMunicipios();
  regiduriasStore.loadDemarcaciones();
  cardsStore.actualizarChart(true);
  presidenciaSindicaturiaStore.actualizarChart(true);
  regiduriasStore.actualizarChart(true);
  limpiarFiltros();
});

watch(listCards, (val) => {
  listFiltroCards.value = val;
});

//---------------------------------------------------------------------------------
//DIPUTACIONES

const activaNumeralia = () => {
  switch (selectedTab.value) {
    case "diputaciones":
      cardsStore.actualizarChart(true);
      cardsStore.actualizarDetalle(false);
      cardsStore.actualizarCandidatos(false);
      numeraliaSelected.value = true;
      candidatosSelected.value = false;
      break;
    case "presidencia":
      presidenciaSindicaturiaStore.actualizarChart(true);
      presidenciaSindicaturiaStore.actualizarCandidatos(false);
      presidenciaSindicaturiaStore.actualizarDetalle(false);
      numeraliaSelected.value = true;
      candidatosSelected.value = false;
      break;
    case "regidurias":
      regiduriasStore.actualizarChart(true);
      regiduriasStore.actualizarCandidatos(false);
      regiduriasStore.actualizarDetalle(false);
      numeraliaSelected.value = true;
      candidatosSelected.value = false;
      break;
  }
  limpiarFiltros();
};

const activaCandidatos = () => {
  console.log("sele", selectedTab.value);
  switch (selectedTab.value) {
    case "diputaciones":
      cardsStore.actualizarChart(false);
      cardsStore.actualizarDetalle(false);
      cardsStore.actualizarCandidatos(true);
      numeraliaSelected.value = false;
      candidatosSelected.value = true;
      cardsStore.actualizarBack(false);
      break;
    case "presidencia":
      presidenciaSindicaturiaStore.actualizarChart(false);
      presidenciaSindicaturiaStore.actualizarDetalle(false);
      presidenciaSindicaturiaStore.actualizarCandidatos(true);
      numeraliaSelected.value = false;
      candidatosSelected.value = true;
      cardsStore.actualizarBack(false);
      break;
    case "regidurias":
      regiduriasStore.actualizarChart(false);
      regiduriasStore.actualizarDetalle(false);
      regiduriasStore.actualizarCandidatos(true);
      numeraliaSelected.value = false;
      candidatosSelected.value = true;
      cardsStore.actualizarBack(false);
      break;
  }
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
