import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    isHomePage: false,
    listCards: [],
    card: {
      id: null,
      selection: null,
      prop: null,
      nombre_prop: null,
      edad_prop: null,
      sexo_prop: null,
      cargo_prop: null,
      estado_prop: null,
      formula_prop: null,
      sup: null,
      nombre_sup: null,
      edad_sup: null,
      cargo_sup: null,
      sexo_sup: null,
      estado_sup: null,
      formula_sup: null,
      imgPartido1: null,
      imgPartido2: null,
      imgPartido3: null,
    },
  }),
  actions: {
    actualizarMenu(valor) {
      this.isHomePage = valor;
      console.log(this.isHomePage);
    },

    async loadCards() {
      this.listCards = [
        {
          id: 1,
          visible: false,
          selection: "prop",
          prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
          nombre_prop: "CARLOS ROBERTO",
          edad_prop: "25 años",
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: "30 años",
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png",
          imgPartido2:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
        },
        {
          id: 2,
          visible: false,
          selection: "prop",
          prop: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/paloma%20%20de%20los%20santos.jpg",
          nombre_prop: "PALOMA DE LOS SANTOS",
          edad_prop: "25 años",
          sexo_prop: "Mujer",
          cargo_prop: "Diputada",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/ELISA%20CAROLINA.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: "30 años",
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MORENA.png",
          imgPartido2:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PT.png",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PVEM.png",
        },
        {
          id: 3,
          visible: false,
          selection: "prop",
          prop: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/_aida%20casta%C3%B1a.jpg",
          nombre_prop: "AIDA GARCIA BADILLO",
          edad_prop: "35 años",
          sexo_prop: "Mujer",
          cargo_prop: "Diputada",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: "30 años",
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MC.png",
        },
        {
          id: 4,
          visible: false,
          selection: "prop",
          prop: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/nacho%20corona.png",
          nombre_prop: "CARLOS ROBERTO",
          edad_prop: "25 años",
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: "30 años",
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MORENA.png",
          imgPartido2:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PT.png",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PVEM.png",
        },
        {
          id: 5,
          visible: false,
          selection: "prop",
          prop: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/griselda%20foto.jpeg",
          nombre_prop: "CARLOS ROBERTO",
          edad_prop: "25 años",
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: "30 años",
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRD.png",
          imgPartido2:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
        },
      ];
    },

    async loadCard(id) {
      console.log("id", id);
      const card = this.listCards.find((card) => card.id === id);

      if (card) {
        this.card.id = card.id;
        this.card.prop = card.prop;
        this.card.selection = card.selection;
        this.card.nombre_prop = card.nombre_prop;
        this.card.edad_prop = card.edad_prop;
        this.card.sexo_prop = card.sexo_prop;
        this.card.cargo_prop = card.cargo_prop;
        this.card.estado_prop = card.estado_prop;
        this.card.formula_prop = card.formula_prop;
        this.card.nombre_sup = card.nombre_sup;
        this.card.sup = card.sup;
        this.card.cargo_sup = card.cargo_sup;
        this.card.edad_sup = card.edad_sup;
        this.card.sexo_sup = card.sexo_sup;
        this.card.estado_sup = card.estado_sup;
        this.card.formula_sup = card.formula_sup;
        this.card.imgPartido1 = card.imgPartido1;
        this.card.imgPartido2 = card.imgPartido2;
        this.card.imgPartido3 = card.imgPartido3;
      }
    },
  },
});
