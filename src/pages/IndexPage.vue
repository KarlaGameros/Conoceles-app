<template>
  <q-page class="flex flex-center">
    <img
      alt="PREP logo"
      src="~assets/prep_logo.png"
      style="width: 300px; height: 200px"
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
