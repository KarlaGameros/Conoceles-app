<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="badge" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      En este espacio tendrás la oportunidad de conocer a las personas
      candidatas, así como su trayectoria y sus principales propuestas de
      campaña, entre otras cosas, en la Elección de Presidentes y Sindicos 2024
      en el Estado de Nayarit lo que puede darte más información para ejercer tu
      voto, para lo cual bastará que des un click en la opción que desees
      consultar.
    </template>
  </banner>
  <!---------------------------BUTTON BACK AND SEARCH BY NAME--------------------------->
  <div class="row q-pt-md">
    <div
      class="col-lg-9 col-md-9 col-sm-9 col-xs-12 text-subtitle2 text-right q-pr-md"
    >
      Buscar por candidatura:
      <q-btn-dropdown
        :label="options || dropdownOptions[0].label"
        color="purple-ieen"
      >
        <q-list>
          <q-item
            v-for="option in dropdownOptions"
            :key="option.value"
            v-model="options"
            clickable
            @click="selectOptionFiltro(option)"
            v-close-popup
          >
            <q-item-section>
              <q-item-label>{{ option.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div class="col-lg-3 col-md-2 col-sm-3 col-xs-12">
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
  <template v-if="listFiltroCards.length == 0"
    ><div class="absolute-bottom-center text-h6 text-grey-8">
      No hay información con los filtros seleccionados...
    </div>
  </template>
  <template v-else>
    <div class="q-pa-md row items-start q-gutter-md flex flex-center">
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
            <q-avatar size="100px">
              <q-img
                :src="
                  item.selection == 'prop'
                    ? item.url_Foto_Propietario
                    : item.selection == 'sup'
                    ? item.url_Foto_Suplente
                    : item.selection == 'propSin'
                    ? item.url_Foto_Propietario_2
                    : item.url_Foto_Suplente_2
                "
              />
            </q-avatar>
          </div>
        </div>
        <q-card-section class="q-pt-none">
          <div class="text-subtitle2 text-center text-grey-9">
            {{
              item.selection == "prop"
                ? item.nombre_Completo_Propietario
                : item.selection == "sup"
                ? item.nombre_Completo_Suplente
                : item.selection == "propSin"
                ? item.nombre_Completo_Propietario_2
                : item.nombre_Completo_Suplente_2
            }}
          </div>
          <div class="text-subtitle2 text-center text-grey-8">
            {{
              item.selection == "prop"
                ? item.mote_Propietario
                : item.selection == "sup"
                ? item.mote_Suplente
                : item.selection == "propSin"
                ? item.mote_Propietario_2
                : item.mote_Suplente_2
            }}
          </div>
          <div class="row text-center">
            <div class="text-caption text-grey col-6">
              EDAD:
              {{
                item.selection == "prop"
                  ? item.edad_Propietario
                  : item.selection == "sup"
                  ? item.edad_Suplente
                  : item.selection == "propSin"
                  ? item.edad_Propietario
                  : item.edad_Suplente_2
              }}
            </div>
            <div class="text-caption text-grey col-6">
              Género:
              {{
                item.selection == "prop"
                  ? item.sexo_Propietario
                  : item.selection == "sup"
                  ? item.sexo_Suplente
                  : item.selection == "propSin"
                  ? item.sexo_Propietario_2
                  : item.sexo_Suplente_2
              }}
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="row text-subtitle2 flex-center text-grey-9">
            Municipio de {{ item.municipio }}
          </div>
          <div class="row no-wrap items-center flex-center">
            <q-avatar square style="width: auto; height: 28px">
              <img
                :src="
                  item.is_Coalicion == true
                    ? item.url_Logo_Coalicion
                    : item.selection == 'prop'
                    ? item.url_Logo_Partido_Propietario
                    : item.url_Logo_Partido_Suplente
                "
                alt=""
              />
            </q-avatar>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-xs">
          <div class="text-subtitle2 text-center q-pt-lg text-grey-9">
            CANDIDATURA {{ item.tipo_Candidato }}
          </div>
          <div class="q-mb-md" style="text-align: center">
            <q-btn-dropdown
              color="purple-ieen"
              :label="
                item.selection == 'prop'
                  ? 'Presidencia propietaria'
                  : item.selection == 'sup'
                  ? 'Presidencia suplente'
                  : item.selection == 'propSin'
                  ? 'Sindicatura propietaria'
                  : 'Sindicatura suplente' || dropdownOptions[0].label
              "
            >
              <q-list>
                <q-item
                  v-for="option in dropdownOptions"
                  :key="option.value"
                  clickable
                  @click="selectOption(item, option)"
                  v-close-popup
                >
                  <q-item-section>
                    <q-item-label>{{ option.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <div class="col-10">
            <q-btn
              :to="{ name: 'detallePresidenciaSindicatura' }"
              flat
              class="text-purple-ieen"
              @click="
                verMas(
                  item.id,
                  item.selection == 'prop'
                    ? 0
                    : item.selection == 'sup'
                    ? 1
                    : item.selection == 'propSin'
                    ? 2
                    : 3
                )
              "
            >
              VER MÁS
            </q-btn>
          </div>
          <div class="col-2">
            <q-btn
              :disable="activar_pdf == true"
              @click="
                pdf(
                  item.id,
                  item.selection == 'prop'
                    ? 0
                    : item.selection == 'sup'
                    ? 1
                    : item.selection == 'propSin'
                    ? 2
                    : 3
                )
              "
              flat
              icon="picture_as_pdf"
              color="purple-ieen"
            >
              <q-tooltip>PDF</q-tooltip>
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
      <q-select
        color="purple"
        outlined
        dense
        v-model="elementosPorPage"
        :options="num_Paginas"
      ></q-select>
    </div>
  </template>
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref, watch, defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import { useRouter } from "vue-router";
import pdfCandidato from "../../../helpers/pdf";
import banner from "../../../components/bannerComp.vue";
import ReporteConoceles01 from "src/helpers/Conoceles-01";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const candidatosStore = useCardsStore();
const { listFiltroCards, list_Candidatos_By_Eleccion } =
  storeToRefs(candidatosStore);
const dropdownOptions = [
  { label: "Presidencia propietaria", value: "prop" },
  { label: "Presidencia suplente", value: "sup" },
  { label: "Sindicatura propietaria", value: "propSin" },
  { label: "Sindicatura suplente", value: "supSin" },
];
const options = ref("");
const filtro = ref("");
const listCardsFiltro = ref();
const router = useRouter();
let pageActual = ref("");
let paginas = ref("");
const activar_pdf = ref(false);
const elementosPorPage = ref(5);
const num_Paginas = ref([5, 10, 15, 25, 50]);
const props = defineProps({
  eleccion_Id: { type: String, required: true },
});

//---------------------------------------------------------------------------------

onMounted(() => {
  candidatosStore.actualizarMenu(true);
  candidatosStore.actualizarButtonColor(true);
  options.value = "Presidencia propietaria";
  cargarData();
});

//---------------------------------------------------------------------------------

const cargarData = async () => {
  $q.loading.show();
  await candidatosStore.loadCandidatosByEleccion(props.eleccion_Id);
  $q.loading.hide();
};

watch(listFiltroCards, (val) => {
  if (val != null) {
    //listCardsFiltro.value = val;
    if (val.length > 0) {
      pageActual.value = 1;
      cargarPaginas();
    }
  }
});

watch(filtro, (val) => {
  if (val.length == 0) {
    mostrarElementosPage(pageActual.value);
  } else if (val.length >= 3 && options.value == "Presidencia propietaria") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Propietario.toLowerCase().includes(val.toLowerCase())
    );
  } else if (val.length >= 3 && options.value == "Presidencia suplente") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Suplente.toLowerCase().includes(val.toLowerCase())
    );
  } else if (val.length >= 3 && options.value == "Sindicatura propietaria") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Propietario_2.toLowerCase().includes(val.toLowerCase())
    );
  } else if (val.length >= 3 && options.value == "Sindicatura suplente") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Suplente_2.toLowerCase().includes(val.toLowerCase())
    );
  } else {
    return;
  }
});

//---------------------------------------------------------------------------------
//PAGINATION

watch(elementosPorPage, (val) => {
  if (val != null) {
    cargarPaginas();
  }
});

watch(pageActual, (val) => {
  if (val != null) {
    cargarPaginas();
  }
});

const cargarPaginas = () => {
  let pag = listFiltroCards.value.length / elementosPorPage.value;
  if (pag % 1 !== 0) {
    paginas.value = pag + 1;
  } else {
    paginas.value = pag;
  }
  mostrarElementosPage(pageActual.value);
};

const mostrarElementosPage = (pagina) => {
  const inicio = (pagina - 1) * elementosPorPage.value;
  const fin = inicio + elementosPorPage.value;
  const elementos = listFiltroCards.value.slice(inicio, fin);
  listCardsFiltro.value = elementos;
};

//---------------------------------------------------------------------------------

const verMas = async (id, puesto) => {
  $q.loading.show();
  await candidatosStore.loadCandidatoById(id, puesto);
  await candidatosStore.loadFormacionAcademicaById(id, puesto);
  await candidatosStore.loadDatosGeneralesById(id, puesto);
  await candidatosStore.loadPropuestasByCandidato(id, puesto);
  router.push({
    name: "detallePresidenciaSindicatura",
    params: { id: id, puesto: puesto, eleccion_Id: props.eleccion_Id },
  });
  $q.loading.hide();
};

const selectOption = (item, option) => {
  item.selection = option.value;
  item.label = option.label;
};
const selectOptionFiltro = (option) => {
  options.value = option.label;
  listCardsFiltro.value.forEach((item) => {
    item.selection = option.value;
    item.label = option.label;
  });
};
const pdf = async (id, puesto) => {
  $q.loading.show();
  await ReporteConoceles01(id, puesto);
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 3000);
  $q.loading.hide();
};
//---------------------------------------------------------------------------------
</script>

<style></style>
