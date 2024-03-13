<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="error" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      <span id="speak">
        La información es proporcionada por las personas candidatas a Regidurías
        del Estado de Nayarit, por lo que su contenido es responsabilidad de los
        actores políticos. El Instituto Estatal Electoral de Nayarit únicamente
        apoya para su difusión.
      </span>
    </template>
  </banner>
  <br />
  <!---------------------------BUTTON BACK AND PDF--------------------------->
  <div class="row">
    <div
      class="col-lg-10 col-md-10 col-sm-10 col-xs-12 text-subtitle1 text-bold"
    >
      <q-btn
        outline
        style="color: #673e84"
        label="Regresar"
        :to="{ name: 'REGcards', params: { eleccion_Id: props.eleccion_Id } }"
        icon="reply"
      />
      <span id="speak" class="q-pl-sm">
        {{
          candidato.tipo_Candidato != "RP"
            ? `Municipio de ${candidato.municipio} - ${candidato.demarcacion}`
            : `Municipio de ${candidato.municipio}`
        }}
      </span>
    </div>
    <q-btn
      v-if="candidato.validado == true"
      :disable="activar_pdf == true"
      @click="pdf(props.id, candidato.selection == 'prop' ? 0 : 1)"
      flat
      icon="picture_as_pdf"
      class="text-purple-ieen"
      ><span id="speak">Descargar</span></q-btn
    >
  </div>
  <!---------------------------CANDIDATE DETAIL--------------------------->
  <div class="row">
    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
      <div class="shadow-7" style="border-radius: 20px">
        <div class="row">
          <div class="col-12 q-pa-md" align="center">
            <q-avatar size="600%" v-if="candidato.url_Foto != null">
              <q-img :src="candidato.url_Foto" />
            </q-avatar>
            <q-avatar size="600%" v-else>
              <q-img
                v-if="candidato.sexo == 'Mujer'"
                src="../../../assets/avatarmujer.jpg"
              />
              <q-img
                v-else-if="candidato.sexo == 'Hombre'"
                src="../../../assets/avatarHombre.jpg"
              />
              <q-img
                v-if="candidato.sexo == 'No binario'"
                src="../../../assets/noBinario.png"
              />
            </q-avatar>
          </div>
          <div class="col-12 q-pb-md" align="center">
            <q-avatar style="width: auto; height: 35px" square size="40px">
              <img
                :src="
                  candidato.is_Coalicion == true
                    ? candidato.url_Logo_Coalicion
                    : candidato.logo_Partido
                "
                alt=""
              />
            </q-avatar>

            <div class="text-subtitle1 text-bold text-grey-9 q-pa-xs">
              <span id="speak"> {{ candidato.nombre_Completo }} </span>
            </div>

            <div class="text-subtitle2 text-center text-grey-9 q-pb-lg">
              <span id="speak">
                {{
                  candidato.is_Coalicion == true
                    ? candidato.coalicion
                    : candidato.partido
                }}
              </span>
            </div>
            <q-btn-toggle
              @click="cambiar(candidato.selection)"
              v-model="candidato.selection"
              push
              glossy
              class="text-grey-9"
              toggle-color="purple-ieen"
              :options="[
                { label: 'Propietaria', value: 'prop' },
                { label: 'Suplente', value: 'sup' },
              ]"
            />
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
              :disable="candidato.validado == false"
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
              active-color="purple-ieen"
              indicator-color="purple-ieen"
              align="justify"
              narrow-indicator
            >
              <q-tab
                v-for="tab in tabs"
                :key="tab"
                :name="tab"
                :label="tab"
                @click="open_tab = !open_tab"
                :disable="candidato.validado == false"
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
                    <q-avatar size="180px" v-if="candidato.url_Foto != null">
                      <q-img :src="candidato.url_Foto" />
                    </q-avatar>
                    <q-avatar size="180px" v-else>
                      <q-img
                        v-if="candidato.sexo == 'Mujer'"
                        src="../../../assets/avatarmujer.jpg"
                      />
                      <q-img
                        v-else-if="candidato.sexo == 'Hombre'"
                        src="../../../assets/avatarHombre.jpg"
                      />
                      <q-img
                        v-if="candidato.sexo == 'No binario'"
                        src="../../../assets/noBinario.png"
                      />
                    </q-avatar>
                    <br /><br />

                    <q-avatar square style="width: auto; height: 35px">
                      <img
                        :src="
                          candidato.is_Coalicion == true
                            ? candidato.url_Logo_Coalicion
                            : candidato.logo_Partido
                        "
                        alt=""
                      />
                    </q-avatar>
                    <div class="text-subtitle2 text-center text-grey-9 q-pb-lg">
                      <span id="speak">
                        {{
                          candidato.is_Coalicion == true
                            ? candidato.coalicion
                            : candidato.partido
                        }}
                      </span>
                    </div>
                  </div>
                  <div
                    id="speak"
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
                      {{ candidato.nombre_Completo }}
                    </div>
                    <div class="text-h6 text-grey-9">Edad:</div>
                    <div class="text-subtitle1">
                      {{ candidato.edad }}
                    </div>
                    <div class="text-h6 text-grey-9">Sexo:</div>
                    <div class="text-subtitle1">
                      {{ candidato.sexo }}
                    </div>
                  </div>
                  <div
                    :class="
                      $q.screen.xs
                        ? 'text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'
                        : 'col-lg-4 col-md-6 col-sm-12 col-xs-12'
                    "
                  >
                    <div id="speak">
                      <div class="text-h6 text-grey-9">Tipo de elección:</div>
                      <div class="text-subtitle1">
                        {{ candidato.tipo_Eleccion }} -
                        {{ candidato.tipo_Candidato }}
                      </div>
                    </div>
                    <div id="speak">
                      <div class="text-h6 text-grey-9">Cargo:</div>
                      <div class="text-subtitle1">
                        {{
                          candidato.selection == "prop"
                            ? "Persona propietaria"
                            : "Persona suplente"
                        }}
                      </div>
                    </div>
                    <div id="speak">
                      <div class="text-h6 text-grey-9">Estado:</div>
                      <div class="text-subtitle1 text-grey-9">Nayarit</div>
                    </div>
                    <div id="speak">
                      <div class="text-h6 text-grey-9">Número de fórmula:</div>
                      <div class="text-subtitle1">{{ candidato.id }}</div>
                    </div>
                    <br />
                    <div class="text-grey-9">
                      <q-icon name="location_on" /><span
                        id="speak"
                        v-if="datos_Generales.domicilio == null"
                        >{{ datos_Generales.domicilio }}</span
                      >
                      <span id="speak"
                        >La candidatura no proporcionó información</span
                      >
                      <br />
                      <q-icon name="call" /><span
                        id="speak"
                        v-if="datos_Generales.telefono == null"
                      >
                        {{ datos_Generales.telefono }}
                      </span>
                      <span id="speak"
                        >La candidatura no proporcionó información</span
                      >
                      <br />
                      <q-icon name="email" /><span
                        id="speak"
                        v-if="datos_Generales.email == null"
                      >
                        {{ datos_Generales.email }}
                      </span>
                      <span id="speak"
                        >La candidatura no proporcionó información</span
                      >
                    </div>
                    <br />
                    <div id="speak">
                      <div class="text-h6 text-grey-9">Redes sociales:</div>
                      <span
                        id="speak"
                        v-if="
                          datos_Generales.facebook == null &&
                          datos_Generales.instagram == null &&
                          datos_Generales.twitter == null &&
                          datos_Generales.youtube == null &&
                          datos_Generales.tik_Tok == null
                        "
                        >La candidatura no proporcionó información</span
                      >
                      <q-btn
                        :href="`https://www.facebook.com/${datos_Generales.facebook}/`"
                        target="blank"
                        flat
                        round
                        dense
                        v-if="datos_Generales.facebook != null"
                      >
                        <i
                          class="fa-brands fa-facebook fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{ datos_Generales.facebook }}</q-tooltip>
                        </i>
                      </q-btn>
                      <q-btn
                        :href="`https://www.instagram.com/${datos_Generales.instagram}/`"
                        v-if="datos_Generales.instagram != null"
                        flat
                        target="blank"
                        round
                        dense
                      >
                        <i
                          class="fa-brands fa-instagram fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{
                            datos_Generales.instagram
                          }}</q-tooltip></i
                        >
                      </q-btn>
                      <q-btn
                        :href="`https://twitter.com/${datos_Generales.twitter}/`"
                        v-if="datos_Generales.twitter != null"
                        flat
                        round
                        target="blank"
                        dense
                      >
                        <i
                          class="fa-brands fa-twitter fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{ datos_Generales.twitter }}</q-tooltip>
                        </i>
                      </q-btn>
                      <q-btn
                        :href="`https://www.tiktok.com/en/${datos_Generales.tik_Tok}/`"
                        v-if="datos_Generales.tik_Tok != null"
                        flat
                        round
                        target="blank"
                        dense
                      >
                        <i
                          class="fa-brands fa-tiktok fa-2xl"
                          style="color: #673e84"
                        >
                          <q-tooltip>{{ datos_Generales.tik_Tok }}</q-tooltip>
                        </i>
                      </q-btn>
                    </div>
                    <br />
                  </div>
                </div>
                <div v-if="candidato.consentimiento_URL != null">
                  <div
                    v-if="candidato.indigena == 'Sí'"
                    class="col-12 bg-grey-5"
                    style="border-radius: 5px; color: white"
                  >
                    <div class="text-subtitle2" align="center">
                      <q-icon name="check_circle" color="pink" /> Candidatura
                      con autoadscripción indígena
                    </div>
                  </div>
                  <div class="q-pb-xs"></div>
                  <div
                    v-if="candidato.discapacidad == 'Sí'"
                    class="col-12 bg-grey-5"
                    style="border-radius: 5px; color: white"
                  >
                    <div class="text-subtitle2" align="center">
                      <q-icon name="check_circle" color="pink" /> Candidatura
                      con discapacidad
                    </div>
                  </div>
                  <div class="q-pb-xs"></div>
                  <div
                    v-if="candidato.afromexicano == 'Sí'"
                    class="col-12 bg-grey-5"
                    style="border-radius: 5px; color: white"
                  >
                    <div class="text-subtitle2" align="center">
                      <q-icon name="check_circle" color="pink" /> Candidatura
                      afromexicana
                    </div>
                  </div>
                  <div class="q-pb-xs"></div>
                  <div
                    v-if="candidato.lgbttiq == 'Sí'"
                    class="col-12 bg-grey-5"
                    style="border-radius: 5px; color: white"
                  >
                    <div class="text-subtitle2" align="center">
                      <q-icon name="check_circle" color="pink" /> Candidatura
                      perteneciente a la comunidad LGBTTTIQ+
                    </div>
                  </div>
                  <div class="q-pb-xs"></div>
                  <div
                    v-if="candidato.poblacion_Joven == 'Sí'"
                    class="col-12 bg-grey-5"
                    style="border-radius: 5px; color: white"
                  >
                    <div class="text-subtitle2" align="center">
                      <q-icon name="check_circle" color="pink" /> Candidatura
                      perteneciente a la población de personas jóvenes
                    </div>
                  </div>
                  <div class="q-pb-xs"></div>
                  <div
                    v-if="candidato.poblacion_Mayor == 'Sí'"
                    class="col-12 bg-grey-5"
                    style="border-radius: 5px; color: white"
                  >
                    <div class="text-subtitle2" align="center">
                      <q-icon name="check_circle" color="pink" /> Candidatura
                      perteneciente a la población de personas mayores
                    </div>
                  </div>
                </div>
              </q-tab-panel>
              <q-tab-panel name="HISTORIA PROFESIONAL Y/O LABORAL">
                <div>
                  <hr color="purple" />
                  <div class="text-subtitle2 text-purple-3" align="center">
                    <q-icon name="school" /><span id="speak"> ESTUDIOS </span>
                  </div>
                  <hr color="purple" />
                  <div class="row q-pa-sm" id="speak">
                    <div class="col">
                      <div class="text-h6">Grado maximo de estudios:</div>
                      <div
                        class="text-subtitle1"
                        v-if="datos_Generales.grado_Maximo_Estudios != null"
                      >
                        {{ datos_Generales.grado_Maximo_Estudios }}
                      </div>
                      <span id="speak" v-else class="text-subtitle1">
                        La candidatura no proporcionó información.
                      </span>
                    </div>
                    <div class="col">
                      <div class="text-h6">Estatus:</div>
                      <div
                        v-if="datos_Generales.estatus_Grado_Estudios != null"
                        class="text-subtitle1"
                      >
                        {{ datos_Generales.estatus_Grado_Estudios }}
                      </div>
                      <span id="speak" v-else class="text-subtitle1">
                        La candidatura no proporcionó información.
                      </span>
                    </div>
                  </div>
                  <br />
                  <hr color="purple" />
                  <div class="text-subtitle2 text-purple-3" align="center">
                    <q-icon name="import_contacts" />
                    <span id="speak"> CURSOS </span>
                  </div>
                  <hr color="purple" />
                  <div class="q-pa-sm text-subtitle1 text-justify">
                    <span id="speak" v-if="formacion.formacion != null">
                      {{ formacion.formacion }}
                    </span>
                    <span id="speak" v-else>
                      La candidatura no proporcionó información.
                    </span>
                  </div>
                </div>
              </q-tab-panel>
              <q-tab-panel name="TRAYECTORIA POLÍTICA Y/O PARTICIPACIÓN SOCIAL">
                <div class="text-subtitle1 text-justify">
                  <span id="speak" v-if="datos_Generales.trayectoria != null">
                    {{ datos_Generales.trayectoria }}
                  </span>
                  <span id="speak" v-else>
                    La candidatura no proporcionó información.
                  </span>
                </div>
              </q-tab-panel>
              <q-tab-panel name="¿POR QUÉ QUIERO OCUPAR UN CARGO PÚBLICO?">
                <div class="text-subtitle1 text-justify">
                  <span
                    id="speak"
                    v-if="datos_Generales.motivo_Cargo_Publico != null"
                  >
                    {{ datos_Generales.motivo_Cargo_Publico }}
                  </span>
                  <span id="speak" v-else>
                    La candidatura no proporcionó información.
                  </span>
                </div>
              </q-tab-panel>
              <q-tab-panel name="PROPUESTAS">
                <div class="text-subtitle1 text-center text-bold q-pb-md">
                  <span id="speak"> PRINCIPALES PROPUESTAS </span>
                </div>
                <hr color="purple" />
                <div class="text-subtitle2 text-purple-3" align="center">
                  <q-icon name="import_contacts" />
                  <span id="speak"> PROPUESTA 1 </span>
                </div>
                <hr color="purple" />

                <div
                  v-if="list_Propuestas.length != 0"
                  class="q-pa-sm text-subtitle1 text-justify"
                >
                  {{ list_Propuestas[0].propuesta }}
                </div>
                <span id="speak" v-else class="text-subtitle1">
                  La candidatura no proporcionó información.
                </span>
                <hr color="purple" />
                <div class="text-subtitle2 text-purple-3" align="center">
                  <q-icon name="import_contacts" />
                  <span id="speak"> PROPUESTA 2 </span>
                </div>
                <hr color="purple" />
                <div
                  v-if="list_Propuestas.length != 0"
                  class="q-pa-sm text-subtitle1 text-justify"
                >
                  {{ list_Propuestas[1].propuesta }}
                </div>
                <span id="speak" v-else class="text-subtitle1">
                  La candidatura no proporcionó información.
                </span>
              </q-tab-panel>
              <q-tab-panel name="PROPUESTA EN MATERIA DE GÉNERO">
                <hr color="purple" />
                <div class="text-subtitle2 text-purple-3" align="center">
                  <q-icon name="import_contacts" />
                  <span id="speak">
                    PROPUESTA EN MATERIA DE GÉNERO O, EN SU CASO, DEL GRUPO EN
                    SITUACIÓN DE DISCRIMINACIÓN QUE REPRESENTO
                  </span>
                </div>
                <hr color="purple" />
                <div class="q-pa-sm text-subtitle1 text-justify">
                  <span
                    id="speak"
                    v-if="datos_Generales.propuesta_Genero != null"
                  >
                    {{
                      datos_Generales.propuesta_Genero == null
                        ? "En este apartado se mostrará la propuesta en materia de género que el candidato registro en el  cuestionario curricular"
                        : datos_Generales.propuesta_Genero
                    }}
                  </span>
                  <span id="speak" v-else>
                    La candidatura no proporcionó información.
                  </span>
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
import { useQuasar, QSpinnerCube } from "quasar";
import { ref, onMounted, defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import banner from "../../../components/bannerComp.vue";
import ReporteConoceles01 from "src/helpers/Conoceles-01";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const candidatosStore = useCardsStore();
const { candidato, formacion, datos_Generales, list_Propuestas } =
  storeToRefs(candidatosStore);
const tab = ref("DATOS GENERALES");
const tabs = ref([
  "DATOS GENERALES",
  "HISTORIA PROFESIONAL Y/O LABORAL",
  "TRAYECTORIA POLÍTICA Y/O PARTICIPACIÓN SOCIAL",
  "¿POR QUÉ QUIERO OCUPAR UN CARGO PÚBLICO?",
  "PROPUESTAS",
  "PROPUESTA EN MATERIA DE GÉNERO",
]);
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

const pdf = async (id, puesto) => {
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  await ReporteConoceles01(id, puesto);
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 5000);
  $q.loading.hide();
};

const cambiar = async (val) => {
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  candidatosStore.initDatosGenerales();
  await candidatosStore.loadCandidatoById(props.id, val == "prop" ? 0 : 1);
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
//---------------------------------------------------------------------------------
</script>
<style></style>
