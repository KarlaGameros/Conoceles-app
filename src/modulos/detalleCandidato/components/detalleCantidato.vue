<template>
  <div class="row">
    <div class="col-12 shadow-7" style="border-radius: 20px">
      <q-banner
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        style="border-radius: 20px"
      >
        <template v-slot:avatar>
          <q-icon name="error" color="purple-ieen" />
        </template>
        La información es proporcionada por las personas candidatas a la "-----"
        del Estado de Nayarit, por lo que su contenido es responsabilidad de los
        actores políticos. El Instituto Electoral del Estado de Nayarit
        únicamente apoya para su difusión.
      </q-banner>
    </div>
  </div>
  <br />
  <div class="text-h6">Distrito</div>
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 q-pa-md">
      <div class="shadow-7" style="border-radius: 20px">
        <div class="row">
          <div class="col-12 q-pa-md" align="center">
            <q-avatar size="600%">
              <q-img
                src="http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg"
              />
            </q-avatar>
          </div>
          <div class="col-12 q-pb-md" align="center">
            <div class="text-h6">ROBERTO CARLOS</div>
            <div class="text-subtitle1">Edad: 22 años</div>
            <q-avatar square size="24px">
              <img
                src="https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png"
                alt=""
              />
            </q-avatar>
            <q-avatar square size="24px">
              <img
                src="https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png"
                alt=""
              />
            </q-avatar>
            <q-avatar square size="24px">
              <img
                src="https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png"
                alt=""
              />
            </q-avatar>
            <div class="q-pt-md">
              <q-btn-toggle
                class="text-purple-ieen"
                flat
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
    <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
      <div class="q-pa-md">
        <div class="q-gutter-y-md">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="pink"
              indicator-color="pink"
              align="justify"
              narrow-indicator
            >
              <q-tab name="generales" label="Datos generales" />
              <q-tab name="estudios" label="Historia profesional y/o laboral" />
              <q-tab
                name="porque_cargo_publico"
                label="¿Por qué quiero ocupar un cargo público?"
              />
              <q-tab name="propuestas" label="Principales propuestas" />
              <q-tab
                name="propuesta_genero"
                label="PROPUESTA EN MATERIA DE GÉNERO O, EN SU CASO, DEL GRUPO EN SITUACIÓN DE DISCRIMINACIÓN QUE REPRESENTO"
              ></q-tab>
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="generales">
                <div class="row">
                  <div
                    class="col-lg-3 col-md-4 col-sm-12 col-xs-12"
                    align="center"
                  >
                    <q-avatar size="200px">
                      <q-img
                        src="http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg"
                      /> </q-avatar
                    ><br /><br />
                    <q-avatar square size="50px">
                      <img
                        src="https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png"
                        alt=""
                      />
                    </q-avatar>
                    <q-avatar square size="50px">
                      <img
                        src="https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png"
                        alt=""
                      />
                    </q-avatar>
                    <q-avatar square size="50px">
                      <img
                        src="https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png"
                        alt=""
                      />
                    </q-avatar>
                  </div>
                  <br /><br />
                  <div class="col-lg-4 col-md-8 col-sm-6 col-xs-6">
                    <div class="text-h6">Nombre (propietaria/o):</div>
                    <div class="text-subtitle1">Roberto Carlos</div>
                    <br />
                    <div class="text-h6">Edad:</div>
                    <div class="text-subtitle1">25</div>
                    <br />
                    <div class="text-h6">Sexo:</div>
                    <div class="text-subtitle1">Hombre</div>
                    <br />
                    <!-- <div
                      class="bg-purple-ieen-1"
                      style="border-radius: 10px; color: white"
                    >
                      <div class="text-subtitle2" align="center">
                        <q-icon name="school" /> MEDIOS DE CONTACTO PUBLICO
                      </div>
                    </div> -->
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
                  <div class="col-lg-4 col-md-8 col-sm-6 col-xs-6">
                    <div class="text-h6">Cargo:</div>
                    <div class="text-subtitle1">Diputado</div>
                    <br />
                    <div class="text-h6">Estado:</div>
                    <div class="text-subtitle1">Nayarir</div>
                    <br />
                    <div class="text-h6">Número de fórmula:</div>
                    <div class="text-subtitle1">12345</div>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="estudios">
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
                <div class="row">
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
                <div class="text-subtitle1 text-justify">
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

              <q-tab-panel name="porque_cargo_publico">
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

              <q-tab-panel name="propuestas">
                <div class="q-ma-md">
                  <q-scroll-area
                    visible
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 200px"
                    class="col"
                    ref="firstRef"
                    @scroll="onScrollFirst"
                  >
                    <div
                      class="col-12 bg-purple-ieen-3"
                      style="border-radius: 10px; color: white"
                    >
                      <div class="text-subtitle2" align="center">
                        <q-icon name="import_contacts" /> PROPUESTA 1
                      </div>
                    </div>
                    <div v-for="n in 100" :key="n" class="q-pa-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </q-scroll-area>

                  <q-scroll-area
                    visible
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 200px"
                    class="col"
                    ref="secondRef"
                    @scroll="onScrollSecond"
                  >
                    <div
                      class="col-12 bg-purple-ieen-3"
                      style="border-radius: 10px; color: white"
                    >
                      <div class="text-subtitle2" align="center">
                        <q-icon name="import_contacts" /> PROPUESTA 2
                      </div>
                    </div>
                    <div v-for="n in 100" :key="n" class="q-pa-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </q-scroll-area>
                </div>
              </q-tab-panel>

              <q-tab-panel name="propuesta_genero">
                <div class="text-subtitle1 text-justify">
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
import { ref } from "vue";

const tab = ref("generales");
</script>
<style></style>
