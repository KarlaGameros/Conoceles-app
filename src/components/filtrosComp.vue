<template>
  <div v-if="$q.screen.xs" class="bg-grey-2" style="border-radius: 20px">
    <div class="text-h6 q-pl-md text-bold" style="color: grey">CONSULTA:</div>
    <div class="subtitule-2 q-pl-md" style="color: grey">
      Selecciona el reporte que deseas consultar:
    </div>
    <div class="text-center q-pb-md">
      <q-btn
        rounded
        @click="activaNumeralia"
        :to="{
          name: selectedTab,
        }"
        label="Numeralia"
        :class="buttons == false ? 'bg-pink-ieen' : 'bg-pink-ieen-3'"
      />
      <q-btn
        rounded
        :to="{
          name: `${selectedTab}cards`,
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
              v-if="selectedTab === 'DIP'"
              :content-inset-level="2"
              :header-inset-level="2"
            >
              <q-item-section>
                <q-item-label class="label-title text-bold"
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
              v-if="selectedTab === 'PYS' || selectedTab === 'REG'"
              :content-inset-level="2"
              :header-inset-level="2"
            >
              <q-item-section>
                <q-item-label class="label-title text-bold"
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
              v-if="selectedTab === 'REG'"
              :content-inset-level="2"
              :header-inset-level="2"
            >
              <q-item-section>
                <q-item-label class="label-title text-bold"
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
                <q-item-label class="label-title text-bold"
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
                />
              </q-item-section>
            </q-item>

            <q-item :content-inset-level="2" :header-inset-level="2">
              <q-item-section>
                <q-item-label class="label-title text-bold"
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
                <q-item-label class="label-title text-bold"
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
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useCardsStore } from "src/stores/cards-store";
import { useConfiguracionStore } from "src/stores/configuracion-store";
import { useGraficasStore } from "src/stores/graficas-store";
import Filtrar from "src/helpers/Filtrar";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const cardsStore = useCardsStore();
const configuracionStore = useConfiguracionStore();
const graficasStore = useGraficasStore();
const { isDetallePage, listFiltroCards, buttons, list_Candidatos_By_Eleccion } =
  storeToRefs(cardsStore);
const {
  list_Graficas_Filtrado,
  list_Graficas_By_Eleccion,
  list_Graficas_Genero_Edad_Filtrado,
  list_Graficas_Genero_Edad,
} = storeToRefs(graficasStore);
const {
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
const municipio_Id = ref(null);
const demarcacion_Id = ref(null);
const selectedTab = ref(null);
//---------------------------------------------------------------------------------

onMounted(() => {
  if (selectedTab.value == "") {
    selectedTab.value = "inicio";
  } else {
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) {
      selectedTab.value = savedTab;
    }
  }
  limpiarFiltros();
});

//---------------------------------------------------------------------------------

watch(distrito_Id, (val) => {
  if (selectedTab.value == "DIP") {
    list_Partidos_Politicos.value = [];
    if (val.value == 0) {
      configuracionStore.loadPartidosPoliticos("GeneralDistritos", 0, 0, 0);
    } else if (val.value != 0 && val.label != "RP") {
      configuracionStore.loadPartidosPoliticos("Distritos", 0, val.value, 0);
    } else if (val.label == "RP") {
      configuracionStore.loadPartidosPoliticosDistritosRP();
    }
  }
});

watch(municipio_Id, (val) => {
  if (selectedTab.value == "PYS" || selectedTab.value == "REG") {
    demarcacion_Id.value = { value: 0, label: "Todos" };
    if (selectedTab.value == 0 && selectedTab.value == "PYS") {
      configuracionStore.loadPartidosPoliticos("GeneralMunicipios", 0, 0, 0);
    } else if (val.value != 0) {
      configuracionStore.loadPartidosPoliticos("Municipios", val.value, 0, 0);
      configuracionStore.loadDemarcaciones(val.value);
    }
  }
});

watch(demarcacion_Id, (val) => {
  if (selectedTab.value == "REG") {
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
watchEffect(() => {
  if ($q.screen.xs) {
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

<style></style>
