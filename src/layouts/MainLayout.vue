<template>
  <q-layout :view="$q.screen.xs ? 'hHh lpR lff' : 'hHh LpR fFf'">
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
            Proceso Electoral Local Ordinario
            <b class="text-pink-conoceles">2024</b>
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
            <q-tabs v-model="tab">
              <q-route-tab :to="{ name: 'inicio' }" name="inicio" icon="home" />

              <q-tab
                v-model="tab"
                v-for="eleccion in list_Tipos_Elecciones"
                :key="eleccion.siglas"
                :name="eleccion.siglas"
                :label="eleccion.nombre"
                @click="isTabSelected(eleccion.siglas, eleccion.id)"
              />
            </q-tabs>
          </div>
          <!---------------------------HEADER ISSMALLSREEN--------------------------->
          <div class="absolute-center" v-else>
            <strong>{{
              tab == "DIP"
                ? "DIPUTACIONES"
                : tab == "PYS"
                ? "PRESIDENCIA Y SINDICATURA"
                : tab == "REG"
                ? "REGIDURIAS"
                : "INICIO"
            }}</strong>
          </div>
          <div
            v-if="$q.screen.xs || $q.screen.sm"
            class="absolute-right q-pa-xs"
          >
            <q-btn flat @click="exportarBD()">
              <i class="fa-solid fa-database fa-2xl" style="color: #ffffff"></i>
              <q-tooltip>Exportar base de datos</q-tooltip>
            </q-btn>
          </div>
          <div
            v-if="!$q.screen.xs && !$q.screen.sm"
            class="absolute-right q-pa-xs"
          >
            Exportar base de datos

            <q-btn @click="exportarBD()" flat>
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
      :breakpoint="700"
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
                >Consulta
              </q-item-label>
              <div class="text-h6 q-pa-xs" style="color: grey">
                Selecciona el reporte que deseas consultar:
              </div>
              <q-btn
                rounded
                @click="activaNumeralia"
                :to="{
                  name: `${tab}`,
                  params: { eleccion_Id: tab_Id },
                }"
                label="Numeralia"
                :class="buttons == false ? 'bg-pink-ieen' : 'bg-pink-ieen-3'"
              />
              <br />
              <q-btn
                rounded
                :to="{
                  name: `${tab}cards`,
                  params: { eleccion_Id: tab_Id },
                }"
                label="Candidatas y candidatos"
                :class="buttons ? 'bg-pink-ieen' : 'bg-pink-ieen-3'"
                @click="activaCandidatos"
              />
            </q-item-section>
          </q-item>
          <!---------------FILTERS--------------->
          <q-item
            v-if="tab === 'DIP'"
            :content-inset-level="2"
            :header-inset-level="2"
          >
            <q-item-section>
              <q-item-label class="text-purple-ieen label-title text-bold"
                >Distrito</q-item-label
              >
              <q-select
                dense
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
            v-if="tab === 'PYS' || tab === 'REG'"
            :content-inset-level="2"
            :header-inset-level="2"
          >
            <q-item-section>
              <q-item-label class="text-purple-ieen label-title text-bold"
                >Municipio</q-item-label
              >
              <q-select
                dense
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
            v-if="tab === 'REG'"
            :content-inset-level="2"
            :header-inset-level="2"
          >
            <q-item-section>
              <q-item-label class="text-purple-ieen label-title text-bold"
                >Demarcación</q-item-label
              >
              <q-select
                dense
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
                >Partido político o Coalición</q-item-label
              >
              <q-select
                dense
                color="purple"
                rounded
                outlined
                bg-color="grey-3"
                v-model="actor_politico_Id"
                :options="list_Partidos_Politicos"
              >
                <q-tooltip>{{
                  tab == "DIP" ? "Seleccione distrito" : "Seleccione municipio"
                }}</q-tooltip>
              </q-select>
            </q-item-section>
          </q-item>
          <q-item :content-inset-level="2" :header-inset-level="2">
            <q-item-section>
              <q-item-label class="text-purple-ieen label-title text-bold"
                >Rango de edad</q-item-label
              >
              <q-select
                dense
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
                >Género</q-item-label
              >
              <q-select
                dense
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
              @click="isTabSelected('INICIO')"
              rounded
              name="inicio"
              icon="home"
              to="/inicio"
              label="Inicio"
              class="bg-pink-ieen-3"
            />
          </q-item>
          <q-item
            v-for="eleccion in list_Tipos_Elecciones"
            :key="eleccion"
            clickable
            v-ripple
          >
            <q-btn
              v-model="tab"
              @click="isTabSelected(eleccion.siglas, eleccion.id)"
              rounded
              :to="{
                name: eleccion.siglas,
              }"
              :label="eleccion.label"
              class="bg-pink-ieen-3"
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
              <q-btn
                flat
                round
                dense
                href="https://www.facebook.com/IEENayarit?mibextid=sCpJLy"
                target="_blank"
              >
                <i
                  class="fa-brands fa-square-facebook fa-2xl"
                  style="color: #ffffff"
                ></i>
              </q-btn>
              <q-btn
                flat
                round
                dense
                href="https://www.youtube.com/@IEENayarit"
                target="_blank"
              >
                <i
                  class="fa-brands fa-youtube fa-2xl"
                  style="color: #ffffff"
                ></i>
              </q-btn>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar, QSpinnerCube } from "quasar";
import { useCardsStore } from "src/stores/cards-store";
import { onBeforeMount, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useConfiguracionStore } from "src/stores/configuracion-store";
import { useGraficasStore } from "src/stores/graficas-store";
import { getCurrentLocation, getDataDevice } from "../helpers/CurrentLocation";
import Filtrar from "src/helpers/Filtrar";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const configuracionStore = useConfiguracionStore();
const graficasStore = useGraficasStore();
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
  listFiltroCards,
  list_Candidatos_By_Eleccion,
  info,
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
const {
  list_Graficas_By_Eleccion,
  list_Graficas_Filtrado,
  list_Graficas_Genero_Edad,
  list_Graficas_Genero_Edad_Filtrado,
} = storeToRefs(graficasStore);
const distrito_Id = ref(null);
const actor_politico_Id = ref(null);
const rango_edad_Id = ref(null);
const sexo_Id = ref(null);
const numeraliaSelected = ref(true);
const candidatosSelected = ref(false);
const municipio_Id = ref(null);
const demarcacion_Id = ref(null);
const tab = ref("");
const tab_Id = ref(null);

//---------------------------------------------------------------------------------

onBeforeMount(() => {
  if (tab.value == "") {
    tab.value = "inicio";
    router.push({
      name: "inicio",
    });
  } else {
    const savedTab = localStorage.getItem("selectedTab");

    if (savedTab) {
      tab.value = savedTab;
    }
  }
  limpiarFiltros();
  cargarData();
  //configuracionStore.loadTipoElecciones();
});

//---------------------------------------------------------------------------------

watch(back, (val) => {
  if (val == true) {
    numeraliaSelected.value = true;
    candidatosSelected.value = false;
  }
});

watch(distrito_Id, (val) => {
  if (tab.value == "DIP") {
    list_Partidos_Politicos.value = [];
    if (val.value == 0) {
      configuracionStore.loadPartidosPoliticos("GeneralDistritos", 0, 0, 0);
    } else if (val.value != 0 && val.label != "RP") {
      configuracionStore.loadPartidosPoliticos("Distritos", 0, val.value, 0);
    } else if (val.value == 99) {
      configuracionStore.loadPartidosPoliticosDistritosRP();
    }
  }
});

watch(municipio_Id, (val) => {
  if (tab.value == "PYS" || tab.value == "REG") {
    demarcacion_Id.value = { value: 0, label: "Todos" };
    if (val.value == 0 && tab.value == "PYS") {
      configuracionStore.loadPartidosPoliticos("GeneralMunicipios", 0, 0, 0);
    } else if (val.value != 0) {
      configuracionStore.loadPartidosPoliticos("Municipios", val.value, 0, 0);
      configuracionStore.loadDemarcaciones(val.value);
    }
  }
});

watch(demarcacion_Id, (val) => {
  if (tab.value == "REG") {
    if (val.value == 0) {
      configuracionStore.loadPartidosPoliticos("GeneralDemarcacion", 0, 0, 0);
    } else if (val.value != 0 && val.label != "RP") {
      configuracionStore.loadPartidosPoliticos(
        "MunicipioDemarcacion",
        municipio_Id.value.value,
        0,
        val.value
      );
    } else if (val.label == "RP") {
      configuracionStore.loadPartidosPoliticosDemarcacionesRP(
        municipio_Id.value.value
      );
    }
  }
});

//---------------------------------------------------------------------------------

const cargarData = async () => {
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  await configuracionStore.loadTipoElecciones();
  await configuracionStore.loadDistritos();
  await configuracionStore.loadEdades();
  await configuracionStore.loadGenero();
  await configuracionStore.loadMunicipios();
  $q.loading.hide();
};

const cargar = async (val, tab) => {
  graficasStore.loadGraficasGeneroEdad(val);
  list_Graficas_By_Eleccion.value = [];
  list_Partidos_Politicos.value = [];

  if (tab != "inicio") {
    graficasStore.loadGraficasByEleccion(val);
  }

  // let { latitude, longitude } = await getCurrentLocation();
  // let { brand, model, os } = getDataDevice();
  // info.value.latitud = latitude;
  // info.value.longitud = longitude;
  // info.value.marca = brand;
  // info.value.modelo = model;
  // info.value.sistema_Operativo = os;
  // await cardsStore.infoDeviceConoceles(info.value);
};

const isTabSelected = async (nombre, id) => {
  localStorage.setItem("selectedTab", nombre);
  tab.value = nombre;
  tab_Id.value = id;
  await cargar(id, tab.value);
  router.push({
    name: nombre,
    params: { eleccion_Id: id },
  });
  limpiarFiltros();
};

const activaNumeralia = () => {
  cardsStore.actualizarButtonColor(false);
  limpiarFiltros();
};

const activaCandidatos = async () => {
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
  list_Partidos_Politicos.value = [];
};

const obtenerNombre = () => {
  var fechaHora = new Date();

  var anio = fechaHora.getFullYear();
  var mes = fechaHora.getMonth() + 1;
  var dia = fechaHora.getDate();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();

  return `Conoceles${anio}${mes}${dia}${horas}${minutos}${segundos}`;
};

const exportarBD = async () => {
  $q.loading.show();
  await cardsStore.loadExcel();
  const link = document.createElement("a");
  link.href = cardsStore.documentoExcel;
  link.setAttribute("download", obtenerNombre());
  document.body.appendChild(link);
  link.click();
  $q.loading.hide();
};

const filtrarGeneroEdad = async (list_Grafica, filtro) => {
  let resp = await graficasStore.limpiarLista();
  if (resp.success == true) {
    list_Graficas_Genero_Edad_Filtrado.value = list_Grafica.filter((item) => {
      let cumple = true;
      if (filtro.distrito !== undefined) {
        if (filtro.distrito == 0) {
          cumple = cumple && item.distrito_Id === item.distrito_Id;
        } else if (filtro.distrito == 99) {
          if (item.tipo_Candidato === "RP") {
            cumple = true;
          } else {
            cumple = false;
          }
        } else {
          cumple = cumple && item.distrito_Id === filtro.distrito;
        }
      }

      if (filtro.municipio !== undefined) {
        if (filtro.municipio == 0) {
          cumple = cumple && item.municipio_Id === item.municipio_Id;
        } else {
          cumple = cumple && item.municipio_Id === filtro.municipio;
        }
      }

      if (filtro.demarcacion !== undefined) {
        if (filtro.demarcacion == 0) {
          cumple = cumple && item.demarcacion_Id === item.demarcacion_Id;
        } else if (filtro.demarcacion == 99) {
          if (item.tipo_Candidato === "RP") {
            cumple = true;
          } else {
            cumple = false;
          }
        } else {
          if (item.demarcacion_Id === filtro.demarcacion) {
            cumple = true;
          } else {
            cumple = false;
          }
        }
      }

      if (filtro.sexo != undefined) {
        if (filtro.sexo == "Todos") {
          cumple = cumple && item.sexo === item.sexo;
        } else {
          cumple = cumple && item.sexo === filtro.sexo;
        }
      }

      if (filtro.edad != undefined) {
        if (filtro.edad == "Todos") {
          cumple = cumple && item.edad > 0;
        } else {
          const rango = filtro.edad.split("-").map(Number);

          if (rango.length === 2) {
            cumple = cumple && item.edad >= rango[0] && item.edad <= rango[1];
          } else if (filtro.edad == "60 o más") {
            cumple = cumple && item.edad >= 60;
          }
        }
      }

      if (filtro.actor_politico !== undefined) {
        if (filtro.actor_politico == 0) {
          cumple = cumple && item.partido_Id === item.partido_Id;
        } else {
          if (filtro.coalicion == true) {
            cumple = cumple && item.coalicion_Id === filtro.actor_politico;
          } else {
            cumple = cumple && item.partido_Id === filtro.actor_politico;
          }
        }
      }

      return cumple;
    });
  }
};

const filtrar = (
  list_Candidatos_By_Eleccion,
  list_Graficas_By_Eleccion,
  filtro
) => {
  list_Graficas_Filtrado.value = list_Graficas_By_Eleccion.filter((item) => {
    let cumple = true;
    if (filtro.distrito !== undefined) {
      if (filtro.distrito == 0) {
        cumple = cumple && item.distrito_Id === item.distrito_Id;
      } else if (filtro.distrito == 99) {
        if (item.tipo_Candidato === "RP") {
          cumple = true;
        } else {
          cumple = false;
        }
      } else {
        cumple = cumple && item.distrito_Id === filtro.distrito;
      }
    }

    if (filtro.municipio !== undefined) {
      if (filtro.municipio == 0) {
        cumple = cumple && item.municipio_Id === item.municipio_Id;
      } else {
        cumple = cumple && item.municipio_Id === filtro.municipio;
      }
    }

    if (filtro.demarcacion !== undefined) {
      if (filtro.demarcacion == 0) {
        cumple = cumple && item.demarcacion_Id === item.demarcacion_Id;
      } else if (filtro.demarcacion == 99) {
        if (item.tipo_Candidato === "RP") {
          cumple = true;
        } else {
          cumple = false;
        }
      } else {
        if (item.demarcacion_Id === filtro.demarcacion) {
          cumple = true;
        } else {
          cumple = false;
        }
      }
    }
    if (filtro.sexo != undefined) {
      if (filtro.sexo == "Todos") {
        cumple = cumple && item.sexo === item.sexo;
      } else {
        cumple = cumple && item.sexo === filtro.sexo;
      }
    }

    if (filtro.edad != undefined) {
      if (filtro.edad == "Todos") {
        cumple = cumple && item.edad > 0;
      } else {
        const rango = filtro.edad.split("-").map(Number);

        if (rango.length === 2) {
          cumple = cumple && item.edad >= rango[0] && item.edad <= rango[1];
        } else if (filtro.edad == "60 o más") {
          cumple = cumple && item.edad >= 60;
        }
      }
    }

    if (filtro.actor_politico !== undefined) {
      if (filtro.actor_politico == 0) {
        cumple = cumple && item.partido_Id === item.partido_Id;
      } else {
        if (filtro.coalicion == true) {
          cumple = cumple && item.coalicion_Id === filtro.actor_politico;
        } else {
          cumple = cumple && item.partido_Id === filtro.actor_politico;
        }
      }
    }

    return cumple;
  });

  listFiltroCards.value = list_Candidatos_By_Eleccion.filter((item) => {
    let cumple = true;

    if (filtro.distrito !== undefined) {
      if (filtro.distrito == 0) {
        cumple = cumple && item.distrito_Id === item.distrito_Id;
      } else if (filtro.distrito == 99) {
        if (item.tipo_Candidato === "RP") {
          item.selection = "prop";
        } else {
          cumple = false;
        }
      } else {
        if (item.distrito_Id === filtro.distrito) {
          item.selection = "prop";
        } else {
          cumple = false;
        }
      }
    }

    if (filtro.municipio !== undefined) {
      if (filtro.municipio == 0) {
        cumple = cumple && item.municipio_Id === item.municipio_Id;
      } else {
        if (item.municipio_Id === filtro.municipio) {
          item.selection = "prop";
        } else {
          cumple = false;
        }
      }
    }

    if (filtro.demarcacion !== undefined) {
      if (filtro.demarcacion == "") {
        cumple = cumple && item.demarcacion_Id === item.demarcacion_Id;
      } else if (filtro.demarcacion == 99) {
        if (item.tipo_Candidato === "RP") {
          item.selection = "prop";
        } else {
          cumple = false;
        }
      } else {
        if (item.demarcacion_Id === filtro.demarcacion) {
          item.selection = "prop";
        } else {
          cumple = false;
        }
      }
    }

    if (filtro.actor_politico !== undefined) {
      if (filtro.actor_politico == 0) {
        cumple = cumple && item.partido_Id === item.partido_Id;
      } else {
        if (filtro.coalicion == true) {
          if (item.coalicion_Id === filtro.actor_politico) {
            item.selection = "prop";
          } else {
            cumple = false;
          }
        } else {
          if (item.is_Coalicion == false) {
            if (item.partido_Id === filtro.actor_politico) {
              item.selection = "prop";
            } else if (item.partido_Suplente_Id === filtro.actor_politico) {
              item.selection = "sup";
            } else if (
              item.partido_Propietario_2_Id === filtro.actor_politico
            ) {
              item.selection = "propSin";
            } else if (item.partido_Suplente_2_Id === filtro.actor_politico) {
              item.selection = "supSin";
            } else {
              cumple = false;
            }
          } else {
            cumple = false;
          }
        }
      }
    }

    if (filtro.sexo !== undefined) {
      if (filtro.sexo == "Todos") {
        cumple = cumple && item.sexo_Propietario === item.sexo_Propietario;
      } else {
        if (item.sexo_Propietario == filtro.sexo) {
          item.selection = "prop";
        } else if (item.sexo_Suplente == filtro.sexo) {
          item.selection = "sup";
        } else if (item.sexo_Propietario_2 == filtro.sexo) {
          item.selection = "propSin";
        } else if (item.sexo_Suplente_2 == filtro.sexo) {
          item.selection = "supSin";
        } else {
          cumple = false;
        }
      }
    }

    if (filtro.edad !== undefined) {
      if (filtro.edad == "Todos") {
        cumple = cumple && item.edad_Propietario > 0;
      } else {
        const rango = filtro.edad.split("-").map(Number);
        if (rango.length === 2) {
          if (filtro.sexo != "Todos") {
            if (
              item.edad_Propietario >= rango[0] &&
              item.edad_Propietario <= rango[1] &&
              item.sexo_Propietario == filtro.sexo
            ) {
              item.selection = "prop";
            } else if (
              item.edad_Suplente >= rango[0] &&
              item.edad_Suplente <= rango[1] &&
              item.sexo_Suplente == filtro.sexo
            ) {
              item.selection = "sup";
            } else if (
              item.edad_Propietario_2 >= rango[0] &&
              item.edad_Propietario_2 <= rango[1] &&
              item.sexo_Propietario_2 == filtro.sexo
            ) {
              item.selection = "propSin";
            } else if (
              item.edad_Suplente_2 >= rango[0] &&
              item.edad_Suplente_2 <= rango[1] &&
              item.sexo_Suplente_2 == filtro.sexo
            ) {
              item.selection = "supSin";
            } else {
              cumple = false;
            }
          } else {
            if (
              item.edad_Propietario >= rango[0] &&
              item.edad_Propietario <= rango[1]
            ) {
              item.selection = "prop";
            } else if (
              item.edad_Suplente >= rango[0] &&
              item.edad_Suplente <= rango[1]
            ) {
              item.selection = "sup";
            } else if (
              item.edad_Propietario_2 >= rango[0] &&
              item.edad_Propietario_2 <= rango[1]
            ) {
              item.selection = "propSin";
            } else if (
              item.edad_Suplente_2 >= rango[0] &&
              item.edad_Suplente_2 <= rango[1]
            ) {
              item.selection = "supSin";
            } else {
              cumple = false;
            }
          }
        } else if (rango.length === 1) {
          if (item.edad_Propietario >= 60) {
            item.selection = "prop";
          } else if (item.edad_Suplente >= 60) {
            item.selection = "sup";
          } else if (item.edad_Propietario_2 >= 60) {
            item.selection = "propSin";
          } else if (item.edad_Suplente_2 >= 60) {
            item.selection = "supSin";
          } else {
            cumple = false;
          }
        }
      }
    }

    return cumple;
  });
};

//---------------------------------------------------------------------------------

watchEffect(() => {
  if (!$q.screen.xs) {
    const filtro = {};
    if (distrito_Id.value != null) filtro.distrito = distrito_Id.value.value;
    if (actor_politico_Id.value != null) {
      if (actor_politico_Id.value.is_Coalicion == true) {
        filtro.actor_politico = actor_politico_Id.value.coalicion_Id;
        filtro.coalicion = true;
      } else {
        filtro.actor_politico = actor_politico_Id.value.value;
        filtro.coalicion = false;
      }
    }
    if (rango_edad_Id.value != null) filtro.edad = rango_edad_Id.value.label;
    if (sexo_Id.value != null) filtro.sexo = sexo_Id.value.label;
    if (municipio_Id.value != null) filtro.municipio = municipio_Id.value.value;
    if (demarcacion_Id.value != null)
      filtro.demarcacion = demarcacion_Id.value.value;

    if (list_Graficas_Genero_Edad.value.length > 0) {
      filtrarGeneroEdad(list_Graficas_Genero_Edad.value, filtro);
    }
    if (list_Graficas_By_Eleccion.value.length > 0) {
      filtrar(
        list_Candidatos_By_Eleccion.value,
        list_Graficas_By_Eleccion.value,
        filtro
      );
    }
  }
});
</script>
<style lang="scss">
.text-purple-pink {
  color: #af7ead;
}
.bg-purple-pink {
  background-color: #af7ead;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-purple-ieen {
  color: #673e84 !important;
}
.bg-purple-ieen {
  background-color: #673e84 !important;
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

.sticky {
  position: sticky;
}
</style>
