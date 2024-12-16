<template>
  <!---------------------------BANNER--------------------------->
  <banner>
    <template v-slot:icono>
      <q-icon name="badge" color="purple-ieen" />
    </template>
    <template v-slot:contenido>
      <span id="speak">
        {{
          `En este espacio tendrás la oportunidad de conocer a las personas
        candidatas, así como su trayectoria y sus principales propuestas de
        campaña, entre otras cosas, en la Elección de ${
          props.eleccion == "DIP"
            ? "Diputaciones"
            : props.eleccion == "PYS"
            ? "Presidencias y Sindicaturas"
            : "Regidurías"
        } 2024 en el Estado de Nayarit, lo que puede darte más
        información para ejercer tu voto, para lo cual bastará que des un click
        en la opción que desees consultar`
        }}
      </span>
    </template>
  </banner>
  <!---------------------------BUTTON BACK AND SEARCH BY NAME--------------------------->
  <div class="row q-pt-md">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12 text-subtitle2">
      <span v-if="visualizarTable == false" id="speak"
        >Buscar por candidatura:
      </span>
      <q-radio
        v-if="props.eleccion != 'PYS' && visualizarTable == false"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        v-model="shape"
        color="purple-ieen"
        val="prop"
        label="Propietaria"
      />
      <q-radio
        v-if="props.eleccion != 'PYS' && visualizarTable == false"
        v-model="shape"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        color="purple-ieen"
        val="sup"
        label="Suplente"
      />
      <div v-if="props.eleccion == 'PYS' && visualizarTable == false">
        <q-radio
          v-for="item in dropdownOptions"
          :key="item"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          v-model="shape"
          color="purple-ieen"
          :val="item.value"
          :label="item.label"
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <q-input
        v-if="visualizarTable == false"
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
    <div
      :class="
        $q.screen.xs
          ? 'col-lg-2 col-md-6 col-sm-6 col-xs-12 flex-center q-pt-md'
          : 'col-lg-2 col-md-6 col-sm-6 col-xs-12 flex-center'
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
  <template v-if="loading == true"
    ><div
      :class="
        $q.screen.xs
          ? 'flex-center text-h6 text-grey-8'
          : 'absolute-center text-h6 text-grey-8'
      "
    >
      <q-spinner-cube color="pink" size="5.5em" />
    </div>
  </template>
  <template v-else-if="listFiltroCards.length == 0"
    ><div
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
    <div class="q-pa-md row q-gutter-md flex flex-center">
      <q-card
        v-for="item in listCardsFiltro"
        :key="item"
        flat
        bordered
        :style="props.eleccion == 'PYS' ? 'width: 291px' : 'width: 290px; '"
      >
        <div class="q-pt-md" style="text-align: center">
          <div class="q-pa-md q-gutter-sm">
            <q-avatar
              size="85px"
              v-if="
                (item.selection == 'prop' &&
                  item.validado_Propietario == true &&
                  item.url_Foto_Propietario != null &&
                  !item.identidadPropietario.includes('Identidad')) ||
                (item.selection == 'sup' &&
                  item.validado_Suplente == true &&
                  item.url_Foto_Suplente != null &&
                  !item.identidadSuplente.includes('Identidad')) ||
                (item.selection == 'propSin' &&
                  item.validado_Propietario_2 == true &&
                  item.url_Foto_Propietario_2 != null &&
                  !item.identidadPropietario2.includes('Identidad')) ||
                (item.selection == 'supSin' &&
                  item.validado_Suplente_2 == true &&
                  item.url_Foto_Suplente_2 != null &&
                  !item.identidadSuplente2.includes('Identidad'))
              "
            >
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
            <q-avatar size="85px" v-else>
              <q-img
                v-if="
                  (item.selection == 'prop' &&
                    item.sexo_Propietario == 'Mujer') ||
                  (item.selection == 'sup' && item.sexo_Suplente == 'Mujer') ||
                  (item.selection == 'propSin' &&
                    item.sexo_Propietario_2 == 'Mujer') ||
                  (item.selection == 'supSin' &&
                    item.sexo_Suplente_2 == 'Mujer')
                "
                src="../assets/avatarmujer.jpg"
              />
              <q-img
                v-if="
                  (item.selection == 'prop' &&
                    item.sexo_Propietario == 'Hombre') ||
                  (item.selection == 'sup' && item.sexo_Suplente == 'Hombre') ||
                  (item.selection == 'propSin' &&
                    item.sexo_Propietario_2 == 'Hombre') ||
                  (item.selection == 'supSin' &&
                    item.sexo_Suplente_2 == 'Hombre')
                "
                src="../assets/avatarHombre.jpg"
              />
              <q-img
                v-if="
                  (item.selection == 'prop' &&
                    item.sexo_Propietario == 'No binario') ||
                  (item.selection == 'sup' &&
                    item.sexo_Suplente == 'No binario') ||
                  (item.selection == 'propSin' &&
                    item.sexo_Propietario_2 == 'No binario') ||
                  (item.selection == 'supSin' &&
                    item.sexo_Suplente_2 == 'No binario')
                "
                src="../assets/noBinario.png"
              />
            </q-avatar>
          </div>
        </div>
        <q-card-section class="q-pt-sm">
          <div
            class="nombre-tarjeta text-subtitle2 text-center text-grey-9"
            id="speak"
          >
            {{
              item.selection == "prop"
                ? item.nombres_Propietario
                : item.selection == "sup"
                ? item.nombres_Suplente
                : item.selection == "propSin"
                ? item.nombres_Propietario_2
                : item.nombres_Suplente_2
            }}
          </div>
          <div
            class="nombre-tarjeta text-subtitle2 text-center text-grey-9"
            id="speak"
          >
            {{
              item.selection == "prop"
                ? `${item.apellido_Paterno_Propietario} ${item.apellido_Materno_Propietario}`
                : item.selection == "sup"
                ? `${item.apellido_Paterno_Suplente} ${item.apellido_Materno_Suplente}`
                : item.selection == "propSin"
                ? `${item.apellido_Paterno_Propietario_2} ${item.apellido_Materno_Propietario_2}`
                : `${item.apellido_Paterno_Suplente_2} ${item.apellido_Materno_Suplente_2}`
            }}
          </div>

          <div id="speak">
            <div
              v-if="
                item.selection == 'prop'
                  ? item.mote_Propietario != null && item.mote_Propietario != ''
                  : item.selection == 'sup'
                  ? item.mote_Suplente != null && item.mote_Suplente != ''
                  : item.selection == 'propSin'
                  ? item.mote_Propietario_2 != null &&
                    item.mote_Propietario_2 != ''
                  : item.mote_Suplente_2 != null
              "
              class="text-caption text-bold text-center text-grey-6"
            >
              "{{
                item.selection == "prop"
                  ? item.mote_Propietario
                  : item.selection == "sup"
                  ? item.mote_Suplente
                  : item.selection == "propSin"
                  ? item.mote_Propietario_2
                  : item.mote_Suplente_2
              }}"
            </div>
            <div v-else><br /></div>

            <div class="row text-center">
              <div class="text-subtitle2 text-grey col-6">
                EDAD:
                {{
                  item.selection == "prop"
                    ? item.edad_Propietario
                    : item.selection == "sup"
                    ? item.edad_Suplente
                    : item.selection == "propSin"
                    ? item.edad_Propietario_2
                    : item.edad_Suplente_2
                }}
              </div>
              <div class="text-subtitle2 text-grey col-6">
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
          </div>
        </q-card-section>
        <q-card-section>
          <div
            v-if="item.tipo_Candidato == 'MR' && props.eleccion == 'DIP'"
            class="row text-subtitle2 flex-center text-grey-9"
          >
            Distrito
            {{ item.no_Distrito }}
          </div>
          <div
            v-if="item.tipo_Candidato == 'MR' && props.eleccion == 'DIP'"
            class="row text-subtitle2 flex-center text-grey-8"
          >
            {{ item.distrito }}
          </div>
          <div
            v-if="props.eleccion == 'PYS' || props.eleccion == 'REG'"
            class="row text-subtitle2 flex-center text-grey-9"
            id="speak"
          >
            Municipio de {{ item.municipio }}
          </div>
          <div
            v-if="props.eleccion == 'REG' && item.tipo_Candidato == 'MR'"
            class="row text-subtitle2 flex-center text-grey-9"
            id="speak"
          >
            {{ item.demarcacion }}
          </div>
          <div
            v-if="item.tipo_Candidato == 'RP'"
            class="row text-subtitle2 flex-center text-grey-9"
            id="speak"
          >
            No. de lista {{ item.orden }}
            <br v-if="props.eleccion != 'REG'" /><br
              v-if="props.eleccion != 'REG'"
            />
          </div>
          <div class="row no-wrap items-center flex-center">
            <q-avatar square style="width: auto; height: 28px">
              <img
                :src="
                  item.is_Comun == true
                    ? item.url_Logo_Comun
                    : item.is_Coalicion == true
                    ? item.url_Logo_Coalicion
                    : item.selection == 'prop' && item.is_Coalicion == false
                    ? item.url_Logo_Partido_Propietario
                    : item.selection == 'sup' && item.is_Coalicion == false
                    ? item.url_Logo_Partido_Suplente
                    : item.selection == 'propSin' && item.is_Coalicion == false
                    ? item.url_Logo_Partido_Propietario_2
                    : item.url_Logo_Partido_Suplente_2
                "
                alt=""
              />
            </q-avatar>
          </div>
        </q-card-section>
        <q-card-section>
          <div
            class="nombre-tarjeta row text-subtitle2 flex-center text-grey-8 text-center"
            id="speak"
          >
            {{
              item.is_Comun == true
                ? item.comun
                : item.is_Coalicion == true
                ? item.coalicion
                : item.selection == "prop"
                ? item.partido
                : item.selection == "sup"
                ? item.partido_Suplente
                : item.selection == "propSin"
                ? item.partido_Propietario_2
                : item.partido_Suplente_2
            }}
          </div>
          <div
            v-if="
              item.partido != 'Partido Redes Sociales Progresistas Nayarit' &&
              item.comun != 'Una Nueva Alianza para Levantar a Nayarit' &&
              item.partido != 'Partido Movimiento Levántate para Nayarit'
            "
          >
            <br />
          </div>
        </q-card-section>
        <div
          v-if="props.eleccion != 'PYS'"
          class="text-subtitle2 text-center text-grey-9"
        >
          CANDIDATURA {{ item.tipo_Candidato }}
        </div>
        <div style="text-align: center" class="q-pb-sm">
          <q-btn-toggle
            v-if="props.eleccion != 'PYS'"
            v-model="item.selection"
            push
            glossy
            toggle-color="purple-ieen"
            class="text-grey-9 q-ml-xs"
            :options="[
              { label: 'Propietaria', value: 'prop' },
              { label: 'Suplente', value: 'sup' },
            ]"
          />
          <q-btn-dropdown
            v-if="props.eleccion == 'PYS'"
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
        <q-separator />
        <q-card-actions>
          <div
            class="col-10"
            v-if="
              item.selection == 'prop'
                ? item.nombres_Propietario != 'No registro información'
                : item.selection == 'sup'
                ? item.nombres_Suplente != 'No registro información'
                : item.selection == 'propSin'
                ? item.nombres_Propietario_2 != 'No registro información'
                : item.nombres_Suplente_2 != 'No registro información'
            "
          >
            <q-btn
              :to="{
                name:
                  props.eleccion == 'DIP'
                    ? 'diputacionesDetalle'
                    : props.eleccion == 'PYS'
                    ? 'detallePresidenciaSindicatura'
                    : 'detalleRegidurias',
              }"
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
              ¡Consulta!
            </q-btn>
          </div>
          <div class="col-2">
            <q-btn
              v-if="
                item.selection == 'prop'
                  ? item.validado_Propietario
                  : item.selection == 'sup'
                  ? item.validado_Suplente
                  : item.selection == 'propSin'
                  ? item.validado_Propietario_2
                  : item.validado_Suplente_2
              "
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
  <template v-else-if="listFiltroCards.length != 0 && visualizarTable == true">
    <div class="q-pt-lg">
      <q-table
        :rows-per-page-options="[5, 10, 15, 20, 25, 30, 50]"
        flat
        bordered
        :filter="filter"
        :rows="listFiltroCards"
        :columns="columns"
        row-key="name"
        :visible-columns="visisble_columns"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Ingrese un nombre"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props" id="speak">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <div v-if="col.name === 'url_Logo_Partido_Propietario'">
                <q-avatar square style="width: auto; height: 28px">
                  <img
                    :src="
                      props.row.is_Comun == true
                        ? props.row.url_Logo_Comun
                        : props.row.is_Coalicion == true
                        ? props.row.url_Logo_Coalicion
                        : props.row.url_Logo_Partido_Propietario
                    "
                    alt=""
                  />
                </q-avatar>
              </div>
              <div v-else-if="col.name === 'no_Distrito'">
                Distrito {{ col.value }}
              </div>
              <div v-else-if="col.name === 'nombre_Completo_Propietario'">
                <q-btn
                  :label="col.value"
                  flat
                  color="pink-4"
                  :to="{
                    name:
                      props.eleccion == 'DIP'
                        ? 'diputacionesDetalle'
                        : props.eleccion == 'PYS'
                        ? 'detallePresidenciaSindicatura'
                        : 'detalleRegidurias',
                  }"
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
                  :to="{
                    name:
                      props.eleccion == 'DIP'
                        ? 'diputacionesDetalle'
                        : props.eleccion == 'PYS'
                        ? 'detallePresidenciaSindicatura'
                        : 'detalleRegidurias',
                  }"
                  class="pink"
                  @click="verMas(props.row.id, 1)"
                >
                  <q-tooltip>¡Consulta!</q-tooltip>
                </q-btn>
              </div>
              <div v-else-if="col.name === 'nombre_Completo_Propietario_2'">
                <q-btn
                  :label="col.value"
                  flat
                  color="pink-4"
                  :to="{
                    name:
                      props.eleccion == 'DIP'
                        ? 'diputacionesDetalle'
                        : props.eleccion == 'PYS'
                        ? 'detallePresidenciaSindicatura'
                        : 'detalleRegidurias',
                  }"
                  class="pink"
                  @click="verMas(props.row.id, 2)"
                >
                  <q-tooltip>¡Consulta!</q-tooltip>
                </q-btn>
              </div>
              <div v-else-if="col.name === 'nombre_Completo_Suplente_2'">
                <q-btn
                  :label="col.value"
                  flat
                  color="pink-4"
                  :to="{
                    name:
                      props.eleccion == 'DIP'
                        ? 'diputacionesDetalle'
                        : props.eleccion == 'PYS'
                        ? 'detallePresidenciaSindicatura'
                        : 'detalleRegidurias',
                  }"
                  class="pink"
                  @click="verMas(props.row.id, 3)"
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
import { useCardsStore } from "src/stores/cards-store";
import { useRouter } from "vue-router";
import banner from "../components/bannerComp.vue";
import ReporteConoceles01 from "src/helpers/Conoceles-01";

//---------------------------------------------------------------------------------

const $q = useQuasar();
const candidatosStore = useCardsStore();
const { listFiltroCards, cargo, loading } = storeToRefs(candidatosStore);
const dropdownOptions = [
  { label: "Presidencia propietaria", value: "prop" },
  { label: "Presidencia suplente", value: "sup" },
  { label: "Sindicatura propietaria", value: "propSin" },
  { label: "Sindicatura suplente", value: "supSin" },
];
const options = ref("");
const filtro = ref("");
const listCardsFiltro = ref([...listFiltroCards.value]);
const router = useRouter();
let pageActual = ref("");
let paginas = ref("");
const activar_pdf = ref(false);
const elementosPorPage = ref(5);
const num_Paginas = ref([5, 10, 15, 25, 50]);
const props = defineProps({
  eleccion_Id: { type: String, required: true },
  eleccion: { type: String, required: true },
});
const visualizarTable = ref(false);
const shape = ref("prop");
const visisble_columns = ref("");
const filter = ref("");

//---------------------------------------------------------------------------------

onMounted(() => {
  candidatosStore.actualizarMenu(true);
  candidatosStore.actualizarButtonColor(true);
  options.value = "Presidencia propietaria";
  cargarData();
});

//---------------------------------------------------------------------------------

const columns = [
  {
    name: "no_Formula",
    align: "center",
    label: "No. de Fórmula",
    field: "no_Formula",
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
    name: "municipio",
    align: "center",
    label: "Municipio",
    field: "municipio",
    sortable: true,
  },
  {
    name: "demarcacion",
    align: "center",
    label: "Demarcación",
    field: "demarcacion",
    sortable: true,
  },
  {
    name: "orden",
    align: "center",
    label: "No. de lista",
    field: "orden",
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
  {
    name: "nombre_Completo_Propietario_2",
    align: "center",
    label: "Candidatura sindicatura propietaria",
    field: "nombre_Completo_Propietario_2",
    sortable: true,
  },
  {
    name: "nombre_Completo_Suplente_2",
    align: "center",
    label: "Candidatura sindicatura suplente",
    field: "nombre_Completo_Suplente_2",
    sortable: true,
  },
];

watch(listFiltroCards, (val) => {
  if (val != null) {
    if (val.length > 0) {
      pageActual.value = 1;
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
  } else if (val.length >= 3 && shape.value == "propSin") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Propietario_2.toLowerCase().includes(val.toLowerCase())
    );
  } else if (val.length >= 3 && shape.value == "supSin") {
    listCardsFiltro.value = listFiltroCards.value.filter((x) =>
      x.nombre_Completo_Suplente_2.toLowerCase().includes(val.toLowerCase())
    );
  } else {
    return;
  }
});

watch(visualizarTable, (val) => {
  if (val != null) {
    filter.value = "";
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
  if (props.eleccion == "DIP") {
    if (cargo.value == "MR") {
      visisble_columns.value = [
        "no_Formula",
        "tipo_Candidato",
        "no_Distrito",
        "url_Logo_Partido_Propietario",
        "nombre_Completo_Propietario",
        "nombre_Completo_Suplente",
      ];
    } else if (cargo.value == "RP") {
      visisble_columns.value = [
        "no_Formula",
        "orden",
        "tipo_Candidato",
        "url_Logo_Partido_Propietario",
        "nombre_Completo_Propietario",
        "nombre_Completo_Suplente",
      ];
    } else {
      visisble_columns.value = [
        "no_Formula",
        "orden",
        "tipo_Candidato",
        "no_Distrito",
        "url_Logo_Partido_Propietario",
        "nombre_Completo_Propietario",
        "nombre_Completo_Suplente",
      ];
    }
  } else if (props.eleccion == "PYS") {
    visisble_columns.value = [
      "no_Formula",
      "tipo_Candidato",
      "municipio",
      "url_Logo_Partido_Propietario",
      "nombre_Completo_Propietario",
      "nombre_Completo_Suplente",
      "nombre_Completo_Propietario_2",
      "nombre_Completo_Suplente_2",
    ];
  } else if (props.eleccion == "REG") {
    if (cargo.value == "MR") {
      visisble_columns.value = [
        "no_Formula",
        "tipo_Candidato",
        "municipio",
        "demarcacion",
        "url_Logo_Partido_Propietario",
        "nombre_Completo_Propietario",
        "nombre_Completo_Suplente",
      ];
    } else if (cargo.value == "RP") {
      visisble_columns.value = [
        "no_Formula",
        "tipo_Candidato",
        "municipio",
        "orden",
        "url_Logo_Partido_Propietario",
        "nombre_Completo_Propietario",
        "nombre_Completo_Suplente",
      ];
    } else {
      visisble_columns.value = [
        "no_Formula",
        "tipo_Candidato",
        "municipio",
        "demarcacion",
        "orden",
        "url_Logo_Partido_Propietario",
        "nombre_Completo_Propietario",
        "nombre_Completo_Suplente",
      ];
    }
  }
};

//---------------------------------------------------------------------------------

const cargarData = async () => {
  listCardsFiltro.value = [];
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  await candidatosStore.loadCandidatosByEleccion(props.eleccion_Id);
  $q.loading.hide();
};

const verMas = async (id, puesto) => {
  $q.loading.show({
    spinner: QSpinnerCube,
    spinnerColor: "pink",
    spinnerSize: 140,
    backgroundColor: "purple-2",
    message: "Espere un momento por favor...",
    messageColor: "black",
  });
  candidatosStore.initCandidato();
  await candidatosStore.loadCandidatoById(id, puesto);
  await candidatosStore.loadFormacionAcademicaById(id, puesto);
  await candidatosStore.loadDatosGeneralesById(id, puesto);
  await candidatosStore.loadPropuestasByCandidato(id, puesto);
  router.push({
    name:
      props.eleccion == "DIP"
        ? "diputacionesDetalle"
        : props.eleccion == "PYS"
        ? "detallePresidenciaSindicatura"
        : "detalleRegidurias",
    params: {
      id: id,
      puesto: puesto,
      eleccion_Id: props.eleccion_Id,
    },
  });
  $q.loading.hide();
};

const selectOption = (item, option) => {
  item.selection = option.value;
  item.label = option.label;
};

watch(shape, (val) => {
  if (val != null) {
    filtro.value = "";
    listFiltroCards.value.forEach((item) => {
      item.selection = item.label = val;
    });
  }
});

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
//---------------------------------------------------------------------------------
</script>

<style scoped>
.nombre-tarjeta {
  text-align: center;
  max-width: 250px; /* Tamaño máximo deseado para el nombre */
  white-space: pre-wrap; /* Permite saltos de línea */
  word-wrap: break-word;
}
</style>
