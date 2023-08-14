<template>
  <div
    v-if="listCards != ''"
    class="q-pa-md row items-start q-gutter-md flex flex-center"
  >
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
        campaña, entre otras cosas, en la Elección de Diputaciones 2024 en el
        Estado de Nayarit, lo que puede darte más información para ejercer tu
        voto, para lo cual bastará que des un click en la opción que desees
        consultar.
      </q-banner>
      <br />
      <div class="row">
        <q-btn
          @click="backCards()"
          flat
          icon="arrow_back"
          class="text-purple-ieen-1"
        ></q-btn>
        <q-input borderless dense debounce="300" placeholder="Buscar..">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>

    <q-card
      v-for="item in listCardsFiltro"
      :key="item.id"
      class="col-lg-2 col-md-2 col-sm-3 col-xs-12"
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
          <div class="col text-h6 ellipsis">Distrito {{ item.distrito }}</div>

          <q-avatar square size="24px" v-if="item.imgPartido1 != null">
            <img :src="item.imgPartido1" alt="" />
          </q-avatar>
          <q-avatar square size="24px" v-if="item.imgPartido2 != null">
            <img :src="item.imgPartido2" alt="" />
          </q-avatar>
          <q-avatar square size="24px" v-if="item.imgPartido3 != null">
            <img :src="item.imgPartido3" alt="" />
          </q-avatar>
        </div>
        <div class="row text-subtitle2 ellipsis">
          {{ item.distrito_name }}
        </div>
      </q-card-section>
      <q-card-section>
        <div>
          <q-btn-toggle
            v-model="item.selection"
            push
            glossy
            toggle-color="purple"
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
          <q-btn flat class="text-purple-ieen-1" @click="verMas(item.id, true)">
            VER MAS
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn
            @click="pdf()"
            flat
            icon="picture_as_pdf"
            class="text-purple-ieen-1"
          ></q-btn>
        </div>
      </q-card-actions>
    </q-card>
  </div>
  <div v-if="listCards == ''">
    <div style="border-radius: 20px">
      <q-banner
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        style="border-radius: 20px"
      >
        <template v-slot:avatar>
          <q-icon name="ads_click" color="purple-ieen" />
        </template>
        Para conocer la información de la candidatura el sistema permite hacer
        búsquedas por distrito, actor político, rango de edad, sexo, o bien,
        exportar la base de datos.
      </q-banner>
      <q-btn
        @click="backCards()"
        flat
        icon="arrow_back"
        class="text-purple-ieen-1"
      ></q-btn>
      <br />
    </div>
    <div class="flex flex-center">
      <img
        alt="PREP logo"
        src="../../../assets/opcion1.png"
        style="width: 618px; height: 579px"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import { onMounted, ref, watch } from "vue";
import pdfCandidato from "../../../helpers/pdf";
//---------------------------------------------------------------------------------

const cardsStore = useCardsStore();
const { listFiltroCards } = storeToRefs(cardsStore);
const filtro = ref("");

const listCardsFiltro = ref(listFiltroCards.value);
//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarMenu(true);
});

watch(listFiltroCards, (val) => {
  listCardsFiltro.value = val;
});
watch(filtro, (val) => {
  if (val.length == 0) {
    listCardsFiltro.value = listFiltroCards.value;
  } else if (val.length >= 3) {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_prop.toLowerCase().includes(val.toLowerCase())
    );
  } else {
    return;
  }
});
//---------------------------------------------------------------------------------

const verMas = async (id, valor) => {
  cardsStore.actualizarDetalle(valor);
  cardsStore.loadCard(id);
};

const pdf = async () => {
  pdfCandidato();
};

const backCards = () => {
  cardsStore.actualizarCandidatos(false);
  cardsStore.actualizarChart(true);
};

//---------------------------------------------------------------------------------
</script>

<style></style>
