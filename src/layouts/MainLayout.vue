<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-pink-ieen text-white" height-hint="98">
      <div class="bg-gray-ieen-3">
        <!-- <q-img
          src="../assets/IEEN300.png"
          style="height: 80px; width: 140px"
        ></q-img> -->
        <div class="text-h5 text-center">
          Programa de Resultados <b class="text-pink-conoceles">E</b>lectorales
          Preliminares 2024
        </div>
        <div class="text-h6 text-center">
          Elecciones Estatales de
          <b class="text-pink-conoceles">Nayarit</b>
        </div>
      </div>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Conoceles </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab icon="home" to="/inicio" />
        <q-route-tab to="/diputaciones" label="Diputaciones" />
        <q-route-tab to="/page2" label="Presidencia y Sindicatura" />
        <q-route-tab to="/page3" label="Regidurias" />
      </q-tabs>
      <!-- <div class="absolute-right q-pa-xs">
        <q-btn flat round dense>
          <i
            class="fa-brands fa-square-facebook fa-2xl"
            style="color: #ffffff"
          ></i>
        </q-btn>
        <q-btn flat round dense>
          <i class="fa-brands fa-youtube fa-2xl" style="color: #ffffff"></i>
        </q-btn>
      </div> -->
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 50px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item :content-inset-level="2" :header-inset-level="2">
            <q-item-section>
              <q-item-label class="text-h5 label-title text-bold"
                >Consulta</q-item-label
              >
              <div class="text-h6">
                Selecciona el reporte que deseas consultar:
              </div>
              <q-btn
                :to="{ name: 'diputaciones' }"
                label="Numeralio"
                glossy
                color="purple"
              />
              <br />
              <!-- <q-btn color="purple" label="Candidatos y candidatas" /> -->
              <q-btn
                :to="{ name: 'cardsDiputaciones' }"
                label="Candidatos y candidatas"
                outline
                color="purple"
              />
              <br />

              <div class="text-weight-bolder">Distrito</div>
              <q-btn-dropdown class="bg-gray-ieen-3 text-white" label="Todos">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>1. Acaponeta</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>2. Tecuala</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>3. Santiago Ixcuintla</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <br />
              <div class="text-weight-bolder">Actor politico</div>
              <q-btn-dropdown class="bg-gray-ieen-3 text-white" label="Todos">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Todos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>0257</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>0258</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>

              <br />
              <div class="text-weight-bolder">Rango de edad</div>
              <q-btn-dropdown class="bg-gray-ieen-3 text-white" label="Todos">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Todos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>0257</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>0258</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>

              <br />
              <div class="text-weight-bolder">Sexo</div>
              <q-btn-dropdown class="bg-gray-ieen-3 text-white" label="Todos">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Todos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>0257</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>0258</q-item-label>
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
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style lang="scss">
.text-purple-ieen {
  color: #673e84 !important;
}
.bg-pink-ieen {
  background: #d1308a !important;
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
