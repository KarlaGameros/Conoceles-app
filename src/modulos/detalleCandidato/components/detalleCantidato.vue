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
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 q-pa-md">
      <div class="shadow-7" style="border-radius: 20px">
        <div class="row" style="text-align: start">
          <div
            class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-md q-gutter-sm"
          >
            <q-avatar size="600%">
              <q-img
                src="http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg"
              />
            </q-avatar>
          </div>
          <div
            class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pt-md"
            align="center"
          >
            <div class="text-h6">Karla Gameros</div>
            <div class="text-subtitle1">Edad: 22 años</div>
            <q-avatar square size="24px">
              <img
                src="https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png"
                alt=""
              />
            </q-avatar>
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
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="mails" label="Datos generales" />
              <q-tab name="alarms" label="Estudios" />
              <q-tab name="movies" label="Otra informacion academica" />
              <q-tab name="movies2" label="Historia profesional" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <div class="row">
                  <div class="col-3" align="center">
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
                  <div class="col">
                    <div class="text-h6">Nombre (propietaria/o):</div>
                    <div class="text-subtitle1">Karla Jazmin Gameros López</div>
                    <br />
                    <div class="text-h6">Edad:</div>
                    <div class="text-subtitle1">22</div>
                    <br />
                    <div class="text-h6">Sexo:</div>
                    <div class="text-subtitle1">Mujer</div>
                  </div>
                  <div class="col">
                    <div class="text-h6">Cargo:</div>
                    <div class="text-subtitle1">Diputada</div>
                    <br />
                    <div class="text-h6">Estado:</div>
                    <div class="text-subtitle1">Nayarir</div>
                    <br />
                    <div class="text-h6">Número de fórmula:</div>
                    <div class="text-subtitle1">12345</div>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="alarms">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati optio sint porro. Saepe cumque perspiciatis amet,
                rerum iste tempora distinctio natus magnam possimus cupiditate,
                earum dolor animi nam corporis quasi! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Obcaecati optio sint porro.
                Saepe cumque perspiciatis amet, rerum iste tempora distinctio
                natus magnam possimus cupiditate, earum dolor animi nam corporis
                quasi!
              </q-tab-panel>

              <q-tab-panel name="movies">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati optio sint porro. Saepe cumque perspiciatis amet,
                rerum iste tempora distinctio natus magnam possimus cupiditate,
                earum dolor animi nam corporis quasi! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Obcaecati optio sint porro.
                Saepe cumque perspiciatis amet, rerum iste tempora distinctio
                natus magnam possimus cupiditate, earum dolor animi nam corporis
                quasi!
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

const tab = ref("mails");
</script>

<style></style>
