<template>
  <banner>
    <template v-slot:icono>
      <q-icon name="live_help" color="purple-ieen" />
    </template>
    <template v-slot:contenido
      ><div class="text-bold text-h6 text-grey-7">
        <span id="speak"> Preguntas frecuentes. </span>
      </div>
    </template>
  </banner>
  <div class="q-pt-md">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="pregunta in preguntas"
        :key="pregunta"
        expand-separator
        :label="`${pregunta.num}. ${pregunta.pregunta}`"
        class="text-weight-medium text-grey-8"
        default-opened
      >
        <q-card>
          <q-card-section class="text-black" id="speak">
            {{ pregunta.respuesta }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import banner from "../../../components/bannerComp.vue";

const preguntas = [
  {
    num: 1,
    pregunta:
      "¿Qué objetivo tiene el sistema 'Candidatas y Candidatos, Conóceles'?",
    respuesta:
      "Que la ciudadanía conozca información general de la vida política, laboral y pública de las personas candidatas del estado de Nayarit que participarán en la Jornada Electoral del 02 de junio de 2024,con la finalidad de que cuenten con la información suficiente al momento de emitir su voto.",
  },
  {
    num: 2,
    pregunta:
      "¿Quiénes proporcionan la información del Cuestionario curricular de cada persona candidata?",
    respuesta:
      "La información es proporcionada por las personas candidatas contendientes.",
  },
  {
    num: 3,
    pregunta:
      "¿A qué cargos se están postulando las personas candidatas a nivel estatal?",
    respuesta:
      "Diputaciones, Presidencias y Sindicaturas, y Regidurías por el principio de mayoría relativa y representación proporcional",
  },
  {
    num: 4,
    pregunta:
      "¿Quién podrá consultar el sistema “Candidatas y Candidatos, Conóceles”?",
    respuesta:
      "Cualquier persona que esté interesada en conocer más acerca de las personas candidatas a un cargo de elección popular en el Estado de Nayarit.",
  },
  {
    num: 5,
    pregunta:
      "¿En la plataforma Conóceles puedo encontrar las propuestas de las personas candidatas?",
    respuesta:
      "Sí. En el sistema encontrarás las dos principales propuestas; así como la propuesta en materia de género o, en su caso, del grupo en situación de discriminación que representa.",
  },
];
</script>
