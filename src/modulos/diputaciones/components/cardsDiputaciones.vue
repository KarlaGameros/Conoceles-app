<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      v-for="item in cards"
      :key="item"
      class="my-card col-2"
      flat
      bordered
    >
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

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
        <q-btn flat color="primary"> VER MAS </q-btn>
      </q-card-actions>
    </q-card>

    <!-- <q-card class="my-card col-3" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section class="col-3">
          <q-item-label>DIPUTACIÓN</q-item-label>
          <q-item-label caption> HECTOR ALBERTO DE LUNA SANCHEZ </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-card-section class="col-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
      </q-card-section>
    </q-card> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const cards = ref(8);
</script>

<style></style>
