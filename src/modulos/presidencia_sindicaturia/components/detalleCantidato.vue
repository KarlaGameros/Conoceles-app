<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="error" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      La información es proporcionada por las personas candidatas a las
      Presidencias y Sindicaturas del Estado de Nayarit, por lo que su contenido
      es responsabilidad de los actores políticos. El Instituto Estatal
      Electoral de Nayarit únicamente apoya para su difusión.
    </template>
  </banner>
  <br />
  <!---------------------------BUTTON BACK AND PDF--------------------------->
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 text-h6">
      <q-avatar class="bg-purple-ieen" text-color="white"
        ><q-btn
          :to="{ name: 'PYScards', params: { eleccion_Id: props.eleccion_Id } }"
          flat
          icon="reply"
        >
          <q-tooltip>Regresar</q-tooltip>
        </q-btn></q-avatar
      >
      Municipio de {{ candidato.municipio }}
    </div>
    <q-btn
      @click="
        pdf(
          props.id,
          candidato.selection == 'prop'
            ? 0
            : candidato.selection == 'sup'
            ? 1
            : candidato.selection == 'propSin'
            ? 2
            : 3
        )
      "
      :disable="activar_pdf == true"
      flat
      icon="picture_as_pdf"
      class="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-purple-ieen"
      >Descargar</q-btn
    >
  </div>
  <!---------------------------CANDIDATE DETAIL--------------------------->
  <div class="row">
    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 q-pa-md">
      <div class="shadow-7" style="border-radius: 20px">
        <div class="row">
          <div class="col-12 q-pa-md" align="center">
            <q-avatar size="600%">
              <q-img
                :src="
                  candidato.selection == 'prop'
                    ? candidato.url_Foto_Propietario
                    : candidato.selection == 'sup'
                    ? candidato.url_Foto_Suplente
                    : candidato.selection === 'propSin'
                    ? candidato.url_Foto_Propietario_2
                    : candidato.url_Foto_Suplente_2
                "
              />
            </q-avatar>
          </div>
          <div class="col-12 q-pb-md" align="center">
            <div class="text-h6 text-grey-9">
              {{
                candidato.selection == "prop"
                  ? candidato.nombre_Completo_Propietario
                  : candidato.selection == "sup"
                  ? candidato.nombre_Completo_Suplente
                  : candidato.selection === "propSin"
                  ? candidato.nombre_Completo_Propietario_2
                  : candidato.nombre_Completo_Suplente_2
              }}
            </div>

            <q-avatar style="width: auto; height: 35px" square>
              <img
                :src="
                  candidato.is_Coalicion == true
                    ? candidato.url_Logo_Coalicion
                    : candidato.selection == 'prop'
                    ? candidato.url_Logo_Partido_Propietario
                    : candidato.selection == 'sup'
                    ? candidato.url_Logo_Partido_Suplente
                    : candidato.selection == 'propSin'
                    ? candidato.url_Logo_Partido_Propietario_2
                    : candidato.url_Logo_Partido_Suplente_2
                "
                alt=""
              />
            </q-avatar>

            <div class="q-pa-lg">
              <div class="text-subtitle2 text-center text-grey-9">
                CANDIDATURA
              </div>
              <q-btn-dropdown
                color="purple-ieen"
                :label="
                  candidato.selection == 'prop'
                    ? 'Presidencia propietaria'
                    : candidato.selection == 'sup'
                    ? 'Presidencia suplente'
                    : candidato.selection == 'propSin'
                    ? 'Sindicatura propietaria'
                    : 'Sindicatura suplente' || dropdownOptions[0].label
                "
              >
                <q-list>
                  <q-item
                    v-for="option in dropdownOptions"
                    :key="option.value"
                    clickable
                    @click="
                      selectOption(candidato, option, candidato.selection)
                    "
                    v-close-popup
                  >
                    <q-item-section>
                      <q-item-label>{{ option.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <q-list v-if="$q.screen.xs" dark padding bordered class="rounded-borders">
        <q-expansion-item
          icon="manage_search"
          class="bg-grey-3 text-justify"
          style="border-radius: 20px"
          :label="tab"
          header-class="text-purple"
          expand-icon-class="text-purple"
          v-model="open_tab"
        >
          <q-tabs
            v-model="tab"
            vertical
            class="text-purple-ieen"
            active-bg-color="purple-ieen"
            active-color="white"
          >
            <q-tab
              name="DATOS GENERALES"
              label="DATOS GENERALES"
              @click="open_tab = !open_tab"
            />
            <q-tab
              name="HISTORIA PROFESIONAL Y/O LABORAL"
              label="HISTORIA PROFESIONAL Y/O LABORAL"
              @click="open_tab = !open_tab"
            />
            <q-tab
              name="¿POR QUÉ QUIERO OCUPAR UN CARGO PÚBLICO?"
              label="¿POR QUÉ QUIERO OCUPAR UN CARGO PÚBLICO?"
              @click="open_tab = !open_tab"
            />
            <q-tab
              name="PROPUESTAS"
              label="PROPUESTAS"
              @click="open_tab = !open_tab"
            />
            <q-tab
              name="PROPUESTA EN MATERIA DE GÉNERO"
              label="PROPUESTA EN MATERIA DE GÉNERO"
              @click="open_tab = !open_tab"
            ></q-tab>
          </q-tabs>
        </q-expansion-item>
      </q-list>
      <div class="q-pa-xs">
        <div class="q-gutter-y-md">
          <q-card>
            <q-tabs
              v-if="!$q.screen.xs"
              v-model="tab"
              dense
              class="text-grey"
              active-color="purple-ieen"
              indicator-color="purple-ieen"
              align="justify"
              narrow-indicator
            >
              <q-tab name="DATOS GENERALES" label="DATOS GENERALES" />
              <q-tab
                name="HISTORIA PROFESIONAL Y/O LABORAL"
                label="HISTORIA PROFESIONAL Y/O LABORAL"
              />
              <q-tab
                name="¿POR QUÉ QUIERO OCUPAR UN CARGO PÚBLICO?"
                label="¿POR QUÉ QUIERO OCUPAR UN CARGO PÚBLICO?"
              />
              <q-tab name="PROPUESTAS" label="PROPUESTAS" />
              <q-tab
                name="PROPUESTA EN MATERIA DE GÉNERO"
                label="PROPUESTA EN MATERIA DE GÉNERO"
              ></q-tab>
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="DATOS GENERALES">
                <div class="row">
                  <div
                    class="col-lg-3 col-md-12 col-sm-12 col-xs-12 q-pb-md"
                    align="center"
                  >
                    <q-avatar size="180px">
                      <q-img
                        :src="
                          candidato.selection == 'prop'
                            ? candidato.url_Foto_Propietario
                            : candidato.selection == 'sup'
                            ? candidato.url_Foto_Suplente
                            : candidato.selection === 'propSin'
                            ? candidato.url_Foto_Propietario_2
                            : candidato.url_Foto_Suplente_2
                        "
                      /> </q-avatar
                    ><br /><br />
                    <q-avatar square style="width: auto; height: 35px">
                      <img
                        :src="
                          candidato.is_Coalicion == true
                            ? candidato.url_Logo_Coalicion
                            : candidato.selection == 'prop'
                            ? candidato.url_Logo_Partido_Propietario
                            : candidato.selection == 'sup'
                            ? candidato.url_Logo_Partido_Suplente
                            : candidato.selection == 'propSin'
                            ? candidato.url_Logo_Partido_Propietario_2
                            : candidato.url_Logo_Partido_Suplente_2
                        "
                        alt=""
                      />
                    </q-avatar>
                  </div>
                  <div
                    :class="
                      $q.screen.xs
                        ? 'text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'
                        : 'col-lg-4 col-md-6 col-sm-12 col-xs-12'
                    "
                  >
                    <div class="text-h6 text-grey-9">
                      Nombre (propietaria/o):
                    </div>
                    <div class="text-subtitle1">
                      {{
                        candidato.selection == "prop"
                          ? candidato.nombre_Completo_Propietario
                          : candidato.selection == "sup"
                          ? candidato.nombre_Completo_Suplente
                          : candidato.selection === "propSin"
                          ? candidato.nombre_Completo_Propietario_2
                          : candidato.nombre_Completo_Suplente_2
                      }}
                    </div>
                    <div class="text-h6 text-grey-9">Edad:</div>
                    <div class="text-subtitle1">
                      {{
                        candidato.selection == "prop"
                          ? candidato.edad_Propietario
                          : candidato.selection == "sup"
                          ? candidato.edad_Suplente
                          : candidato.selection == "propSin"
                          ? candidato.edad_Propietario_2
                          : candidato.edad_Suplente_2
                      }}
                    </div>
                    <div class="text-h6 text-grey-9">Sexo:</div>
                    <div class="text-subtitle1">
                      {{
                        candidato.selection == "prop"
                          ? candidato.sexo_Propietario
                          : candidato.selection == "sup"
                          ? candidato.sexo_Suplente
                          : candidato.selection == "propSin"
                          ? candidato.sexo_Propietario_2
                          : candidato.sexo_Suplente_2
                      }}
                    </div>
                  </div>
                  <div
                    :class="
                      $q.screen.xs
                        ? 'text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'
                        : 'col-lg-4 col-md-6 col-sm-12 col-xs-12'
                    "
                  >
                    <div class="text-h6 text-grey-9">Tipo de elección:</div>
                    <div class="text-subtitle1">
                      {{ candidato.tipo_Eleccion }} -
                      {{ candidato.tipo_Candidato }}
                    </div>
                    <div class="text-h6 text-grey-9">Cargo:</div>
                    <div class="text-subtitle1">
                      {{
                        candidato.selection == "prop"
                          ? "Propietario"
                          : candidato.selection == "sup"
                          ? "Suplente"
                          : candidato.selection == "propSin"
                          ? "Propietario sindico"
                          : "Suplente sindico"
                      }}
                    </div>
                    <div class="text-h6 text-grey-9">Estado:</div>
                    <div class="text-subtitle1 text-grey-9">Nayarit</div>
                    <div class="text-h6 text-grey-9">Número de fórmula:</div>
                    <div class="text-subtitle1">{{ candidato.id }}</div>
                    <br />
                    <div class="text-grey-9">
                      <q-icon name="location_on" />{{
                        datos_Generales.domicilio
                      }}
                      <br />
                      <q-icon name="call" /> {{ datos_Generales.telefono }}
                      <br />
                      <q-icon name="email" /> {{ datos_Generales.email }}
                    </div>
                    <br />
                    <div>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-facebook fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{ datos_Generales.facebook }}</q-tooltip>
                        </i>
                      </q-btn>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-instagram fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{
                            datos_Generales.instagram
                          }}</q-tooltip></i
                        >
                      </q-btn>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-twitter fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{ datos_Generales.twitter }}</q-tooltip>
                        </i>
                      </q-btn>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-tiktok fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{ datos_Generales.tik_Tok }}</q-tooltip>
                        </i>
                      </q-btn>
                    </div>
                  </div>
                </div>
              </q-tab-panel>
              <q-tab-panel name="HISTORIA PROFESIONAL Y/O LABORAL">
                <div
                  class="col-12 bg-purple-ieen"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="school" /> ESTUDIOS
                  </div>
                </div>
                <div class="row q-pa-sm">
                  <div class="col">
                    <div class="text-h6">Grado maximo de estudios:</div>
                    <div class="text-subtitle1">
                      {{ datos_Generales.grado_Maximo_Estudios }}
                    </div>
                  </div>
                  <div class="col">
                    <div class="text-h6">Estatus:</div>
                    <div class="text-subtitle1">
                      {{ datos_Generales.estatus_Grado_Estudios }}
                    </div>
                  </div>
                </div>
                <br />
                <div
                  class="col-12 bg-purple-3"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> CURSOS
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify">
                  {{
                    formacion.formacion == null
                      ? "En este apartado se mostrará la información academica que el candidato registro en el cuestionario curricular"
                      : formacion.formacion
                  }}
                </div>
              </q-tab-panel>
              <q-tab-panel name="¿POR QUÉ QUIERO OCUPAR UN CARGO PÚBLICO?">
                <div class="text-subtitle1 text-justify">
                  {{
                    datos_Generales.motivo_Cargo_Publico == null
                      ? "En este apartado se mostrará los motivos de ocupar un cargo público que el candidato registro en el cuestionario curricular"
                      : datos_Generales.motivo_Cargo_Publico
                  }}
                </div>
              </q-tab-panel>
              <q-tab-panel name="PROPUESTAS">
                <div class="text-subtitle1 text-center text-bold q-pb-md">
                  PRINCIPALES PROPUESTAS
                </div>
                <div
                  class="col-12 bg-purple-ieen"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> PROPUESTA 1
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify">
                  {{
                    list_Propuestas.length != 0
                      ? list_Propuestas[0].propuesta
                      : "En este apartado se mostrará la propuesta 1 registrada por el candidato en el cuestionario curricular"
                  }}
                </div>
                <div
                  class="col-12 bg-purple-3"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> PROPUESTA 2
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify">
                  {{
                    list_Propuestas.length != 0
                      ? list_Propuestas[1].propuesta
                      : "En este apartado se mostrará la propuesta 2 registrada por el candidato en el cuestionario curricular"
                  }}
                </div>
              </q-tab-panel>
              <q-tab-panel name="PROPUESTA EN MATERIA DE GÉNERO">
                <div
                  class="col-12 bg-purple-ieen"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> PROPUESTA EN MATERIA DE
                    GÉNERO O, EN SU CASO, DEL GRUPO EN SITUACIÓN DE
                    DISCRIMINACIÓN QUE REPRESENTO
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify">
                  {{
                    datos_Generales.propuesta_Genero == null
                      ? "En este apartado se mostrará la propuesta en materia de género que el candidato registro en el cuestionario curricular"
                      : datos_Generales.propuesta_Genero
                  }}
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import pdfCandidato from "../../../helpers/pdf";
import banner from "../../../components/bannerComp.vue";
import ReporteConoceles01 from "src/helpers/Conoceles-01";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const candidatosStore = useCardsStore();
const { candidato, formacion, datos_Generales, list_Propuestas } =
  storeToRefs(candidatosStore);
const tab = ref("DATOS GENERALES");
const dropdownOptions = [
  { label: "Presidencia propietaria", value: "prop" },
  { label: "Presidencia suplente", value: "sup" },
  { label: "Sindicatura propietaria", value: "propSin" },
  { label: "Sindicatura suplente", value: "supSin" },
];
const open_tab = ref(false);
const activar_pdf = ref(false);
const props = defineProps({
  id: { type: String, required: true },
  puesto: { type: String, required: true },
  eleccion_Id: { type: String, required: true },
});

//---------------------------------------------------------------------------------

onMounted(() => {
  candidatosStore.actualizarButtonColor(true);
});

//---------------------------------------------------------------------------------

const selectOption = async (candidato, option, val) => {
  $q.loading.show();
  candidato.selection = option.value;
  candidato.label = option.label;
  candidatosStore.initDatosGenerales();
  await candidatosStore.loadFormacionAcademicaById(
    props.id,
    val == "prop" ? 0 : 1
  );
  await candidatosStore.loadDatosGeneralesById(props.id, val == "prop" ? 0 : 1);
  await candidatosStore.loadPropuestasByCandidato(
    props.id,
    val == "prop" ? 0 : 1
  );
  $q.loading.hide();
};

const pdf = async (id, puesto) => {
  $q.loading.show();
  ReporteConoceles01(id, puesto);
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 5000);
  $q.loading.hide();
};

//---------------------------------------------------------------------------------
</script>
<style></style>
