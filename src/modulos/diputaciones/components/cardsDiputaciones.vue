<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="badge" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      En este espacio tendrás la oportunidad de conocer a las personas
      candidatas, así como su trayectoria y sus principales propuestas de
      campaña, entre otras cosas, en la Elección de Diputaciones 2024 en el
      Estado de Nayarit, lo que puede darte más información para ejercer tu
      voto, para lo cual bastará que des un click en la opción que desees
      consultar.
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
  <div v-if="list_Filtro_Candidatos.length == 0">
    <div class="text-h4 text-center text-grey-7">Seleccione filtros</div>
    <q-img src="../../../assets/Imagen2.jpg" />
  </div>
  <div v-else class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      v-for="item in listCardsFiltro"
      :key="item"
      class="col-lg-2 col-md-2 col-sm-3 col-xs-12"
      flat
      bordered
      style="width: 255px"
    >
      <div class="q-pt-md" style="text-align: center">
        <div class="q-pa-md q-gutter-sm">
          <q-avatar size="150px">
            <q-img
              :src="
                item.selection == 'prop'
                  ? item.url_Foto_Propietario
                  : item.url_Foto_Suplente
              "
            />
          </q-avatar>
        </div>
      </div>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center">
          {{
            item.selection == "prop"
              ? item.nombre_Completo_Propietario
              : item.nombre_Completo_Suplente
          }}
        </div>
        <div class="row text-center">
          <div class="text-caption text-grey col-6">
            EDAD:
            {{ item.selection == "prop" ? item.edad_prop : item.edad_sup }}
          </div>
          <div class="text-caption text-grey col-6">
            SEXO:
            {{
              item.selection == "prop"
                ? item.sexo_Propietario
                : item.sexo_Suplente
            }}
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Distrito {{ item.distrito }}</div>

          <q-avatar
            square
            size="24px"
            v-if="item.url_Logo_Partido_Propietario != null"
          >
            <img
              :src="
                item.selection == 'prop'
                  ? item.url_Logo_Partido_Propietario
                  : item.url_Logo_Partido_Suplente
              "
              alt=""
            />
          </q-avatar>
        </div>
        <div class="row text-subtitle2 ellipsis">
          {{ item.distrito }}
        </div>
      </q-card-section>
      <q-card-section>
        <div>
          <q-btn-toggle
            v-model="item.selection"
            push
            glossy
            toggle-color="purple-4"
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
            :to="{ name: 'diputacionesDetalle' }"
            flat
            class="text-purple-ieen-1"
            @click="verMas(item.id)"
          >
            VER MÁS
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn
            :disable="activar_pdf == true"
            @click="pdf()"
            flat
            icon="picture_as_pdf"
            color="purple-4"
          >
            <q-tooltip>PDF de ambos candidatos</q-tooltip>
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn
            :disable="activar_pdf == true"
            @click="pdf()"
            flat
            icon="picture_as_pdf"
            color="purple-4"
          >
            <q-tooltip>PDF del candidado seleccionado</q-tooltip>
          </q-btn>
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
import { useQuasar } from "quasar";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useCardsStore } from "src/stores/cards-store";
import pdfCandidato from "../../../helpers/pdf";
import banner from "../../../components/bannerComp.vue";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const cardsStore = useCardsStore();
const router = useRouter();
const { list_Filtro_Candidatos, listFiltroCards } = storeToRefs(cardsStore);
const filtro = ref("");
const listCardsFiltro = ref();
const shape = ref("prop");
let pageActual = ref("");
let paginas = ref("");
const activar_pdf = ref(false);

//---------------------------------------------------------------------------------

onMounted(() => {
  cardsStore.actualizarMenu(true);
  pageActual.value = 1;
  cardsStore.filtrarCandidatos("Diputaciones");
});
console.log("entrooooooooo");
//---------------------------------------------------------------------------------

watch(listFiltroCards, (val) => {
  listCardsFiltro.value = val;
});

watch(filtro, (val) => {
  if (val.length == 0) {
    mostrarElementosPage(pageActual.value);
  } else if (val.length >= 3 && shape.value == "prop") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Propietario.toLowerCase().includes(val.toLowerCase())
    );
  } else if (val.length >= 3 && shape.value == "sup") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Suplente.toLowerCase().includes(val.toLowerCase())
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

const elementosPorPage = 3;
watch(pageActual, (val) => {
  const pag = list_Filtro_Candidatos.value.length / elementosPorPage;
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
  const elementos = list_Filtro_Candidatos.value.slice(inicio, fin);
  listCardsFiltro.value = elementos;
};

//---------------------------------------------------------------------------------

const verMas = async (id) => {
  $q.loading.show();
  await cardsStore.loadCandidatoById(id);
  router.push({
    name: "diputacionesDetalle",
    params: { id: id },
  });
  $q.loading.hide();
};

const pdf = async () => {
  pdfCandidato();
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 5000);
};
</script>

<style></style>
