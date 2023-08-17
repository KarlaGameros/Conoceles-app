<template>
  <q-layout :view="isSmallScreen ? 'hHh lpR lff' : 'hHh lpR lFf'">
    <q-header elevated class="bg-pink-ieen text-white" height-hint="98">
      <div class="row bg-gray-ieen-3">
        <div class="col-1 q-pl-md">
          <q-img
            v-if="!isSmallScreen"
            src="../assets/IEEN300.png"
            style="height: 60px; width: 100px"
          ></q-img>
        </div>
        <div class="col-11">
          <div class="text-h5 text-center">
            Candidatas y Candidatos,
            <b class="text-pink-conoceles">Conóceles</b>
          </div>
          <div class="text-h6 text-center">
            Elecciones Estatales de
            <b class="text-pink-conoceles">Nayarit</b>
          </div>
        </div>
      </div>
      <q-toolbar>
        <div class="row">
          <q-btn
            v-if="isHomePage || isSmallScreen"
            dense
            class="absolute-left"
            flat
            round
            icon="menu"
            @click="toggleLeftDrawer"
          />

          <div
            v-if="!isSmallScreen"
            class="absolute-center col-lg-8 col-md-8 col-sm-8 col-xs-9"
          >
            <q-tabs>
              <q-route-tab
                icon="home"
                to="/"
                :active="isTabSelected('inicio')"
                @click="setTabSelected('inicio')"
              />
              <q-route-tab
                :to="{ name: 'diputaciones' }"
                label="Diputaciones"
                :active="isTabSelected('diputaciones')"
                @click="setTabSelected('diputaciones')"
              />
              <q-route-tab
                :to="{ name: 'presidenciaSindicatura' }"
                label="Presidencia y Sindicatura"
                :active="isTabSelected('presidencia')"
                @click="setTabSelected('presidencia')"
              />
              <q-route-tab
                :to="{ name: 'regidurias' }"
                label="Regidurias"
                :active="isTabSelected('regidurias')"
                @click="setTabSelected('regidurias')"
              />
            </q-tabs>
          </div>
          <div class="absolute-center" v-else>
            <strong>{{
              title == "diputaciones"
                ? "DIPUTACIONES"
                : title == "presidencia"
                ? "PRESIDENCIA Y SINDICATURA"
                : title == "regidurias"
                ? "REGIDURIAS"
                : "INICIO"
            }}</strong>
          </div>

          <div class="absolute-right q-pa-md">
            <i class="fa-solid fa-database fa-2xl"
              ><q-tooltip>Exportar base de datos</q-tooltip></i
            >
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="isHomePage || isSmallScreen"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :class="{
        'bg-grey-3': isSmallScreen,
      }"
    >
      <q-scroll-area
        style="
          height: calc(100% - 100px);
          margin-top: 50px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list v-if="!isSmallScreen">
          <q-item>
            <q-item-section class="bg-grey-3" style="border-radius: 10px">
              <q-item-label
                class="text-h5 label-title text-bold q-pa-xs"
                style="color: gray"
                >Consulta</q-item-label
              >
              <div class="text-h6 q-pa-xs" style="color: grey">
                Selecciona el reporte que deseas consultar:
              </div>
              <!---------------DIPUTACIONES------------------------------------>
              <q-btn
                rounded
                v-if="selectedTab === 'diputaciones'"
                @click="btnNumeralia(true)"
                :to="{ name: 'diputaciones' }"
                label="Numeralia"
                :class="{
                  'bg-pink-ieen': numeraliaSelected,
                  'bg-pink-ieen-3': !numeraliaSelected,
                }"
              />
              <br v-if="selectedTab === 'diputaciones'" />
              <q-btn
                rounded
                v-if="selectedTab === 'diputaciones'"
                :to="{ name: 'diputaciones' }"
                label="Candidatas y candidatos"
                :class="{
                  'bg-pink-ieen': candidatosSelected,
                  'bg-pink-ieen-3': !candidatosSelected,
                }"
                @click="btnCandidatos(true)"
              />
              <!---------------PRESIDENCIA------------------------------------>
              <q-btn
                rounded
                v-if="selectedTab === 'presidencia'"
                @click="btnNumeraliaPresidencia(true)"
                :to="{ name: 'presidenciaSindicatura' }"
                label="Numeralia"
                :class="{
                  'bg-pink-ieen': numeraliaSelected,
                  'bg-pink-ieen-3': !numeraliaSelected,
                }"
              />
              <br v-if="selectedTab === 'presidencia'" />
              <q-btn
                rounded
                v-if="selectedTab === 'presidencia'"
                :to="{ name: 'presidenciaSindicatura' }"
                label="Candidatas y candidatos"
                :class="{
                  'bg-pink-ieen': candidatosSelected,
                  'bg-pink-ieen-3': !candidatosSelected,
                }"
                @click="btnCandidatosPresidencia(true)"
              />
              <!---------------REGIDURIAS------------------------------------>
              <q-btn
                rounded
                v-if="selectedTab === 'regidurias'"
                @click="btnNumeraliaRegidurias(true)"
                :to="{ name: 'regidurias' }"
                label="Numeralia"
                :class="{
                  'bg-pink-ieen': numeraliaSelected,
                  'bg-pink-ieen-3': !numeraliaSelected,
                }"
              />
              <br v-if="selectedTab === 'regidurias'" />
              <q-btn
                rounded
                v-if="selectedTab === 'regidurias'"
                :to="{ name: 'regidurias' }"
                label="Candidatas y candidatos"
                :class="{
                  'bg-pink-ieen': candidatosSelected,
                  'bg-pink-ieen-3': !candidatosSelected,
                }"
                @click="btnCandidatosRegidurias(true)"
              />
              <br />
            </q-item-section>
          </q-item>
          <q-item
            v-if="selectedTab === 'diputaciones'"
            :content-inset-level="2"
            :header-inset-level="2"
          >
            <q-item-section>
              <q-item-label class="text-purple-ieen label-title text-bold"
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
            v-if="selectedTab === 'presidencia' || selectedTab === 'regidurias'"
            :content-inset-level="2"
            :header-inset-level="2"
          >
            <q-item-section>
              <q-item-label class="text-purple-ieen label-title text-bold"
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
              <q-item-label class="text-purple-ieen label-title text-bold"
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
              <q-item-label class="text-purple-ieen label-title text-bold"
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
              <q-item-label class="text-purple-ieen label-title text-bold"
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
              <q-item-label class="text-purple-ieen label-title text-bold"
                >Sexo</q-item-label
              >
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
        </q-list>
        <!------------------------------------------------------------------------->
        <q-list v-else class="absolute">
          <div class="text-center q-pb-md">
            <q-img
              src="../assets/IEEN300.png"
              style="height: 80px; width: 150px"
            ></q-img>
          </div>
          <q-item clickable v-ripple>
            <q-btn
              @click="titulo('inicio')"
              icon="home"
              label="Inicio"
              rounded
              style="width: 260px"
              to="/inicio"
              :class="{
                'bg-pink-ieen': title === 'INICIO',
                'bg-pink-ieen-3': title !== 'INICIO',
              }"
            />
          </q-item>

          <q-item clickable v-ripple>
            <q-btn
              @click="titulo('diputaciones')"
              label="Diputaciones"
              rounded
              style="width: 260px"
              :to="{ name: 'diputaciones' }"
              :class="{
                'bg-pink-ieen': title === 'diputaciones',
                'bg-pink-ieen-3': title !== 'diputaciones',
              }"
            />
          </q-item>

          <q-item clickable v-ripple>
            <q-btn
              @click="titulo('presidencia')"
              label="Presidencia y Sindicatura"
              rounded
              style="width: 260px"
              :to="{ name: 'presidenciaSindicatura' }"
              :class="{
                'bg-pink-ieen': title === 'presidencia',
                'bg-pink-ieen-3': title !== 'presidencia',
              }"
            />
          </q-item>

          <q-item clickable v-ripple>
            <q-btn
              @click="titulo('regidurias')"
              label="Regidurias"
              rounded
              style="width: 260px"
              :to="{ name: 'regidurias' }"
              :class="{
                'bg-pink-ieen': title === 'regidurias',
                'bg-pink-ieen-3': title !== 'regidurias',
              }"
            />
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-pink-ieen text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row">
            <div
              :class="
                isSmallScreen
                  ? 'col-12 text-subtitle2 text-center'
                  : 'col-lg-4 col-md-4 col-sm-4 col-xs-12 text-h6'
              "
            >
              &#169; 2024 Instituto Estatal Electoral de Nayarit
            </div>

            <div
              class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center text-caption"
            >
              <div><q-icon name="home" color="white" />Domicilio</div>
              Av. Country Club 13, Colonia Versalles, 63138, Tepic, Nayarit
            </div>
            <div
              class="text-caption col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center"
            >
              <div><q-icon name="phone" color="white" />Teléfono</div>
              (311) - 210 - 3233 /35 /36
            </div>

            <div v-if="!isSmallScreen" class="absolute-right q-pa-xs">
              <q-btn flat round dense>
                <i
                  class="fa-brands fa-square-facebook fa-2xl"
                  style="color: #ffffff"
                ></i>
              </q-btn>
              <q-btn flat round dense>
                <i
                  class="fa-brands fa-youtube fa-2xl"
                  style="color: #ffffff"
                ></i>
              </q-btn>
            </div>
          </div>
          <div class="row"></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useCardsStore } from "src/stores/cards-store";
import { usePresidenciaSindicaturiaStore } from "src/stores/presidencia_sindicaturia_store";
import { useRegiduriasStore } from "src/stores/regidurias_store";
import {
  computed,
  onBeforeMount,
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";
//---------------------------------------------------------------------------------

const $q = useQuasar();
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
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
const selectedTab = ref("");
const title = ref(null);
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
onMounted(() => {
  cardsStore.actualizarTab("diputaciones");
  title.value = "diputaciones";
  //----------
  const savedTab = localStorage.getItem("selectedTab");
  if (savedTab) {
    selectedTab.value = savedTab;
  }
});
watch(listCards, (val) => {
  listFiltroCards.value = val;
});
//---------------------------------------------------------------------------------
//TODOS
const isTabSelected = (tab) => {
  return selectedTab.value === tab;
};
const setTabSelected = (tab) => {
  selectedTab.value = tab;
  console.log("selec", selectedTab.value, tab);
  numeraliaSelected.value = true;
  candidatosSelected.value = false;
  localStorage.setItem("selectedTab", tab);
  if (tab == "diputaciones") {
    cardsStore.actualizarCandidatos(false);
    cardsStore.actualizarDetalle(false);
    cardsStore.actualizarChart(true);
  } else if (tab == "presidencia") {
    presidenciaSindicaturiaStore.actualizarCandidatos(false);
    presidenciaSindicaturiaStore.actualizarDetalle(false);
    presidenciaSindicaturiaStore.actualizarChart(true);
  } else if (tab == "regidurias") {
    regiduriasStore.actualizarCandidatos(false);
    regiduriasStore.actualizarDetalle(false);
    regiduriasStore.actualizarChart(true);
  } else if (tab == "inicio") {
    cardsStore.actualizarMenu(false);
  }
};

//---------------------------------------------------------------------------------
//DIPUTACIONES

const btnCandidatos = (valor) => {
  cardsStore.actualizarChart(false);
  cardsStore.actualizarDetalle(false);
  cardsStore.actualizarCandidatos(valor);
  distritos_Id.value = { value: 0, label: "Seleccione una opción" };
  numeraliaSelected.value = false;
  candidatosSelected.value = valor;
  cardsStore.actualizarBack(false);
  limpiarFiltros();
};
const btnNumeralia = (valor) => {
  cardsStore.actualizarChart(valor);
  cardsStore.actualizarDetalle(false);
  cardsStore.actualizarCandidatos(false);
  distritos_Id.value = { value: 0, label: "Todos" };
  numeraliaSelected.value = true;
  candidatosSelected.value = false;
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
//PRESIDENCIA

const btnCandidatosPresidencia = (valor) => {
  presidenciaSindicaturiaStore.actualizarChart(false);
  presidenciaSindicaturiaStore.actualizarDetalle(false);
  presidenciaSindicaturiaStore.actualizarCandidatos(valor);
  municipio_Id.value = { value: 0, label: "Seleccione una opción" };
  numeraliaSelected.value = false;
  candidatosSelected.value = true;
  cardsStore.actualizarBack(false);
  limpiarFiltros();
};
const btnNumeraliaPresidencia = (valor) => {
  presidenciaSindicaturiaStore.actualizarChart(valor);
  presidenciaSindicaturiaStore.actualizarCandidatos(false);
  presidenciaSindicaturiaStore.actualizarDetalle(false);
  municipio_Id.value = { value: 0, label: "Todos" };
  numeraliaSelected.value = true;
  candidatosSelected.value = false;
  limpiarFiltros();
};
//---------------------------------------------------------------------------------
//REGIDURIAS
const btnCandidatosRegidurias = (valor) => {
  regiduriasStore.actualizarChart(false);
  regiduriasStore.actualizarDetalle(false);
  regiduriasStore.actualizarCandidatos(valor);
  municipio_Id.value = { value: 0, label: "Seleccione una opción" };
  numeraliaSelected.value = false;
  candidatosSelected.value = true;
  cardsStore.actualizarBack(false);
  limpiarFiltros();
};

const btnNumeraliaRegidurias = (valor) => {
  regiduriasStore.actualizarChart(valor);
  regiduriasStore.actualizarCandidatos(false);
  regiduriasStore.actualizarDetalle(false);
  municipio_Id.value = { value: 0, label: "Todos" };
  numeraliaSelected.value = true;
  candidatosSelected.value = false;
  limpiarFiltros();
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

const titulo = (text) => {
  title.value = text;
  cardsStore.actualizarTab(text);
  console.log("titulo", title);
};
</script>
<style lang="scss">
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-purple-ieen {
  color: #673e84 !important;
}
.bg-pink-ieen {
  color: white;
  background: #d1308a !important;
}
.bg-pink-ieen-2 {
  background: #e97ebd !important;
}
.text-pink-ieen {
  background: #d1308a !important;
}
.text-purple-ieen-1 {
  color: #863399 !important;
}
.bg-purple-ieen-1 {
  background: #863399 !important;
}
.text-purple-ieen-2 {
  color: #a25eb5 !important;
}
.bg-purple-ieen-2 {
  background: #a25eb5 !important;
}
.text-purple-ieen-3 {
  color: #bb83ca !important;
}
.bg-purple-ieen-3 {
  background: #bb83ca !important;
}
.text-pink-ieen-1 {
  color: #b32572 !important;
}
.bg-pink-ieen-1 {
  background: #b32572 !important;
}
.text-pink-ieen-2 {
  color: #cc5599 !important;
}
.bg-pink-ieen-2 {
  background: #cc5599 !important;
}
.text-pink-ieen-3 {
  color: #dd85ba !important;
}
.bg-pink-ieen-3 {
  color: white;
  background: #dd85ba !important;
}
.text-gray-ieen-1 {
  color: #76777a !important;
}
.bg-gray-ieen-1 {
  background: #76777a !important;
}
.text-gray-ieen-2 {
  color: #98989a !important;
}
.bg-gray-ieen-2 {
  background: #98989a !important;
}
.text-gray-ieen-3 {
  color: #b1b1b1 !important;
}
.bg-gray-ieen-3 {
  background: #b1b1b1 !important;
}
.text-pink-conoceles {
  color: #d1308a !important;
}
</style>
