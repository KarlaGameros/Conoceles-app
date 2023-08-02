<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      v-for="item in cards"
      :key="item"
      class="my-card col-lg-2 col-md-2 col-sm-3 col-xs-12"
      flat
      bordered
    >
      <div class="q-pt-md" style="text-align: center">
        <img
          src="../../../assets/user.png"
          style="width: 100px; display: block; margin: 0 auto"
        />
      </div>

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">DIPUTACIÓN</div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">HECTOR ALBERTO DE LUNA SANCHEZ</div>
        <div class="text-caption text-grey">EDAD: 25</div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary" to="/detalleCantidato"> VER MAS </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cards = ref(10);
</script>

<style></style>
