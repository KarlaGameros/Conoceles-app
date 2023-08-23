<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="badge" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      En este espacio tendrás la oportunidad de conocer a las personas
      candidatas, así como su trayectoria y sus principales propuestas de
      campaña, entre otras cosas, en la Elección de Regidurias 2024 en el Estado
      de Nayarit, lo que puede darte más información para ejercer tu voto, para
      lo cual bastará que des un click en la opción que desees consultar.
    </template>
  </banner>
  <!---------------------------BUTTON BACK AND SEARCH BY NAME--------------------------->
  <div class="row q-pt-md">
    <div
      class="text-right col-lg-9 col-md-9 col-sm-9 col-xs-12 text-subtitle2 q-pr-md"
    >
      Buscar por:
      <q-radio v-model="shape" color="purple" val="prop" label="Propietario" />
      <q-radio v-model="shape" color="purple" val="sup" label="Suplente" />
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
      <q-input
        v-model="filtro"
        color="purple"
        dense
        debounce="300"
        placeholder="Ingrese un nombre"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
  <!---------------------------CARDS--------------------------->
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
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

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center">
          {{ item.selection == "prop" ? item.nombre_prop : item.nombre_sup }}
        </div>
        <div class="row text-center">
          <div class="text-caption text-grey col-6">
            EDAD:
            {{ item.selection == "prop" ? item.edad_prop : item.edad_sup }}
          </div>
          <div class="text-caption text-grey col-6">
            SEXO:
            {{ item.selection == "prop" ? item.sexo_prop : item.sexo_sup }}
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row text-overline flex-center">
          Municipio de {{ item.municipio_name }}
        </div>
        <div class="row text-overline flex-center">
          Demarcación {{ item.demarcacion_Id }}
        </div>
        <div class="row no-wrap items-center flex-center">
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

      <q-separator />

      <q-card-actions>
        <div class="col-8">
          <q-btn
            :to="{ name: 'detalleRegidurias' }"
            flat
            class="text-purple-ieen-1"
            @click="verMas(item.id)"
          >
            VER MÁS
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn
            @click="pdf()"
            flat
            icon="picture_as_pdf"
            class="text-purple-ieen-1"
          >
            <q-tooltip>PDF de ambos candidatos</q-tooltip>
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
  <!---------------------------PAGINACION--------------------------->
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="pageActual"
      :max="paginas"
      color="purple"
      input
      input-class="text-purple"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import { onMounted, ref, watch } from "vue";
import pdfCandidato from "../../../helpers/pdf";
import banner from "../../../components/bannerComp.vue";
import { useRouter } from "vue-router";

//---------------------------------------------------------------------------------
const router = useRouter();
const candidatosStore = useCardsStore();
const { listFiltroCards } = storeToRefs(candidatosStore);
const filtro = ref("");
const listCardsFiltro = ref(listFiltroCards.value);
const shape = ref("prop");
const isSmallScreen = ref(window.matchMedia("(max-width: 768px)").matches);
let pageActual = ref("");
let paginas = ref("");
//---------------------------------------------------------------------------------

onMounted(() => {
  candidatosStore.actualizarMenu(true);
  candidatosStore.actualizarButtonColor(true);
  pageActual.value = 1;
});

//---------------------------------------------------------------------------------

watch(
  () => window.innerWidth,
  (width) => {
    isSmallScreen.value = width <= 768;
  }
);
watch(listFiltroCards, (val) => {
  listCardsFiltro.value = val;
});
watch(filtro, (val) => {
  if (val.length == 0) {
    mostrarElementosPage(pageActual.value);
  } else if (val.length >= 3 && shape.value == "prop") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_prop.toLowerCase().includes(val.toLowerCase())
    );
  } else if (val.length >= 3 && shape.value == "sup") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_sup.toLowerCase().includes(val.toLowerCase())
    );
  } else {
    return;
  }
});
watch(shape, (val) => {
  listCardsFiltro.value.forEach((item) => {
    item.selection = val;
  });
});
//---------------------------------------------------------------------------------
//PAGINATION
const elementosPorPage = 8;
watch(pageActual, (val) => {
  const pag = listFiltroCards.value.length / elementosPorPage;
  if (pag % 1 !== 0) {
    paginas.value = pag + 1;
  } else {
    paginas.value = pag;
  }
  mostrarElementosPage(val);
});
const mostrarElementosPage = (pagina) => {
  const inicio = (pagina - 1) * elementosPorPage;
  const fin = inicio + elementosPorPage;
  const elementos = listFiltroCards.value.slice(inicio, fin);
  listCardsFiltro.value = elementos;
};
//---------------------------------------------------------------------------------

const verMas = async (id) => {
  candidatosStore.loadCard(id);
  router.push({ name: "detalleRegidurias", params: { id: id } });
};

const pdf = async () => {
  pdfCandidato();
};

//---------------------------------------------------------------------------------
</script>

<style></style>
