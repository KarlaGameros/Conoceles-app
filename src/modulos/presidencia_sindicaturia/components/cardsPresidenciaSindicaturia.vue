<template>
  <q-input v-model="filtro"></q-input>
  <div
    v-if="listCardsFiltro != ''"
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
        campaña, entre otras cosas, en la Elección de Presidentes y Sindicos
        2024 en el Estado de Nayarit lo que puede darte más información para
        ejercer tu voto, para lo cual bastará que des un click en la opción que
        desees consultar.
      </q-banner>
      <br />
      <q-btn
        @click="backCards()"
        flat
        icon="arrow_back"
        class="text-purple-ieen-1"
      ></q-btn>
    </div>
    <q-card
      v-for="item in listCardsFiltro"
      :key="item.id"
      class="my-card col-lg-2 col-md-2 col-sm-3 col-xs-12"
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
                  ? item.prop
                  : item.selection == 'sup'
                  ? item.sup
                  : item.selection === 'propSin'
                  ? item.prop_sin
                  : item.sup_sin
              "
            />
          </q-avatar>
        </div>
      </div>

      <q-card-section>
        <div class="col text-overline flex-center">
          Municipio de {{ item.municipio_name }}
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
        <div class="row text-center"></div>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <div class="q-mb-md" style="text-align: center">
          <q-btn-dropdown
            color="purple"
            :label="item.label || dropdownOptions[0].label"
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

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{
            item.selection == "prop"
              ? item.nombre_prop
              : item.selection == "sup"
              ? item.nombre_sup
              : item.selection === "propSin"
              ? item.nombre_prop_sin
              : item.nombre_sup_sin
          }}
        </div>
        <div class="text-caption text-grey">
          EDAD:
          {{
            item.selection == "prop"
              ? item.edad_prop
              : item.selection == "sup"
              ? item.edad_sup
              : item.selection === "propSin"
              ? item.edad_prop_sin
              : item.edad_sup_sin
          }}
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
  <div v-if="listCardsFiltro == ''">
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
import { usePresidenciaSindicaturiaStore } from "src/stores/presidencia_sindicaturia_store";
import { onMounted, ref, watch } from "vue";

//---------------------------------------------------------------------------------

const presidenciaSindicaturiaStore = usePresidenciaSindicaturiaStore();
const candidatosStore = useCardsStore();
const { listFiltroCards } = storeToRefs(candidatosStore);
const dropdownOptions = [
  { label: "Propietario Presidente", value: "prop" },
  { label: "Suplente Presidente", value: "sup" },
  { label: "Propietario Sindico", value: "propSin" },
  { label: "Suplente Sindico", value: "supSin" },
];
const filtro = ref("");
const listCardsFiltro = ref(listFiltroCards.value);
//---------------------------------------------------------------------------------

onMounted(() => {
  presidenciaSindicaturiaStore.actualizarMenu(true);
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
  presidenciaSindicaturiaStore.loadCard(id);
  presidenciaSindicaturiaStore.actualizarDetalle(valor);
};

const selectOption = (item, option) => {
  item.selection = option.value;
  item.label = option.label;
  console.log("iten", item);
};

const pdf = () => {
  const pdfURL = "https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf";
  const link = document.createElement("a");
  link.href = pdfURL;
  link.target = "_blank";
  link.download = "archivo.pdf";
  link.click();
};

const backCards = () => {
  presidenciaSindicaturiaStore.actualizarCandidatos(false);
  presidenciaSindicaturiaStore.actualizarChart(true);
};

//---------------------------------------------------------------------------------
</script>

<style></style>
