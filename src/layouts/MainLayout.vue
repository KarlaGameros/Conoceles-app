<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-pink-ieen text-white" height-hint="98">
      <div class="row bg-gray-ieen-3">
        <div class="col-1 q-pl-md">
          <q-img
            src="../assets/IEEN300.png"
            style="height: 60px; width: 100px"
          ></q-img>
        </div>
        <div class="col-11">
          <div class="text-h5 text-center">
            Candidatas y Candidatos,
            <b class="text-pink-conoceles">Conóceles</b>
          </div>
          <div class="text-h6 text-center">
            Elecciones Estatales de
            <b class="text-pink-conoceles">Nayarit</b>
          </div>
        </div>
      </div>
      <q-toolbar>
        <div class="row">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <div class="absolute-center">
            <q-tabs>
              <q-route-tab icon="home" to="/inicio" />
              <q-route-tab to="/diputaciones" label="Diputaciones" />
              <q-route-tab to="/page2" label="Presidencia y Sindicatura" />
              <q-route-tab to="/page3" label="Regidurias" />
            </q-tabs>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area
        v-if="isHomePage"
        style="
          height: calc(100% - 150px);
          margin-top: 50px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item>
            <q-item-section class="bg-grey-3" style="border-radius: 10px">
              <q-item-label
                class="text-h5 label-title text-bold q-pa-xs"
                style="color: gray"
                >Consulta</q-item-label
              >
              <div class="text-h6 q-pa-xs" style="color: grey">
                Selecciona el reporte que deseas consultar:
              </div>
              <q-btn
                :to="{ name: 'diputaciones' }"
                label="Numeralia"
                style="background: #d1308a; color: white"
              />
              <br />
              <q-btn
                :to="{ name: 'cardsDiputaciones' }"
                label="Candidatos y candidatas"
                style="background: #e97ebd; color: white"
              />
              <br />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <!-- <q-btn color="purple" label="Candidatos y candidatas" /> -->

              <div class="text-weight-bolder">Distrito</div>

              <q-btn-dropdown
                class="bg-gray-ieen-3 text-white"
                label="Seleccione una opción"
                v-model="distritos_Id"
                :options="distritos"
              >
                <q-list>
                  <q-item
                    v-for="distrito in distritos"
                    :key="distrito.id"
                    clickable
                    v-close-popup
                    @click="onItemClick"
                  >
                    <q-item-section>
                      <q-item-label>{{
                        `${distrito.id} - ${distrito.nombre}`
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Actor político</div>
              <q-btn-dropdown
                :disabled="distritos_Id === null"
                v-model="actor_politico_Id"
                :options="actor_politico"
                class="bg-gray-ieen-3 text-white"
                label="Todos"
              >
                <q-list>
                  <q-item
                    v-for="item in actor_politico"
                    :key="item.id"
                    clickable
                    v-close-popup
                    @click="onItemClick"
                  >
                    <q-item-section>
                      <q-item-label>{{ item.nombre }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>

              <br />
              <div class="text-weight-bolder">Rango de edad</div>
              <q-btn-dropdown
                :disabled="distritos_Id === null"
                v-model="rango_edad_Id"
                :options="rango_edad"
                class="bg-gray-ieen-3 text-white"
                label="Todos"
              >
                <q-list>
                  <q-item
                    v-for="item in rango_edad"
                    :key="item.id"
                    clickable
                    v-close-popup
                    @click="onItemClick"
                  >
                    <q-item-section>
                      <q-item-label>{{ item.edades }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>

              <br />
              <div class="text-weight-bolder">Sexo</div>
              <q-btn-dropdown
                :disabled="distritos_Id === null"
                class="bg-gray-ieen-3 text-white"
                label="Todos"
              >
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Todos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Hombre</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Mujer</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Binario</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-pink-ieen text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>&#169; Unidad Técnica de Informática y Estadística</div>
          <div class="absolute-right q-pa-xs">
            <q-btn flat round dense>
              <i
                class="fa-brands fa-square-facebook fa-2xl"
                style="color: #ffffff"
              ></i>
            </q-btn>
            <q-btn flat round dense>
              <i class="fa-brands fa-youtube fa-2xl" style="color: #ffffff"></i>
            </q-btn>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";
import { ref } from "vue";

const cardsStore = useCardsStore();
const { isHomePage } = storeToRefs(cardsStore);

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const distritos_Id = ref(null);
const actor_politico_Id = ref(null);
const rango_edad_Id = ref(null);

const distritos = ref([
  { id: 1, nombre: "Acaponeta" },
  { id: 2, nombre: "Tecuala" },
  { id: 3, nombre: "Del Nayar" },
  { id: 4, nombre: "Santiago Ixcuintla" },
  { id: 5, nombre: "San Blas" },
  { id: 6, nombre: "Tepic" },
  { id: 7, nombre: "Tepic" },
  { id: 8, nombre: "Tepic" },
  { id: 9, nombre: "Tepic" },
  { id: 10, nombre: "Tepic" },
  { id: 11, nombre: "Tepic" },
  { id: 12, nombre: "Santa María del Oro" },
  { id: 13, nombre: "Ixtlán del Río" },
  { id: 14, nombre: "Xalisco" },
  { id: 15, nombre: "Compostela" },
  { id: 16, nombre: "Bucerias, Bahía de Banderas" },
  { id: 17, nombre: "San vicente, Bahía de Banderas" },
  { id: 18, nombre: "San José del Valle, Bahía de Banderas" },
  { id: 19, nombre: "Representación proporcinal" },
]);

const actor_politico = ref([
  { id: 1, nombre: "PAN - Partido Acción Nacional" },
  { id: 2, nombre: "PRI - Partido Revolucionario Institucional" },
  { id: 3, nombre: "PRD - Partido de la Revolución Democrática" },
  { id: 4, nombre: "PT - Partido del Trabajo" },
  { id: 5, nombre: "PVEM - Partido Verde Ecologista de México" },
  { id: 6, nombre: "MC - Partido Movimiento Ciudadano" },
  { id: 7, nombre: "MORENA - Partido Morena" },
  { id: 8, nombre: "NAN - Partido Nueva Alianza Nayarit" },
  { id: 9, nombre: "MLPN - Partido Movimiento Levántate para Nayarit" },
  { id: 10, nombre: "FXMN - Partido Fuerza por México Nayarit" },
  { id: 11, nombre: "RSPN - Partido Redes Sociales Progresistas Nayarit" },
]);

const rango_edad = [
  { id: 1, edades: "Todos" },
  { id: 2, edades: "18-24" },
  { id: 3, edades: "25-29" },
  { id: 4, edades: "30-39" },
  { id: 5, edades: "40-49" },
  { id: 6, edades: "50-59" },
  { id: 7, edades: "60 o más" },
];
</script>
<style lang="scss">
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-purple-ieen {
  color: #673e84 !important;
}
.bg-pink-ieen {
  background: #d1308a !important;
}
.bg-pink-ieen-2 {
  background: #e97ebd !important;
}
.text-pink-ieen {
  background: #d1308a !important;
}
.text-purple-ieen-1 {
  color: #863399 !important;
}
.bg-purple-ieen-1 {
  background: #863399 !important;
}
.text-purple-ieen-2 {
  color: #a25eb5 !important;
}
.bg-purple-ieen-2 {
  background: #a25eb5 !important;
}
.text-purple-ieen-3 {
  color: #bb83ca !important;
}
.bg-purple-ieen-3 {
  background: #bb83ca !important;
}
.text-pink-ieen-1 {
  color: #b32572 !important;
}
.bg-pink-ieen-1 {
  background: #b32572 !important;
}
.text-pink-ieen-2 {
  color: #cc5599 !important;
}
.bg-pink-ieen-2 {
  background: #cc5599 !important;
}
.text-pink-ieen-3 {
  color: #dd85ba !important;
}
.bg-pink-ieen-3 {
  background: #dd85ba !important;
}
.text-gray-ieen-1 {
  color: #76777a !important;
}
.bg-gray-ieen-1 {
  background: #76777a !important;
}
.text-gray-ieen-2 {
  color: #98989a !important;
}
.bg-gray-ieen-2 {
  background: #98989a !important;
}
.text-gray-ieen-3 {
  color: #b1b1b1 !important;
}
.bg-gray-ieen-3 {
  background: #b1b1b1 !important;
}
.text-pink-conoceles {
  color: #d1308a !important;
}
</style>
