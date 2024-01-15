<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="error" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      La información es proporcionada por las personas candidatas a las
      Diputaciones del Estado de Nayarit, por lo que su contenido es
      responsabilidad de los actores políticos. El Instituto Estatal Electoral
      de Nayarit únicamente apoya para su difusión.
    </template>
  </banner>
  <br />
  <!---------------------------BUTTON BACK AND PDF--------------------------->
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 text-h6">
      <q-avatar class="bg-purple-ieen-1" text-color="white"
        ><q-btn :to="{ name: 'diputacionesCards' }" flat icon="reply">
          <q-tooltip>Regresar</q-tooltip>
        </q-btn></q-avatar
      >
      Distrito {{ `${candidato.distrito}  ` }}
    </div>
    <q-btn
      :disable="activar_pdf == true"
      @click="pdf()"
      flat
      icon="picture_as_pdf"
      class="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-purple-ieen-1"
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

            <q-avatar
              square
              size="24px"
              v-if="candidato.url_Logo_Partido_Propietario != null"
            >
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
              <q-btn-toggle
                v-model="candidato.selection"
                push
                glossy
                toggle-color="purple"
                :options="[
                  { label: 'Propietario', value: 'prop' },
                  { label: 'Suplente', value: 'sup' },
                ]"
              />
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
            class="text-purple"
            active-bg-color="purple-3"
            active-color="white"
          >
            <q-tab
              v-for="tab in tabs"
              :key="tab"
              :name="tab"
              :label="tab"
              @click="open_tab = !open_tab"
            />
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
              active-color="pink"
              indicator-color="pink"
              align="justify"
              narrow-indicator
            >
              <q-tab
                v-for="tab in tabs"
                :key="tab"
                :name="tab"
                :label="tab"
                @click="open_tab = !open_tab"
              />
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
                            : candidato.url_Foto_Suplente
                        "
                      /> </q-avatar
                    ><br /><br />
                    <q-avatar square size="50px">
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
                      $q.screen.xs
                        ? 'text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'
                        : 'col-lg-4 col-md-6 col-sm-12 col-xs-12'
                    "
                  >
                    <div class="text-h6">Nombre :</div>
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
                      $q.screen.xs
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
                    <!-- <br />
                    <div>
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
                <div class="text-subtitle1 text-justify"></div>
                <br />
                <!-- <div
                  class="col-12 bg-purple-ieen-1"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="school" /> ESTUDIOS
                  </div>
                </div>
                <div class="row q-pa-sm">
                  <div class="col">
                    <div class="text-h6">Grado maximo de estudios:</div>
                  </div>
                  <div class="col">
                    <div class="text-h6">Estatus:</div>
                  </div>
                </div>
                <br />
                <div
                  class="col-12 bg-purple-ieen-3"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> CURSOS
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify"></div> -->
              </q-tab-panel>

              <q-tab-panel name="¿POR QUÉ QUIERO OCUPAR UN CARGO PUBLICO?">
                <div class="text-subtitle1 text-justify"></div>
              </q-tab-panel>

              <q-tab-panel name="PROPUESTAS">
                <!-- <div class="text-subtitle1 text-center text-bold q-pb-md">
                  PRINCIPALES PROPUESTAS
                </div>
                <div
                  class="col-12 bg-purple-ieen-2"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> PROPUESTA 1
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify"></div>
                <div
                  class="col-12 bg-purple-ieen-3"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> PROPUESTA 2
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify"></div> -->
              </q-tab-panel>

              <q-tab-panel name="PROPUESTA EN MATERIA DE GÉNERO">
                <!-- <div
                  class="col-12 bg-purple-ieen-3"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> PROPUESTA EN MATERIA DE
                    GÉNERO O, EN SU CASO, DEL GRUPO EN SITUACIÓN DE
                    DISCRIMINACIÓN QUE REPRESENTO
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify"></div> -->
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import { onMounted, ref } from "vue";
import pdfCandidato from "../../../helpers/pdf";
import banner from "../../../components/bannerComp.vue";

//---------------------------------------------------------------------------------

const cardsStore = useCardsStore();
const { candidato } = storeToRefs(cardsStore);
const tab = ref("DATOS GENERALES");
const open_tab = ref(false);
const activar_pdf = ref(false);
const tabs = ref([
  "DATOS GENERALES",
  "HISTORIA PROFESIONAL Y/O LABORAL",
  "¿POR QUÉ QUIERO OCUPAR UN CARGO PUBLICO?",
  "PROPUESTAS",
  "PROPUESTA EN MATERIA DE GÉNERO",
]);

//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarButtonColor(true);
});

//---------------------------------------------------------------------------------

const pdf = async () => {
  pdfCandidato();
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 5000);
};
</script>
<style></style>
