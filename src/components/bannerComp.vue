<template>
  <q-banner
    inline-actions
    class="text-justify bg-grey-2"
    v-show="visible_banner"
    style="border-radius: 20px"
  >
    <template v-slot:avatar>
      <slot name="icono"></slot>
    </template>
    <slot name="contenido"></slot>
    <template v-slot:action>
      <q-btn icon="close" flat @click="visible_banner = false"
        ><q-tooltip>Ocultar editado</q-tooltip></q-btn
      >
    </template>
  </q-banner>
</template>

<script setup>
import { ref } from "vue";

const visible_banner = ref(true);
</script>

<style></style>
