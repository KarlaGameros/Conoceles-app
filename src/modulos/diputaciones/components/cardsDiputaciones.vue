<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="badge" color="purple-ieen" />
    </template>

    <template v-slot:contenido>
      <span id="speak">
        En este espacio tendrás la oportunidad de conocer a las personas
        candidatas, así como su trayectoria y sus principales propuestas de
        campaña, entre otras cosas, en la Elección de Diputaciones 2024 en el
        Estado de Nayarit, lo que puede darte más información para ejercer tu
        voto, para lo cual bastará que des un click en la opción que desees
        consultar
      </span>
    </template>
  </banner>
  <!---------------------------BUTTON BACK AND SEARCH BY NAME--------------------------->
  <div class="row q-pt-md">
    <div class="col-lg-7 col-md-6 col-sm-7 col-xs-12 text-subtitle2">
      <span id="speak">Buscar por candidatura: </span>
      <q-radio
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        v-model="shape"
        color="purple-ieen"
        val="prop"
        label="Propietaria"
      />
      <q-radio
        v-model="shape"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        color="purple-ieen"
        val="sup"
        label="Suplente"
      />
    </div>
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-md">
      <q-input
        v-model="filtro"
        color="purple-ieen"
        dense
        debounce="300"
        placeholder="Ingrese un nombre"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div
      :class="
        $q.screen.xs
          ? 'col-lg-2 col-md-3 col-sm-6 col-xs-12 flex-center q-pt-md'
          : 'col-lg-2 col-md-3 col-sm-6 col-xs-12 flex-center'
      "
    >
      <q-btn-group push>
        <q-btn
          :disable="visualizarTable != true"
          @click="visualizarTable = false"
          :class="visualizarTable != true ? 'bg-grey-6' : ''"
          icon="style"
          glossy
          :text-color="visualizarTable != true ? 'white' : 'purple-ieen'"
          push
          label="Tarjetas"
        />
        <q-btn
          :disable="visualizarTable != false"
          @click="visualizarTable = true"
          :class="visualizarTable == true ? 'bg-grey-6' : ''"
          icon="table_rows"
          glossy
          :text-color="visualizarTable == true ? 'white' : 'purple-ieen'"
          push
          label="Tabla"
        />
      </q-btn-group>
    </div>
  </div>
  <!---------------------------CARDS--------------------------->

  <template v-if="listFiltroCards.length == 0">
    <div
      :class="
        $q.screen.xs
          ? 'flex-center text-h6 text-grey-8'
          : 'absolute-center text-h6 text-grey-8'
      "
    >
      <span id="speak"
        >No hay información con los filtros seleccionados...</span
      >
    </div>
  </template>

  <template v-else-if="listFiltroCards.length > 0 && visualizarTable == false">
    <div class="q-pa-md row items-start q-gutter-md flex flex-center">
      <q-card
        v-for="item in listCardsFiltro"
        :key="item"
        class="col-lg-2 col-md-2 col-sm-3 col-xs-12"
        flat
        bordered
        style="width: 255px"
      >
        <div class="q-pt-xs" style="text-align: center">
          <div class="q-pa-md q-gutter-sm">
            <q-avatar
              size="100px"
              v-if="
                (item.selection == 'prop' &&
                  item.url_Foto_Propietario != null) ||
                (item.selection == 'sup' && item.url_Foto_Suplente != null)
              "
            >
              <q-img
                :src="
                  item.selection == 'prop'
                    ? item.url_Foto_Propietario
                    : item.url_Foto_Suplente
                "
              />
            </q-avatar>
            <q-avatar size="100px" v-else>
              <q-img
                v-if="
                  (item.selection == 'prop' &&
                    item.sexo_Propietario == 'Mujer') ||
                  (item.selection == 'sup' && item.sexo_Suplente == 'Mujer')
                "
                src="../../../assets/avatarmujer.jpg"
              />
              <q-img
                v-if="
                  (item.selection == 'prop' &&
                    item.sexo_Propietario == 'Hombre') ||
                  (item.selection == 'sup' && item.sexo_Suplente == 'Hombre')
                "
                src="../../../assets/avatarHombre.jpg"
              />
              <q-img
                v-if="
                  (item.selection == 'prop' &&
                    item.sexo_Propietario == 'No binario') ||
                  (item.selection == 'sup' &&
                    item.sexo_Suplente == 'No binario')
                "
                src="../../../assets/noBinario.png"
              />
            </q-avatar>
          </div>
        </div>
        <q-card-section class="q-pt-xs">
          <div
            class="text-subtitle1 text-center text-grey-9 text-weight-bold"
            id="speak"
          >
            {{
              item.selection == "prop"
                ? item.nombre_Completo_Propietario
                : item.nombre_Completo_Suplente
            }}
          </div>
          <div id="speak">
            <div class="text-subtitle2 text-center text-grey-8">
              {{
                item.selection == "prop"
                  ? item.mote_Propietario == null
                    ? ""
                    : `"${item.mote_Propietario}"`
                  : item.mote_Suplente == null
                  ? ""
                  : `"${item.mote_Suplente}"`
              }}
            </div>
            <div class="row text-center q-pt-xs">
              <div class="text-caption text-grey-8 col-6">
                EDAD:
                {{
                  item.selection == "prop"
                    ? item.edad_Propietario
                    : item.edad_Suplente
                }}
              </div>
              <div class="text-caption text-grey-8 col-6">
                Género:
                {{
                  item.selection == "prop"
                    ? item.sexo_Propietario
                    : item.sexo_Suplente
                }}
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-xs">
          <div id="speak">
            <div
              v-if="item.tipo_Candidato == 'MR'"
              class="row text-subtitle2 flex-center text-grey-9"
            >
              Distrito
              {{ item.no_Distrito }}
            </div>
            <div
              v-if="item.tipo_Candidato == 'MR'"
              class="row text-subtitle2 flex-center text-grey-8"
            >
              {{ item.distrito }}
            </div>
            <div class="row no-wrap items-center flex-center">
              <q-avatar style="width: auto; height: 28px" square>
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
            <div
              class="row text-subtitle2 flex-center text-grey-8 text-center q-pb-md"
            >
              {{
                item.is_Coalicion == true
                  ? item.coalicion
                  : item.selection == "prop"
                  ? item.partido
                  : item.partido_Suplente
              }}
            </div>
          </div>
          <div class="text-subtitle2 text-center text-grey-9">
            CANDIDATURA {{ item.tipo_Candidato }}
          </div>
          <q-btn-toggle
            v-model="item.selection"
            push
            glossy
            toggle-color="purple-ieen"
            class="text-grey-9"
            :options="[
              { label: 'Propietaria', value: 'prop' },
              { label: 'Suplente', value: 'sup' },
            ]"
          />
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <div class="col-10">
            <q-btn
              :to="{ name: 'diputacionesDetalle' }"
              flat
              class="text-purple-ieen"
              @click="verMas(item.id, item.selection == 'prop' ? 0 : 1)"
            >
              ¡Consulta!
            </q-btn>
          </div>
          <div class="col-2">
            <q-btn
              v-if="
                item.selection == 'prop'
                  ? item.validado_Propietario
                  : item.validado_Suplente
              "
              :disable="activar_pdf == true"
              @click="pdf(item.id, item.selection == 'prop' ? 0 : 1)"
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

  <template v-else-if="listFiltroCards.length != 0 && visualizarTable == true">
    <div class="q-pt-lg">
      <q-table
        flat
        bordered
        :rows="listFiltroCards"
        :columns="columns"
        row-key="name"
        :visible-columns="visisble_columns"
        :pagination="pagination"
      >
        <template v-slot:body="props">
          <q-tr :props="props" id="speak">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <div v-if="col.name === 'url_Logo_Partido_Propietario'">
                <q-avatar square style="width: auto; height: 28px">
                  <img
                    :src="
                      props.row.is_Coalicion == true
                        ? props.row.url_Logo_Coalicion
                        : col.value
                    "
                    alt=""
                  />
                </q-avatar>
              </div>

              <div v-else-if="col.name === 'no_Distrito'">
                {{
                  props.row.tipo_Candidato == "MR"
                    ? `Distrito ${col.value}`
                    : "No aplica"
                }}
              </div>
              <div v-else-if="col.name === 'nombre_Completo_Propietario'">
                <q-btn
                  :label="col.value"
                  flat
                  color="pink-4"
                  :to="{ name: 'diputacionesDetalle' }"
                  class="pink"
                  @click="verMas(props.row.id, 0)"
                >
                  <q-tooltip>¡Consulta!</q-tooltip>
                </q-btn>
              </div>
              <div v-else-if="col.name === 'nombre_Completo_Suplente'">
                <q-btn
                  :label="col.value"
                  flat
                  color="pink-4"
                  :to="{ name: 'diputacionesDetalle' }"
                  class="pink"
                  @click="verMas(props.row.id, 1)"
                >
                  <q-tooltip>¡Consulta!</q-tooltip>
                </q-btn>
              </div>
              <label v-else>{{ col.value }}</label>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </template>
</template>

<script setup>
import { useQuasar, QSpinnerCube } from "quasar";
import { onMounted, ref, watch, defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useCardsStore } from "src/stores/cards-store";
import banner from "../../../components/bannerComp.vue";
import ReporteConoceles01 from "src/helpers/Conoceles-01";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const cardsStore = useCardsStore();
const router = useRouter();
const { listFiltroCards, cargo } = storeToRefs(cardsStore);
const filtro = ref("");
const listCardsFiltro = ref([...listFiltroCards.value]);
const listTabla = ref([]);
const shape = ref("prop");
const pageActual = ref("");
const paginas = ref("");
const activar_pdf = ref(false);
const elementosPorPage = ref(5);
const num_Paginas = ref([5, 10, 15, 25, 50]);
const props = defineProps({
  eleccion_Id: { type: String, required: true },
});
const visualizarTable = ref(false);
const visisble_columns = ref("");

//---------------------------------------------------------------------------------

onMounted(() => {
  listCardsFiltro.value = [];
  cargarData();
});

const cargarData = async () => {
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  cardsStore.actualizarMenu(true);
  cardsStore.actualizarButtonColor(true);
  await cardsStore.loadCandidatosByEleccion(props.eleccion_Id);
  cargarPaginas();
  $q.loading.hide();
};

const columns = [
  {
    name: "numero_formula",
    align: "center",
    label: "No. de Fórmula",
    field: "numero_formula",
    sortable: true,
  },
  {
    name: "tipo_Candidato",
    align: "center",
    label: "Cargo",
    field: "tipo_Candidato",
    sortable: true,
  },
  {
    name: "no_Distrito",
    align: "center",
    label: "Distrito",
    field: "no_Distrito",
    sortable: true,
  },
  {
    name: "url_Logo_Partido_Propietario",
    align: "center",
    label: "Actor político",
    field: "url_Logo_Partido_Propietario",
    sortable: true,
  },
  {
    name: "nombre_Completo_Propietario",
    align: "center",
    label: "Candidatura propietaria",
    field: "nombre_Completo_Propietario",
    sortable: true,
  },
  {
    name: "nombre_Completo_Suplente",
    align: "center",
    label: "Candidatura suplente",
    field: "nombre_Completo_Suplente",
    sortable: true,
  },
];

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 5,
});
//---------------------------------------------------------------------------------

watch(listFiltroCards, (val) => {
  if (val != null) {
    if (val.length > 0) {
      pageActual.value = 1;
      filtro.value = "";
      cargarPaginas();
    }
  }
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
  if (val != null) {
    filtro.value = "";
    listFiltroCards.value.forEach((item) => {
      item.selection = val;
    });
  }
});

//---------------------------------------------------------------------------------
//PAGINATION
watch(pagination, (val) => {
  if (val != null) {
    cargarPaginas();
  }
});

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

  if (cargo.value == "MR") {
    visisble_columns.value = [
      "numero_formula",
      "tipo_Candidato",
      "no_Distrito",
      "url_Logo_Partido_Propietario",
      "nombre_Completo_Propietario",
      "nombre_Completo_Suplente",
    ];
  } else if (cargo.value == "RP") {
    visisble_columns.value = [
      "numero_formula",
      "tipo_Candidato",
      "url_Logo_Partido_Propietario",
      "nombre_Completo_Propietario",
      "nombre_Completo_Suplente",
    ];
  } else {
    visisble_columns.value = [
      "numero_formula",
      "tipo_Candidato",
      "no_Distrito",
      "url_Logo_Partido_Propietario",
      "nombre_Completo_Propietario",
      "nombre_Completo_Suplente",
    ];
  }
};

//---------------------------------------------------------------------------------

const verMas = async (id, puesto) => {
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  cardsStore.initDatosGenerales();
  await cardsStore.loadCandidatoById(id, puesto);
  await cardsStore.loadFormacionAcademicaById(id, puesto);
  await cardsStore.loadDatosGeneralesById(id, puesto);
  await cardsStore.loadPropuestasByCandidato(id, puesto);
  router.push({
    name: "diputacionesDetalle",
    params: { id: id, puesto: puesto, eleccion_Id: props.eleccion_Id },
  });
  $q.loading.hide();
};

const pdf = async (id, puesto) => {
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  await ReporteConoceles01(id, puesto);
  activar_pdf.value = true;
  setTimeout(() => {
    activar_pdf.value = false;
  }, 3000);
  $q.loading.hide();
};
</script>

<style></style>
