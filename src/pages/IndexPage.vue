<template>
  <template v-if="!fechaInicio">
    <q-page class="row flex flex-center">
      <!-- <div class="text-h2 text-bold text-grey-6 text-center">
        Próximamente, "Candidatos y Candidatas Conóceles" Nayarit 2024.
      </div>
      <div class="imgHome col-lg-6 col-md-5 col-sm-12 col-xs-12">
        <img
          alt="PREP logo"
          src="../assets/ConocelesN.png"
          :style="
            $q.screen.xs
              ? 'width: 400px; height: 350px'
              : 'width: 650px; height: 550px'
          "
        />
      </div> -->
      <div class="col-12 text-center">
        <img
          alt="PREP logo"
          src="../assets/Conoceles.gif"
          :style="
            $q.screen.xs
              ? 'width: 100%; height: auto'
              : 'width: 60%; height: auto'
          "
        />
      </div>
    </q-page>
  </template>
  <template v-else>
    <q-page class="row flex flex-center">
      <div v-if="!$q.screen.xs" class="absolute-top-right text-center">
        <div class="text-subtitle1 q-pr-md text-purple-ieen">
          <strong class="text-h6 text-bold"> {{ consultas }} </strong>
        </div>
      </div>
      <div v-else class="q-pa-sm text-center">
        <q-card>
          <div class="text-h6 text-purple-ieen">{{ consultas }}</div>
        </q-card>
      </div>
      <br /><br /><br />
      <div class="col-1"></div>
      <div class="text-center col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="text-h4 text-bold text-purple-ieen-1" id="speak">
          Candidatas y Candidatos,
        </div>
        <div class="text-h2 text-bold text-purple-ieen-1" id="speak">
          Conóceles
        </div>
        <div class="text-subtitle2 center text-justify q-pa-md" id="speak">
          Consulta la trayectoria política y profesional, las propuestas de
          campaña y la autoidentificación a determinados grupos en situación de
          discriminación de las candidatas y los candidatos que participan en el
          Proceso Electoral Local Ordinario 2024 en Nayarit.
        </div>
      </div>
      <div class="imgHome col-lg-6 col-md-5 col-sm-12 col-xs-12">
        <img
          alt="PREP logo"
          src="../assets/ConocelesN.png"
          :style="
            $q.screen.xs
              ? 'width: 400px; height: 350px'
              : 'width: 650px; height: 550px'
          "
        />
      </div>
    </q-page>
  </template>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar, date } from "quasar";
import { useCardsStore } from "src/stores/cards-store";
import { useConfiguracionStore } from "src/stores/configuracion-store";
import { onMounted, ref } from "vue";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const cardsStore = useCardsStore();
const configuracionStore = useConfiguracionStore();
const { consultas } = storeToRefs(configuracionStore);
const { loading } = storeToRefs(cardsStore);
const timeStamp = Date.now();
const dateActual = ref(date.formatDate(timeStamp, "YYYY-MM-DD"));
const fechaInicio = ref(dateActual.value < "2024-04-29" ? false : true);

//---------------------------------------------------------------------------------

onMounted(async () => {
  cardsStore.actualizarMenu(false);
  await configuracionStore.loadVisitas();
  // const url =
  //   "https://content-analyticsdata.googleapis.com/v1beta/properties/429912171:runReport?alt=json";
  // const token =
  //   "ya29.a0Ad52N38cq1JOten1BlKAfSQ50evwedlbVPGFjto1VvlHT5WbZgOY5dtOv7YaNvduOT7AMtOlK58twGWDoGBlmfzcGbGgmwJPodw11GBhZH_BjtjdVSGjQ9KJ-FKl4RJI1mq0t3-lTebbqjvAkc2gW5Aqdmr8z5mLwmRc__8nadYE-hFgl5GreisL6_do_f17mC2KXLBUqoB5yAvwvFGgyzqplD_aiwtXScwWCForBfpRUms6uhf6YE8eK_Y1lNWSPdeUoBtHGbbGVrVBB4LheRU2wlnQSeQqduUnwnqvVrMigYbJEbySBHCzsLualwH7Ce-h8pv0qoI_qTMKWXXlg3rRZVedJ6GX4S3SIroBmakpL0XWM1T9PWCEbFLt8yqIzTusbtrzT0Wbe8eqcigDnggFof6YbE8aCgYKATgSAQ4SFQHGX2MiNQrlQCo9prf1Qy34v0CRRg0422";

  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  //   body: JSON.stringify({
  //     metrics: [{ name: "active7DayUsers" }],
  //     dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => (visitorCount.value = data.rows[0].metricValues))
  //   .catch((error) => console.error(error));
});

//---------------------------------------------------------------------------------
</script>

<style scoped>
@media screen and (max-width: 780px) {
  .imgHome {
    height: 300px;
    min-width: 310px;
    max-width: 800px;
  }
}
</style>
