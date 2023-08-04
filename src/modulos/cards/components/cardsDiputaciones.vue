<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <div style="border-radius: 20px">
      <q-banner
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        style="border-radius: 20px"
      >
        <template v-slot:avatar>
          <q-icon name="badge" color="purple-ieen" />
        </template>
        En este espacio tendrás la oportunidad de conocer a las personas
        candidatas, así como su trayectoria y sus principales propuestas de
        campaña, entre otras cosas, lo que puede darte más información para
        ejercer tu voto, para lo cual bastará que des un click en la opción que
        desees consultar.
      </q-banner>
      <br />
    </div>

    <q-card
      v-for="item in cards"
      :key="item.id"
      @mouseover="item.visible = true"
      @mouseout="item.visible = false"
      class="my-card col-lg-2 col-md-2 col-sm-3 col-xs-12"
      flat
      bordered
      style="width: 255px"
    >
      <div class="q-pt-md" style="text-align: center">
        <div class="q-pa-md q-gutter-sm">
          <q-avatar size="150px">
            <q-img :src="item.selection == 'prop' ? item.prop : item.sup" />
          </q-avatar>
        </div>
      </div>

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">DISTRITO</div>
          <q-avatar square size="24px">
            <img :src="item.imgPartido1" alt="" />
          </q-avatar>
          <q-avatar square size="24px">
            <img :src="item.imgPartido2" alt="" />
          </q-avatar>
          <q-avatar square size="24px">
            <img :src="item.imgPartido3" alt="" />
          </q-avatar>
        </div>
      </q-card-section>
      <q-card-section>
        <div>
          <q-btn-toggle
            v-model="item.selection"
            class="text-purple-ieen"
            flat
            :options="[
              { label: 'Propietario', value: 'prop' },
              { label: 'Suplente', value: 'sup' },
            ]"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{ item.selection == "prop" ? item.nombre_prop : item.nombre_sup }}
        </div>
        <div class="text-caption text-grey">
          EDAD: {{ item.selection == "prop" ? item.edad_prop : item.edad_sup }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="col-10">
          <q-btn flat color="pink" to="/detalleCantidato"> VER MAS </q-btn>
        </div>
        <div class="col-2">
          <q-btn flat icon="picture_as_pdf" color="pink"></q-btn>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const cards = ref([
  {
    id: 1,
    visible: false,
    selection: "prop",
    prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
    nombre_prop: "CARLOS ROBERTO",
    edad_prop: "25 años",
    sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
    nombre_sup: "MARIA LOPEZ",
    edad_sup: "30 años",
    imgPartido1:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png",
    imgPartido2:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
    imgPartido3:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
  },
  {
    id: 2,
    visible: false,
    selection: "prop",
    prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
    nombre_prop: "CARLOS ROBERTO",
    edad_prop: "25 años",
    sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
    nombre_sup: "MARIA LOPEZ",
    edad_sup: "30 años",
    imgPartido1:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png",
    imgPartido2:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
    imgPartido3:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
  },
  {
    id: 3,
    visible: false,
    selection: "prop",
    prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
    nombre_prop: "CARLOS ROBERTO",
    edad_prop: "25 años",
    sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
    nombre_sup: "MARIA LOPEZ",
    edad_sup: "30 años",
    imgPartido1:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png",
    imgPartido2:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
    imgPartido3:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
  },
  {
    id: 4,
    visible: false,
    selection: "prop",
    prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
    nombre_prop: "CARLOS ROBERTO",
    edad_prop: "25 años",
    sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
    nombre_sup: "MARIA LOPEZ",
    edad_sup: "30 años",
    imgPartido1:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png",
    imgPartido2:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
    imgPartido3:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
  },
  {
    id: 5,
    visible: false,
    selection: "prop",
    prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
    nombre_prop: "CARLOS ROBERTO",
    edad_prop: "25 años",
    sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
    nombre_sup: "MARIA LOPEZ",
    edad_sup: "30 años",
    imgPartido1:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png",
    imgPartido2:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
    imgPartido3:
      "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
  },
]);
</script>

<style></style>
