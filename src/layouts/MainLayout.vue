<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-pink-ieen text-white" height-hint="98">
      <div class="row bg-gray-ieen-3">
        <div class="col-1 q-pl-md">
          <q-img
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
            v-if="isHomePage == true"
            dense
            flat
            round
            icon="menu"
            @click="toggleLeftDrawer"
          />

          <div class="absolute-center col-lg-8 col-md-8 col-sm-8 col-xs-9">
            <q-tabs>
              <q-route-tab icon="home" to="/" />
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

          <div class="absolute-right q-pa-md">
            <a href="/base" style="color: #ffffff">Exportar base de datos </a>
            <i class="fa-solid fa-database fa-2xl"></i>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="selectedTab == 'diputaciones' && isHomePage == true"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-scroll-area
        style="
          height: calc(100% - 170px);
          margin-top: 50px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
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
                @click="btnNumeralia(true)"
                :to="{ name: 'diputaciones' }"
                label="Numeralia"
                style="background: #d1308a; color: white"
              />
              <br />
              <q-btn
                :to="{ name: 'diputaciones' }"
                label="Candidatas y candidatos"
                style="background: #e97ebd; color: white"
                @click="btnCandidatos(true)"
              />
              <br />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <div class="text-weight-bolder">Distrito</div>

              <q-btn-dropdown
                :label="distritos_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listDistritos"
                    :key="option.value"
                    clickable
                    @click="filtroDistritos(option)"
                    v-model="distritos_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{
                        `${option.value} - ${option.label}`
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Actor político</div>

              <q-btn-dropdown
                :disable="distritos_Id.label == 'Seleccione una opción'"
                :label="actor_politico_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listActorPolitico"
                    :key="option.value"
                    clickable
                    @click="filtroActorPolitico(option)"
                    v-model="actor_politico_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Rango de edad</div>
              <q-btn-dropdown
                :disable="distritos_Id.label == 'Seleccione una opción'"
                :label="rango_edad_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listEdades"
                    :key="option.value"
                    clickable
                    @click="filtroEdades(option)"
                    v-model="rango_edad_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Sexo</div>

              <q-btn-dropdown
                :disable="distritos_Id.label == 'Seleccione una opción'"
                :label="sexo_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listSexo"
                    :key="option.value"
                    clickable
                    @click="filtroSexo(option)"
                    v-model="sexo_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!---------------------------------------------------------------------------->
    <q-drawer
      v-if="selectedTab === 'presidencia' && isHomePagePS == true"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-scroll-area
        style="
          height: calc(100% - 170px);
          margin-top: 50px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
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
                @click="btnNumeraliaPresidencia(true)"
                :to="{ name: 'presidenciaSindicatura' }"
                label="Numeralia"
                style="background: #d1308a; color: white"
              />
              <br />
              <q-btn
                :to="{ name: 'presidenciaSindicatura' }"
                label="Candidatas y candidatos"
                style="background: #e97ebd; color: white"
                @click="btnCandidatosPresidencia(true)"
              />
              <br />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <div class="text-weight-bolder">Municipio</div>

              <q-btn-dropdown
                :label="municipio_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listMunicipios"
                    :key="option.value"
                    clickable
                    @click="filtroMunicipios(option)"
                    v-model="municipio_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Actor político</div>

              <q-btn-dropdown
                :disable="municipio_Id.label == 'Seleccione una opción'"
                :label="actor_politico_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listActorPolitico"
                    :key="option.value"
                    clickable
                    @click="filtroActorPolitico(option)"
                    v-model="actor_politico_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Rango de edad</div>
              <q-btn-dropdown
                :disable="municipio_Id.label == 'Seleccione una opción'"
                :label="rango_edad_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listEdades"
                    :key="option.value"
                    clickable
                    @click="filtroEdades(option)"
                    v-model="rango_edad_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Sexo</div>

              <q-btn-dropdown
                :disable="municipio_Id.label == 'Seleccione una opción'"
                :label="sexo_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listSexo"
                    :key="option.value"
                    clickable
                    @click="filtroSexo(option)"
                    v-model="sexo_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!---------------------------------------------------------------------------->
    <q-drawer
      v-if="selectedTab === 'regidurias' && isHomePageRE == true"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-scroll-area
        style="
          height: calc(100% - 170px);
          margin-top: 50px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
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
                @click="btnNumeraliaRegidurias(true)"
                :to="{ name: 'regidurias' }"
                label="Numeralia"
                style="background: #d1308a; color: white"
              />
              <br />
              <q-btn
                :to="{ name: 'regidurias' }"
                label="Candidatas y candidatos"
                style="background: #e97ebd; color: white"
                @click="btnCandidatosRegidurias(true)"
              />
              <br />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <div class="text-weight-bolder">Municipio</div>

              <q-btn-dropdown
                :label="municipio_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listMunicipios"
                    :key="option.value"
                    clickable
                    @click="filtroMunicipiosRegidurias(option)"
                    v-model="municipio_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Demarcación</div>

              <q-btn-dropdown
                :disable="municipio_Id.label == 'Seleccione una opción'"
                :label="demarcacion_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listDemarcacion"
                    :key="option.value"
                    clickable
                    @click="selectOption(option)"
                    v-model="demarcacion_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Actor político</div>

              <q-btn-dropdown
                :disable="municipio_Id.label == 'Seleccione una opción'"
                :label="actor_politico_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listActorPolitico"
                    :key="option.value"
                    clickable
                    @click="filtroActorPolitico(option)"
                    v-model="actor_politico_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Rango de edad</div>
              <q-btn-dropdown
                :disable="municipio_Id.label == 'Seleccione una opción'"
                :label="rango_edad_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in listEdades"
                    :key="option.value"
                    clickable
                    @click="filtroEdades(option)"
                    v-model="rango_edad_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Sexo</div>

              <q-btn-dropdown
                :disable="municipio_Id.label == 'Seleccione una opción'"
                :label="sexo_Id.label"
                class="bg-gray-ieen-3 text-white"
              >
                <q-list>
                  <q-item
                    v-for="option in sexo"
                    :key="option.value"
                    clickable
                    @click="filtroSexo(option)"
                    v-model="sexo_Id"
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!--------------------------------------------------------------------------------->
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-pink-ieen text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>&#169; Unidad Técnica de Informática y Estadística</div>
          <div class="absolute-right q-pa-xs">
            <q-btn flat round dense>
              <i
                class="fa-brands fa-square-facebook fa-2xl"
                style="color: #ffffff"
              ></i>
            </q-btn>
            <q-btn flat round dense>
              <i class="fa-brands fa-youtube fa-2xl" style="color: #ffffff"></i>
            </q-btn>
          </div>
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
import { onBeforeMount, onMounted, ref, watch } from "vue";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const cardsStore = useCardsStore();
const {
  isHomePage,
  listDistritos,
  isCandidatosPage,
  isChartPage,
  listEdades,
  listActorPolitico,
  listSexo,
} = storeToRefs(cardsStore);

const distritos_Id = ref(null);
const actor_politico_Id = ref(null);
const rango_edad_Id = ref(null);
const sexo_Id = ref(null);
const selectedTab = ref(null);

//---------------------------------------------------------------------------------

const presidenciaSindicaturiaStore = usePresidenciaSindicaturiaStore();
const { isChartPagePS, listMunicipios, isHomePagePS } = storeToRefs(
  presidenciaSindicaturiaStore
);
const municipio_Id = ref(null);

//---------------------------------------------------------------------------------

const regiduriasStore = useRegiduriasStore();
const { isChartPageRE, listDemarcacion, isHomePageRE } =
  storeToRefs(regiduriasStore);
const demarcacion_Id = ref(null);

//---------------------------------------------------------------------------------

onMounted(() => {
  const savedTab = localStorage.getItem("selectedTab");
  if (savedTab) {
    selectedTab.value = savedTab;
  }
});

onBeforeMount(() => {
  cardsStore.actualizarChart(true);
  cardsStore.loadDistritos();
  cardsStore.loadEdades();
  cardsStore.loadActorPolitico();
  cardsStore.loadSexo();

  distritos_Id.value = { value: 0, label: "Todos" };
  rango_edad_Id.value = { value: 0, label: "Todos" };
  actor_politico_Id.value = { value: 0, label: "Todos" };
  sexo_Id.value = { value: 0, label: "Todos" };

  presidenciaSindicaturiaStore.actualizarChart(true);
  presidenciaSindicaturiaStore.loadMunicipios();
  municipio_Id.value = { value: 0, label: "Todos" };

  regiduriasStore.actualizarChart(true);
  regiduriasStore.loadDemarcaciones();
  demarcacion_Id.value = { value: 0, label: "Todos" };
});

//---------------------------------------------------------------------------------
//TODOS

// watch(rango_edad_Id, (val) => {
//   if (rango_edad_Id.value.label == "Todos") {
//     cardsStore.loadCards();
//   } else {
//     cardsStore.filterEdad(rango_edad_Id.value.label);
//   }
// });
// watch(actor_politico_Id, (val) => {
//   if (actor_politico_Id.value.value == "Todos") {
//     cardsStore.loadCards();
//   } else {
//     cardsStore.filterActorPolitico(actor_politico_Id.value.value);
//   }
// });

// watch(sexo_Id, (val) => {
//   if (sexo_Id.value.label == "Todos") {
//     cardsStore.loadCards();
//   } else {
//     cardsStore.filterSexo(sexo_Id.value.label);
//   }
// });
const isTabSelected = (tab) => {
  return selectedTab.value === tab;
};
const setTabSelected = (tab) => {
  selectedTab.value = tab;
  localStorage.setItem("selectedTab", tab);
  if (tab == "diputaciones") {
    cardsStore.actualizarCandidatos(false);
    cardsStore.actualizarDetalle(false);
    cardsStore.actualizarChart(true);
  } else if (tab == "presidencia") {
    presidenciaSindicaturiaStore.actualizarCandidatos(false);
    presidenciaSindicaturiaStore.actualizarDetalle(false);
    presidenciaSindicaturiaStore.actualizarChart(true);

    municipio_Id.value = { value: 0, label: "Todos" };
  } else if (tab == "regidurias") {
    regiduriasStore.actualizarCandidatos(false);
    regiduriasStore.actualizarDetalle(false);
    regiduriasStore.actualizarChart(true);

    municipio_Id.value = { value: 0, label: "Todos" };
  }
};

watch(municipio_Id, (val) => {
  if (municipio_Id.value.label == "Todos") {
    if (selectedTab.value == "presidencia") {
      presidenciaSindicaturiaStore.loadCards();
    } else if (selectedTab.value == "regidurias") {
      regiduriasStore.loadCards();
    }
  } else {
    if (selectedTab.value == "presidencia") {
      presidenciaSindicaturiaStore.loadCards();
      presidenciaSindicaturiaStore.filterCards(municipio_Id.value.value);
    } else if (selectedTab.value == "regidurias") {
      regiduriasStore.loadCards();
      regiduriasStore.filterCards(municipio_Id.value.value);
    }
  }
});

//---------------------------------------------------------------------------------
//DIPUTACIONES

watch(distritos_Id, (val) => {
  cardsStore.loadCards();
  if (distritos_Id.value.label == "Todos") {
    cardsStore.loadCards();
  } else {
    cardsStore.loadCards();
    cardsStore.filterDistrito(distritos_Id.value.value);
  }
});

const btnCandidatos = (valor) => {
  cardsStore.actualizarChart(false);
  cardsStore.actualizarDetalle(false);
  cardsStore.actualizarCandidatos(valor);
  distritos_Id.value = { value: 0, label: "Seleccione una opción" };
};
const btnNumeralia = (valor) => {
  cardsStore.actualizarChart(valor);
  cardsStore.actualizarDetalle(false);
  distritos_Id.value = { value: 0, label: "Todos" };
};
const filtroDistritos = (option) => {
  distritos_Id.value.value = option.value;
  distritos_Id.value.label = option.label;

  if (selectedTab.value == "diputaciones") {
    if (option.label == "Todos") {
      cardsStore.loadCards();
    } else {
      cardsStore.loadCards();
      cardsStore.filterDistrito(option.value);
    }
  } else if (selectedTab.value == "presidencia") {
    if (option.label == "Todos") {
      presidenciaSindicaturiaStore.loadCards();
    } else {
      presidenciaSindicaturiaStore.loadCards();
      presidenciaSindicaturiaStore.filterDistrito(option.value);
    }
  }
};
const filtroActorPolitico = (option) => {
  actor_politico_Id.value.value = option.value;
  actor_politico_Id.value.label = option.label;
  if (selectedTab.value == "diputaciones") {
    if (option.label == "Todos") {
      filtroDistritos(distritos_Id.value);
    } else {
      filtroDistritos(distritos_Id.value);
      cardsStore.filterActorPolitico(option.value);
    }
  } else if (selectedTab.value == "presidencia") {
    if (option.label == "Todos") {
      filtroDistritos(distritos_Id.value);
    } else {
      console.log("------------");
      filtroDistritos(distritos_Id.value);
      presidenciaSindicaturiaStore.filterActorPolitico(option.value);
    }
  }
};
const filtroEdades = (option) => {
  rango_edad_Id.value.value = option.value;
  rango_edad_Id.value.label = option.label;
  if (selectedTab.value == "diputaciones") {
    if (option.label == "Todos") {
      filtroActorPolitico(actor_politico_Id.value);
      filtroDistritos(distritos_Id.value);
    } else {
      filtroDistritos(distritos_Id.value);
      filtroActorPolitico(actor_politico_Id.value);
      cardsStore.filterEdad(option.label);
    }
  } else if (selectedTab.value == "presidencia") {
    if (option.label == "Todos") {
      filtroActorPolitico(actor_politico_Id.value);
      filtroDistritos(distritos_Id.value);
    } else {
      filtroDistritos(distritos_Id.value);
      filtroActorPolitico(actor_politico_Id.value);
      presidenciaSindicaturiaStore.filterEdad(option.label);
    }
  }
};
const filtroSexo = (option) => {
  sexo_Id.value.value = option.value;
  sexo_Id.value.label = option.label;
  if (selectedTab.value == "diputaciones") {
    if (option.label == "Todos") {
      filtroDistritos(distritos_Id.value);
      filtroActorPolitico(actor_politico_Id.value);
      filtroEdades(rango_edad_Id.value);
    } else {
      filtroDistritos(distritos_Id.value);
      filtroActorPolitico(actor_politico_Id.value);
      filtroEdades(rango_edad_Id.value);
      cardsStore.filterSexo(option.label);
    }
  } else if (selectedTab.value == "presidencia") {
    if (option.label == "Todos") {
      filtroDistritos(distritos_Id.value);
      filtroActorPolitico(actor_politico_Id.value);
      filtroEdades(rango_edad_Id.value);
    } else {
      filtroDistritos(distritos_Id.value);
      filtroActorPolitico(actor_politico_Id.value);
      filtroEdades(rango_edad_Id.value);
      presidenciaSindicaturiaStore.filterSexo(option.label);
    }
  }
};
const filtro = () => {
  // if (distritos_Id.value.label == "Todos") {
  //   cardsStore.filterDistrito(distritos_Id.value.value);
  //   cardsStore.filtro(
  //     distritos_Id.value.value,
  //     actor_politico_Id.value.value,
  //     rango_edad_Id.value.label,
  //     sexo_Id.value.value
  //   );
  // } else {
  //   cardsStore.filtro(
  //     distritos_Id.value.value,
  //     actor_politico_Id.value.value,
  //     rango_edad_Id.value.label,
  //     sexo_Id.value.value
  //   );
  // }
  // cardsStore.filterDistrito(distritos_Id.value);
  // cardsStore.filterActorPolitico(actor_politico_Id.value);
  // cardsStore.filterEdad(rango_edad_Id.value.label);
  // cardsStore.filterSexo(sexo_Id.value);
};
//---------------------------------------------------------------------------------
//PRESIDENCIA

const btnCandidatosPresidencia = (valor) => {
  presidenciaSindicaturiaStore.actualizarChart(false);
  presidenciaSindicaturiaStore.actualizarDetalle(false);
  presidenciaSindicaturiaStore.actualizarCandidatos(valor);

  municipio_Id.value = { value: 0, label: "Seleccione una opción" };
};
const btnNumeraliaPresidencia = (valor) => {
  presidenciaSindicaturiaStore.actualizarChart(valor);
  presidenciaSindicaturiaStore.actualizarCandidatos(false);
  presidenciaSindicaturiaStore.actualizarDetalle(false);
  municipio_Id.value = { value: 0, label: "Todos" };
};
const filtroMunicipios = (option) => {
  municipio_Id.value.value = option.value;
  municipio_Id.value.label = option.label;
  if (option.label == "Todos") {
    presidenciaSindicaturiaStore.loadCards();
  } else {
    presidenciaSindicaturiaStore.loadCards();
    presidenciaSindicaturiaStore.filterCards(option.value);
  }
};
//---------------------------------------------------------------------------------
//REGIDURIAS
const btnCandidatosRegidurias = (valor) => {
  regiduriasStore.actualizarChart(false);
  regiduriasStore.actualizarDetalle(false);
  regiduriasStore.actualizarCandidatos(valor);
  municipio_Id.value = { value: 0, label: "Seleccione una opción" };
};

const btnNumeraliaRegidurias = (valor) => {
  regiduriasStore.actualizarChart(valor);
  regiduriasStore.actualizarCandidatos(false);
  regiduriasStore.actualizarDetalle(false);
  municipio_Id.value = { value: 0, label: "Todos" };
};

const filtroMunicipiosRegidurias = (option) => {
  municipio_Id.value.value = option.value;
  municipio_Id.value.label = option.label;
  if (option.label == "Todos") {
    regiduriasStore.loadCards();
  } else {
    regiduriasStore.loadCards();
    regiduriasStore.filterCards(option.value);
  }
};
//---------------------------------------------------------------------------------
const limpiar = () => {
  actor_politico_Id.value = { value: 0, label: "Todos" };
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
