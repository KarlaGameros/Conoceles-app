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
      <div class="q-pa-lg shadow-7" style="border-radius: 20px">
        <div style="text-align: center">
          <img
            src="../../../assets/user.png"
            style="width: 100px; display: block; margin: 0 auto"
          />
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati optio sint porro. Saepe cumque perspiciatis amet,
                rerum iste tempora distinctio natus magnam possimus cupiditate,
                earum dolor animi nam corporis quasi!
                <br /><br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati optio sint porro. Saepe cumque perspiciatis amet,
                rerum iste tempora distinctio natus magnam possimus cupiditate,
                earum dolor animi nam corporis quasi!
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
