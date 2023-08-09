<template>
  <q-page class="flex flex-center">
    <img
      alt="PREP logo"
      src="../assets/Imagen2.jpg"
      style="width: 1000px; height: 600px"
    />
  </q-page>
</template>

<script setup>
import { useCardsStore } from "src/stores/cards-store";
import { defineComponent, onMounted } from "vue";

const cardsStore = useCardsStore();

onMounted(() => {
  cardsStore.actualizarMenu(false);
});
// export default defineComponent({

//   name: "IndexPage",
// });
</script>
