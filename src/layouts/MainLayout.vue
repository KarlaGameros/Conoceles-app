<template>
  <q-layout :view="$q.screen.xs ? 'hHh lpR lff' : 'hHh lpR fFf'">
    <q-header elevated class="bg-pink-ieen" height-hint="98">
      <div class="row bg-grey-3">
        <div class="col-lg-1 col-md-2 col-sm-3 col-xs-3 q-pl-xl q-pt-md">
          <q-img v-if="!$q.screen.xs" src="../assets/IEEN300.png"></q-img>
        </div>
        <div
          :class="
            !$q.screen.xs
              ? 'col-lg-9 col-md-8 col-sm-6 col-xs-6 q-pr-xl q-pt-md'
              : 'col-12'
          "
        >
          <div class="text-h5 text-center text-bold text-grey-8">
            Candidatas y Candidatos,
            <b class="text-pink-conoceles">Conóceles</b>
          </div>
          <div class="text-h6 text-center text-grey-8 text-bold">
            Elecciones Estatales de
            <b class="text-pink-conoceles">Nayarit</b>
          </div>
        </div>
        <div
          v-if="!$q.screen.xs"
          class="col-lg-2 col-md-2 col-sm-3 col-xs-3 q-pr-xl"
        >
          <q-img src="../assets/Conoceles2@300x.png"></q-img>
        </div>
      </div>
      <q-toolbar>
        <div class="row">
          <q-btn
            v-if="isHomePage || $q.screen.xs"
            dense
            class="absolute-left"
            flat
            round
            icon="menu"
            @click="toggleLeftDrawer"
          />
          <!---------------------------HEADER TABS--------------------------->
          <div
            v-if="!$q.screen.xs"
            class="absolute-center col-lg-8 col-md-8 col-sm-8 col-xs-9"
          >
            <q-tabs v-model="tabElecciones">
              <q-route-tab
                name="inicio"
                icon="home"
                to="/inicio"
                @click="setTabSelected('inicio')"
              />
              <q-route-tab
                v-for="eleccion in list_Tipos_Elecciones"
                :key="eleccion"
                :name="eleccion"
                :to="{ name: `${eleccion.siglas}` }"
                :label="eleccion.nombre"
                @click="setTabSelected(eleccion.siglas)"
              />
              <!-- <q-route-tab
                name="Presidencias y Sindicaturas"
                :to="{ name: 'presidenciaSindicatura' }"
                label="Presidencias y Sindicaturas"
                @click="setTabSelected('Presidencias y Sindicaturas')"
              />
              <q-route-tab
                name="Regidurías"
                :to="{ name: 'regidurias' }"
                label="Regidurías"
                @click="setTabSelected('Regidurías')"
              /> -->
            </q-tabs>
          </div>
          <!---------------------------HEADER ISSMALLSREEN--------------------------->
          <div class="absolute-center" v-else>
            <strong>{{
              selectedTab == "Diputaciones"
                ? "DIPUTACIONES"
                : selectedTab == "Presidencias y Sindicaturas"
                ? "PRESIDENCIA Y SINDICATURA"
                : selectedTab == "Regidurías"
                ? "REGIDURIAS"
                : "INICIO"
            }}</strong>
          </div>
          <div v-if="$q.screen.xs" class="absolute-right q-pa-xs">
            <q-btn flat>
              <i class="fa-solid fa-database fa-2xl" style="color: #ffffff"></i>
              <q-tooltip>Exportar base de datos</q-tooltip>
            </q-btn>
          </div>
          <div v-else class="absolute-right q-pa-xs">
            Exportar base de datos

            <q-btn flat>
              <i class="fa-solid fa-database fa-2xl" style="color: #ffffff"></i>
              <q-tooltip>Exportar base de datos</q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="isHomePage || $q.screen.xs"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :class="{
        'bg-grey-3': $q.screen.xs,
      }"
    >
      <q-scroll-area
        style="
          height: calc(100% - 100px);
          margin-top: 20px;
          border-right: 1px solid #ddd;
        "
      >
        <!---------------------------DRAWER NORMAL--------------------------->
        <q-list v-if="!$q.screen.xs">
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
              <q-btn
                rounded
                @click="activaNumeralia"
                :to="{
                  name:
                    selectedTab == 'Diputaciones'
                      ? 'diputaciones'
                      : selectedTab == 'Presidencias y Sindicaturas'
                      ? 'presidenciaSindicatura'
                      : 'regidurias',
                }"
                label="Numeralia"
                :class="buttons == false ? 'bg-pink-ieen' : 'bg-pink-ieen-3'"
              />
              <br />
              <q-btn
                rounded
                :to="{
                  name: selectedTab,
                }"
                label="Candidatas y candidatos"
                :class="buttons ? 'bg-pink-ieen' : 'bg-pink-ieen-3'"
                @click="activaCandidatos"
              />
            </q-item-section>
          </q-item>
          <!---------------FILTERS--------------->
          <q-item
            v-if="selectedTab === 'Diputaciones'"
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
                v-model="distrito_Id"
                :options="list_Distritos"
              />
            </q-item-section>
          </q-item>

          <q-item
            v-if="
              selectedTab === 'Presidencias y Sindicaturas' ||
              selectedTab === 'Regidurías'
            "
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
                :options="list_Municipios"
              />
            </q-item-section>
          </q-item>

          <q-item
            v-if="selectedTab === 'Regidurías'"
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
                :options="list_Demarcaciones"
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
                :options="list_Partidos_Politicos"
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
                :options="list_Edades"
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
                :options="list_Sexo"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <!---------------------------DRAWER ISSMALLSCREEN--------------------------->
        <q-list v-else class="absolute">
          <div class="text-center q-pa-md">
            <q-img src="../assets/Conoceles2@300x.png"></q-img>
          </div>
          <q-item clickable v-ripple>
            <q-btn
              :active="isTabSelected('inicio')"
              @click="setTabSelected('inicio')"
              icon="home"
              label="Inicio"
              rounded
              style="width: 260px"
              to="/inicio"
              :class="{
                'bg-pink-ieen': selectedTab === 'inicio',
                'bg-pink-ieen-3': selectedTab !== 'inicio',
              }"
            />
          </q-item>

          <q-item clickable v-ripple>
            <q-btn
              :active="isTabSelected('Diputaciones')"
              @click="setTabSelected('Diputaciones')"
              label="Diputaciones"
              rounded
              style="width: 260px"
              :to="{ name: 'diputaciones' }"
              :class="{
                'bg-pink-ieen': selectedTab === 'Diputaciones',
                'bg-pink-ieen-3': selectedTab !== 'Diputaciones',
              }"
            />
          </q-item>

          <q-item clickable v-ripple>
            <q-btn
              :active="isTabSelected('presidencia')"
              @click="setTabSelected('presidencia')"
              label="Presidencia y Sindicatura"
              rounded
              style="width: 260px"
              :to="{ name: 'presidenciaSindicatura' }"
              :class="{
                'bg-pink-ieen': selectedTab === 'presidencia',
                'bg-pink-ieen-3': selectedTab !== 'presidencia',
              }"
            />
          </q-item>

          <q-item clickable v-ripple>
            <q-btn
              :active="isTabSelected('regidurias')"
              @click="setTabSelected('regidurias')"
              label="Regidurias"
              rounded
              style="width: 260px"
              :to="{ name: 'regidurias' }"
              :class="{
                'bg-pink-ieen': selectedTab === 'regidurias',
                'bg-pink-ieen-3': selectedTab !== 'regidurias',
              }"
            />
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!---------------------------FOOTER--------------------------->
    <q-footer elevated class="bg-pink-ieen text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row">
            <div
              :class="
                $q.screen.xs
                  ? 'col-12 text-subtitle2 text-center'
                  : 'col-lg-4 col-md-4 col-sm-12 col-xs-12 text-subtitle1'
              "
            >
              &#169; 2024 Instituto Estatal Electoral de Nayarit
            </div>

            <div
              class="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center text-caption"
            >
              <div><q-icon name="home" color="white" />Domicilio</div>
              Av. Country Club 13, Colonia Versalles, 63138, Tepic, Nayarit
            </div>
            <div
              class="text-caption col-lg-4 col-md-3 col-sm-6 col-xs-12 text-center"
            >
              <div><q-icon name="phone" color="white" />Teléfono</div>
              (311) - 210 - 3235 /36 /47
            </div>

            <div v-if="!$q.screen.xs" class="absolute-right q-pa-xs">
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
import { onBeforeMount, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useConfiguracionStore } from "src/stores/configuracion-store";
import { getCurrentLocation, getDataDevice } from "../helpers/CurrentLocation";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const configuracionStore = useConfiguracionStore();
const router = useRouter();
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const cardsStore = useCardsStore();
const {
  isHomePage,
  back,
  buttons,
  info,
  listFiltroCards,
  list_Filtro_Candidatos,
} = storeToRefs(cardsStore);
const {
  list_Tipos_Elecciones,
  list_Distritos,
  list_Partidos_Politicos,
  list_Municipios,
  list_Demarcaciones,
  list_Edades,
  list_Sexo,
} = storeToRefs(configuracionStore);
const distrito_Id = ref(null);
const actor_politico_Id = ref(null);
const rango_edad_Id = ref(null);
const sexo_Id = ref(null);
const numeraliaSelected = ref(true);
const candidatosSelected = ref(false);
const municipio_Id = ref(null);
const tabElecciones = ref("Diputaciones");

//---------------------------------------------------------------------------------

const demarcacion_Id = ref(null);
const selectedTab = ref("");

//---------------------------------------------------------------------------------

onBeforeMount(async () => {
  limpiarFiltros();
  cargarData();
  selectedTab.value = localStorage.getItem("selectedTab");
  //configuracionStore.loadTipoElecciones();

  let { latitude, longitude } = await getCurrentLocation();
  let { brand, model, os } = getDataDevice();
  info.value.latitud = latitude;
  info.value.longitud = longitude;
  info.value.marca = brand;
  info.value.modelo = model;
  info.value.sistema_Operativo = os;
  //await cardsStore.infoDeviceConoceles(info.value);
});

const cargarData = async () => {
  await configuracionStore.loadTipoElecciones();
  await configuracionStore.loadDistritos();
  await configuracionStore.loadPartidosPoliticos();
  await configuracionStore.loadEdades();
  await configuracionStore.loadGenero();
  await configuracionStore.loadMunicipios();
  const savedTab = localStorage.getItem("selectedTab");
  await cardsStore.filtrarCandidatos(savedTab);
};
//---------------------------------------------------------------------------------

// watch(tabElecciones, async (val) => {
//   if (val != null) {
//     cardsStore.filtrarCandidatos(val);
//   }
// });

watch(back, (val) => {
  if (val == true) {
    numeraliaSelected.value = true;
    candidatosSelected.value = false;
  }
});

watch(municipio_Id, (val) => {
  if (val != null) {
    configuracionStore.loadDemarcaciones(val.value);
  }
});

//---------------------------------------------------------------------------------

const sendRouter = (apartado) => {
  router.push({
    name: apartado,
    params: {
      apartado: apartado,
    },
  });
};

const isTabSelected = (tab) => {
  if (selectedTab.value == "") {
    selectedTab.value = "inicio";
  } else {
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) {
      selectedTab.value = savedTab;
    }
    console.log("savetab", savedTab);
  }
  //return router.name === tab;
};

const setTabSelected = (tab) => {
  selectedTab.value = tab;
  localStorage.setItem("selectedTab", tab);
  //listFiltroCards.value = [];
  limpiarFiltros();
};

//---------------------------------------------------------------------------------

const activaNumeralia = () => {
  cardsStore.actualizarButtonColor(false);
  limpiarFiltros();
};

const activaCandidatos = () => {
  cardsStore.actualizarButtonColor(true);
  limpiarFiltros();
};

const limpiarFiltros = () => {
  distrito_Id.value = { value: 0, label: "Todos" };
  rango_edad_Id.value = { value: 0, label: "Todos" };
  actor_politico_Id.value = { value: 0, label: "Todos" };
  sexo_Id.value = { value: 0, label: "Todos" };
  municipio_Id.value = { value: 0, label: "Todos" };
  demarcacion_Id.value = { value: 0, label: "Todos" };
};

//---------------------------------------------------------------------------------

const filtrar = (list_Filtro_Candidatos, filtro) => {
  listFiltroCards.value = list_Filtro_Candidatos.filter((item) => {
    let cumple = true;
    if (filtro.distrito !== undefined) {
      if (filtro.distrito == "") {
        cumple = cumple && item.distrito_Id === item.distrito_Id;
      } else {
        cumple = cumple && item.distrito_Id === filtro.distrito;
      }
    }
    if (filtro.actor_politico !== undefined) {
      if (filtro.actor_politico == "") {
        cumple = cumple && item.partido_Id === item.partido_Id;
      } else {
        cumple = cumple && item.partido_Id === filtro.actor_politico;
      }
    }
    // if (filtro.edad !== undefined) {
    //   if (filtro.edad == "Todos") {
    //     cumple = cumple && item.edad_prop > 0;
    //   } else {
    //     const rango = filtro.edad.split("-").map(Number);
    //     if (rango.length === 2) {
    //       cumple =
    //         cumple && item.edad_prop >= rango[0] && item.edad_prop <= rango[1];
    //     } else if (rango.length === 1 && rango[0] === 60) {
    //       cumple = cumple && item.edad_prop >= rango[0];
    //     }
    //   }
    // }
    if (filtro.sexo !== undefined) {
      if (filtro.sexo == "Todos") {
        cumple = cumple && item.sexo_Propietario === item.sexo_Propietario;
      } else {
        cumple = cumple && item.sexo_Propietario === filtro.sexo;
      }
    }
    if (filtro.municipio !== undefined) {
      if (filtro.municipio == "") {
        cumple = cumple && item.municipio_Id === item.municipio_Id;
      } else {
        cumple = cumple && item.municipio_Id === filtro.municipio;
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
  if (distrito_Id.value != null) filtro.distrito = distrito_Id.value.value;
  if (actor_politico_Id.value != null)
    filtro.actor_politico = actor_politico_Id.value.value;
  if (rango_edad_Id.value != null) filtro.edad = rango_edad_Id.value.label;
  if (sexo_Id.value != null) filtro.sexo = sexo_Id.value.label;
  if (municipio_Id.value != null) filtro.municipio = municipio_Id.value.value;
  if (demarcacion_Id.value != null)
    filtro.demarcacion = demarcacion_Id.value.value;
  filtrar(list_Filtro_Candidatos.value, filtro);
});
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
