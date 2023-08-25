<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="error" color="purple-ieen" />
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
      <q-avatar class="bg-purple-ieen-1" text-color="white"
        ><q-btn :to="{ name: 'cardsRegidurias' }" flat icon="reply">
          <q-tooltip>Regresar</q-tooltip>
        </q-btn></q-avatar
      >
      Municipio de {{ card.municipio_name }} - Demarcación
      {{ card.demarcacion_Id }}
    </div>
    <q-btn
      :disable="activar_pdf"
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
              <q-img :src="card.selection == 'prop' ? card.prop : card.sup" />
            </q-avatar>
          </div>
          <div class="col-12 q-pb-md" align="center">
            <div class="text-h6">
              {{
                card.selection == "prop" ? card.nombre_prop : card.nombre_sup
              }}
            </div>

            <q-avatar square size="24px" v-if="card.imgPartido1 != null">
              <img :src="card.imgPartido1" alt="" />
            </q-avatar>
            <q-avatar square size="24px" v-if="card.imgPartido2 != null">
              <img :src="card.imgPartido2" alt="" />
            </q-avatar>
            <q-avatar square size="24px" v-if="card.imgPartido3 != null">
              <img :src="card.imgPartido3" alt="" />
            </q-avatar>
            <div class="q-pt-md">
              <q-btn-toggle
                v-model="card.selection"
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
              name="¿POR QUÉ QUIERO OCUPAR UN CARGO PUBLICO?"
              label="¿POR QUÉ QUIERO OCUPAR UN CARGO PUBLICO?"
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
              active-color="pink"
              indicator-color="pink"
              align="justify"
              narrow-indicator
            >
              <q-tab name="DATOS GENERALES" label="DATOS GENERALES" />
              <q-tab
                name="HISTORIA PROFESIONAL Y/O LABORAL"
                label="HISTORIA PROFESIONAL Y/O LABORAL"
              />
              <q-tab
                name="¿POR QUÉ QUIERO OCUPAR UN CARGO PUBLICO?"
                label="¿POR QUÉ QUIERO OCUPAR UN CARGO PUBLICO?"
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
                        :src="card.selection == 'prop' ? card.prop : card.sup"
                      /> </q-avatar
                    ><br /><br />
                    <q-avatar
                      square
                      size="50px"
                      v-if="card.imgPartido1 != null"
                    >
                      <img :src="card.imgPartido1" alt="" />
                    </q-avatar>
                    <q-avatar
                      square
                      size="50px"
                      v-if="card.imgPartido2 != null"
                    >
                      <img :src="card.imgPartido2" alt="" />
                    </q-avatar>
                    <q-avatar
                      square
                      size="50px"
                      v-if="card.imgPartido3 != null"
                    >
                      <img :src="card.imgPartido3" alt="" />
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
                        card.selection == "prop"
                          ? card.nombre_prop
                          : card.selection == "sup"
                          ? card.nombre_sup
                          : card.selection === "propSin"
                          ? card.nombre_prop_sin
                          : card.nombre_sup_sin
                      }}
                    </div>
                    <div class="text-h6">Edad:</div>
                    <div class="text-subtitle1">
                      {{
                        card.selection == "prop"
                          ? card.edad_prop
                          : card.selection == "sup"
                          ? card.edad_sup
                          : card.selection === "propSin"
                          ? card.edad_prop_sin
                          : card.edad_sup_sin
                      }}
                    </div>
                    <div class="text-h6">Sexo:</div>
                    <div class="text-subtitle1">
                      {{
                        card.selection == "prop"
                          ? card.sexo_prop
                          : card.selection == "sup"
                          ? card.sexo_sup
                          : card.selection === "propSin"
                          ? card.sexo_prop_sin
                          : card.sexo_sup_sin
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
                      {{
                        card.selection == "prop"
                          ? card.cargo_prop
                          : card.selection == "sup"
                          ? card.cargo_sup
                          : card.selection === "propSin"
                          ? card.cargo_prop_sin
                          : card.cargo_sup_sin
                      }}
                    </div>
                    <div class="text-h6">Estado:</div>
                    <div class="text-subtitle1">
                      {{
                        card.selection == "prop"
                          ? card.estado_prop
                          : card.selection == "sup"
                          ? card.estado_sup
                          : card.selection === "propSin"
                          ? card.estado_prop_sin
                          : card.estado_sup_sin
                      }}
                    </div>
                    <div class="text-h6">Número de fórmula:</div>
                    <div class="text-subtitle1">
                      {{
                        card.selection == "prop"
                          ? card.formula_prop
                          : card.selection == "sup"
                          ? card.formula_sup
                          : card.selection === "propSin"
                          ? card.formula_prop_sin
                          : card.formula_sup_sin
                      }}
                    </div>
                    <br />
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
                    </div>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="HISTORIA PROFESIONAL Y/O LABORAL">
                <div class="text-subtitle1 text-justify">
                  Estudié la primaria en el Colegio Americano de Acuña.
                  Secundaria 2 años en la Secundaria numero 1 en ciudad Acuña,
                  Coahuila. Preparatoria en el CBTIS 54 y Instituto Piedras
                  Negras Don Bosco de la ciudad de Piedras Negras, Coahuila.
                  Licenciatura en la Facultad de Ciencias de la Administración
                  de la Universidad Autónoma de Coahuila campus Saltillo. Al
                  graduarme me fui a la ciudad de Dallas, Texas a hacer un curso
                  intensivo de Inglés para posteriormente ingresar a trabajar al
                  Consulado de México en Del Río, Texas a través de la
                  Secretaría de Relaciones Exteriores, lugar donde laboré por 8
                  años. En el 2009 ingreso como Delegado de la Secretaría de
                  Fomento Agropecuario del Gobierno del Estado de Coahuila de
                  Zaragoza. En el 2014 me tomo protesta como regidor por
                  representación proporcional en el ayuntamiento 2014 - 2017. En
                  el año 2018 ingreso como responsable de programas sociales del
                  Gobierno del Estado en Acuña, Coahuila y en el año de 2022
                  como Secretario del Ayuntamiento hasta marzo de 2023.
                </div>
                <br />
                <div
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
                    <div class="text-subtitle1">Licenciatura</div>
                  </div>
                  <div class="col">
                    <div class="text-h6">Estatus:</div>
                    <div class="text-subtitle1">Cedula</div>
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
                <div class="q-pa-sm text-subtitle1 text-justify">
                  Cursos Tomados por la Secretaría de Relaciones Exteriores en
                  el año de 2002 sobre ingreso de datos al sistema de Protección
                  Consular de igual manera cursos por la misma Secretaría de
                  Relaciones Exteriores en el manejo de la Partida
                  Presupuestaria 7502. En el año 2003 en la forma privada
                  diversos cursos para el manejo y administración de ranchos
                  ganaderos curso para el manejo del programa de Activos
                  Productivos de la Secretaría de Fomento Agropecuario al igual
                  que el manejo del programa de Fondo de Fomento Agropecuario
                  del Estado de Coahuila en el año 2010 cursos para una buena
                  administración y desempeño publico en el año de 2014 curso
                  para el mejor desempeño como servidor publico en el año de
                  2015. Curso de un Cabildo Exitoso en el a 2017
                </div>
              </q-tab-panel>

              <q-tab-panel name="¿POR QUÉ QUIERO OCUPAR UN CARGO PUBLICO?">
                <div class="text-subtitle1 text-justify">
                  Aspiro ser la Primera Gobernadora del Estado de México, porque
                  quiero que los mexiquenses tengan una mejor calidad de vida y
                  solo unidos podemos dar resultados; no se trata de una
                  posición, de un cargo o de tener poder, sino de la oportunidad
                  de hacer una diferencia en la vida de las familias mexiquenses
                  y en la historia de nuestro Estado. Siempre he creído que, si
                  tenemos la oportunidad tenemos también la responsabilidad de
                  contribuir a mejorar nuestro entorno, de dejar el mundo mejor
                  de cómo lo encontramos, de aportar a los demás y no sólo ver
                  por nuestros propios intereses. Yo he encontrado el sentido de
                  mi vida en el servicio público y ahora, como madre, mi
                  compromiso es mayor por el Estado de México. Y creo que el
                  gobierno es la vía más fácil, la mejor carretera, para lograr
                  un mayor impacto, que permite alcanzar a un gran número de
                  personas de manera permanente. Los cambios que se logran desde
                  el gobierno, si se hacen bien, con la participación de la
                  sociedad podemos transformar la realidad de las familias
                  mexiquenses, para toda la vida. En este momento, es urgente
                  construir un gobierno de reconciliación, porque hay una
                  corriente que busca separar y poner a los mexiquenses unos
                  contra otros, quieren lucrar con el enojo y el cansancio de la
                  sociedad para beneficiarse políticamente, pero sin ofrecer
                  rutas para resolver los problemas de fondo, quieren dividirnos
                  entre trabajadores y empleadores o en viejas categorías de
                  clase que poco ayudan, yo estoy convencida que los mexiquenses
                  no logramos más confrontándonos y divididos, al contrario,
                  somos mejores si trabajamos unidos y en equipo.
                </div>
              </q-tab-panel>

              <q-tab-panel name="PROPUESTAS">
                <div class="text-subtitle1 text-center text-bold q-pb-md">
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
                <div class="q-pa-sm text-subtitle1 text-justify">
                  El seguir fomentando el Comercio Local de mi Ciudad Acuña,
                  impulsar los ejes carreteros que traerán prosperidad no
                  únicamente para Acuña si no también para Jiménez y Zaragoza.
                  Trabajar de la mano con los Alcaldes de los tres municipios
                  que integran el Distrito 01, impulsar la contsrucción de un
                  carril de carga y sentri en el puente internacional Acuña -
                  Del Río.
                </div>
                <div
                  class="col-12 bg-purple-ieen-3"
                  style="border-radius: 10px; color: white"
                >
                  <div class="text-subtitle2" align="center">
                    <q-icon name="import_contacts" /> PROPUESTA 2
                  </div>
                </div>
                <div class="q-pa-sm text-subtitle1 text-justify">
                  Para el mejoramiento al campo mayor recurso, que los recursos
                  al campo lleguen en tiempo y forma cuando se necesiten, mayor
                  recurso para la seguridad, educación, salud y deportes de
                  nuestro Distrito. Mayores espacios deportivos, más recurso
                  para los sistemas DIF del Distrito, pláticas en las colonias a
                  través de Psicólogos, etc.
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
                  Las mujeres hemos sido la voz de la justicia, la igualdad y la
                  inclusión, hemos logrado grandes avances y aún hay mucho por
                  hacer. Como Gobernadora del Estado de México, me comprometo a
                  impulsar la igualdad de género en todos los ámbitos de nuestra
                  sociedad: a. Impulsaré la participación económica y educativa
                  de las mujeres: Incrementaremos las oportunidades laborales y
                  educativas, promoviendo la corresponsabilidad en el cuidado de
                  la primera infancia mediante permisos de paternidad extendidos
                  y becas para estudiantes universitarias talentosas. b.
                  Combatiré la brecha salarial de género: Exigiremos a las
                  empresas realizar auditorías para analizar la brecha salarial
                  y elaboraremos planes de acción junto a los sindicatos para
                  erradicar prácticas retributivas injustas, asegurando un
                  salario igual para un trabajo igual. c. Reduciré la
                  informalidad laboral: Implementaremos medidas de mejora
                  regulatoria para disminuir la diferencia en la tasa de
                  informalidad entre mujeres y hombres, especialmente en
                  unidades económicas con establecimiento fijo. d. Crearé un
                  Sistema Integral de Cuidados: Reconoceremos y valoraremos el
                  trabajo doméstico y de cuidado no remunerado de las mujeres,
                  mediante servicios públicos, infraestructura y políticas de
                  protección social, sensibilizando a empleadores sobre la
                  incorporación de trabajadoras del hogar al IMSS. e.
                  Erradicaremos la violencia obstétrica: Implementaremos un
                  nuevo modelo de atención a mujeres durante el embarazo, parto
                  y puerperio con perspectiva de género y derechos humanos..
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

//---------------------------------------------------------------------------------

const candidatosStore = useCardsStore();
const { card } = storeToRefs(candidatosStore);
const tab = ref("DATOS GENERALES");
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
const open_tab = ref(false);
const activar_pdf = ref(false);
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

const pdf = async () => {
  pdfCandidato();
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 5000);
};

//---------------------------------------------------------------------------------
</script>
<style></style>
