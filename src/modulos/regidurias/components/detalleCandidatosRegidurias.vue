<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="error" color="purple-4" />
    </template>
    <template v-slot:contenido>
      La información es proporcionada por las personas candidatas a las
      Regidurias del Estado de Nayarit, por lo que su contenido es
      responsabilidad de los actores políticos. El Instituto Estatal Electoral
      de Nayarit únicamente apoya para su difusión.
    </template>
  </banner>
  <br />
  <!---------------------------BUTTON BACK AND PDF--------------------------->
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 text-h6">
      <q-avatar class="bg-purple-4" text-color="white"
        ><q-btn :to="{ name: 'REGcards' }" flat icon="reply">
          <q-tooltip>Regresar</q-tooltip>
        </q-btn></q-avatar
      >
      Municipio de {{ candidato.municipio }} -
      {{ candidato.demarcacion }}
    </div>
    <q-btn
      :disable="activar_pdf"
      @click="pdf(props.id, candidato.selection == 'prop' ? 0 : 1)"
      flat
      icon="picture_as_pdf"
      class="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-purple-4"
      >Descargar</q-btn
    >
  </div>
  <!---------------------------CANDIDATE DETAIL--------------------------->
  <div class="row">
    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
      <div class="shadow-7" style="border-radius: 20px">
        <div class="row">
          <div class="col-12 q-pa-md" align="center">
            <q-avatar size="600%">
              <q-img
                :src="
                  candidato.selection == 'prop'
                    ? candidato.url_Foto_Propietario
                    : candidato.url_Foto_Suplente
                "
              />
            </q-avatar>
          </div>
          <div class="col-12 q-pb-md" align="center">
            <div class="text-h6">
              {{
                candidato.selection == "prop"
                  ? candidato.nombre_Completo_Propietario
                  : candidato.nombre_Completo_Suplente
              }}
            </div>

            <q-avatar square size="40px">
              <img
                :src="
                  candidato.selection == 'prop'
                    ? candidato.url_Logo_Partido_Propietario
                    : candidato.url_Logo_Partido_Suplente
                "
                alt=""
              />
            </q-avatar>

            <div class="q-pt-md">
              <div class="text-subtitle2 text-center">CANDIDATURA</div>
              <q-btn-toggle
                v-model="candidato.selection"
                push
                glossy
                toggle-color="purple-4"
                :options="[
                  { label: 'Propietaria', value: 'prop' },
                  { label: 'Suplente', value: 'sup' },
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <q-list
        v-if="isSmallScreen"
        dark
        padding
        bordered
        class="rounded-borders"
      >
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
            class="text-purple"
            active-bg-color="purple-3"
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
              v-if="!isSmallScreen"
              v-model="tab"
              dense
              class="text-grey"
              active-color="purple-4"
              indicator-color="purple-4"
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
                    <q-avatar size="200px">
                      <q-img
                        :src="
                          candidato.selection == 'prop'
                            ? candidato.url_Foto_Propietario
                            : candidato.url_Foto_Suplente
                        "
                      /> </q-avatar
                    ><br /><br />
                    <q-avatar square size="55px">
                      <img
                        :src="
                          candidato.selection == 'prop'
                            ? candidato.url_Logo_Partido_Propietario
                            : candidato.url_Logo_Partido_Suplente
                        "
                        alt=""
                      />
                    </q-avatar>
                  </div>
                  <div
                    :class="
                      isSmallScreen
                        ? 'text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'
                        : 'col-lg-4 col-md-6 col-sm-12 col-xs-12'
                    "
                  >
                    <div class="text-h6">Nombre (propietaria/o):</div>
                    <div class="text-subtitle1">
                      {{
                        candidato.selection == "prop"
                          ? candidato.nombre_Completo_Propietario
                          : candidato.nombre_Completo_Suplente
                      }}
                    </div>
                    <div class="text-h6">Edad:</div>
                    <div class="text-subtitle1"></div>
                    <div class="text-h6">Sexo:</div>
                    <div class="text-subtitle1">
                      {{
                        candidato.selection == "prop"
                          ? candidato.sexo_Propietario
                          : candidato.sexo_Suplente
                      }}
                    </div>
                  </div>
                  <div
                    :class="
                      isSmallScreen
                        ? 'text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'
                        : 'col-lg-4 col-md-6 col-sm-12 col-xs-12'
                    "
                  >
                    <div class="text-h6">Cargo:</div>
                    <div class="text-subtitle1">
                      {{ candidato.tipo_Candidato }}
                    </div>
                    <div class="text-h6">Estado:</div>
                    <div class="text-subtitle1">Nayarit</div>
                    <div class="text-h6">Número de fórmula:</div>
                    <div class="text-subtitle1">{{ candidato.id }}</div>
                    <br />
                    <!-- <div>
                      <q-icon name="location_on" /> Via Alfredo del Mazo s/n,
                      Toluca de Lerdo, México, C.P. 50010
                      <br />
                      <q-icon name="call" /> +52 323-120-9103
                      <br />
                      <q-icon name="email" /> 12345@gmail.com
                    </div>
                    <br />
                    <div>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-facebook fa-2xl"
                          style="color: #673e84"
                        ></i>
                      </q-btn>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-instagram fa-2xl"
                          style="color: #673e84"
                        ></i>
                      </q-btn>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-twitter fa-2xl"
                          style="color: #673e84"
                        ></i>
                      </q-btn>
                      <q-btn flat round dense>
                        <i
                          class="fa-brands fa-tiktok fa-2xl"
                          style="color: #673e84"
                        ></i>
                      </q-btn>
                    </div> -->
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="HISTORIA PROFESIONAL Y/O LABORAL">
                <div
                  class="col-12 bg-blue-grey-4"
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
                  class="col-12 bg-blue-grey-2"
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
                  class="col-12 bg-blue-grey-2"
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
                  class="col-12 bg-blue-grey-4"
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
                  class="col-12 bg-purple-ieen-3"
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
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import pdfCandidato from "../../../helpers/pdf";
import banner from "../../../components/bannerComp.vue";
import ReporteConoceles01 from "src/helpers/Conoceles-01";

//---------------------------------------------------------------------------------

const candidatosStore = useCardsStore();
const { candidato, formacion, datos_Generales, list_Propuestas } =
  storeToRefs(candidatosStore);
const tab = ref("DATOS GENERALES");
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
const open_tab = ref(false);
const activar_pdf = ref(false);
const props = defineProps({
  id: { type: String, required: true },
});

//---------------------------------------------------------------------------------
onMounted(() => {
  candidatosStore.actualizarButtonColor(true);
});

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
const pdf = async (id, puesto) => {
  ReporteConoceles01(id, puesto);
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 5000);
};
//---------------------------------------------------------------------------------
</script>
<style></style>
