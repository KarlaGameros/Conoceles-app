import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useRegiduriasStore = defineStore("regidurias", {
  state: () => ({
    isHomePage: false,
    isCandidatosPage: false,
    isDetallePage: false,
    isChartPageRE: false,
    listCards: [],
    listMunicipios: [],
    listDemarcacion: [],
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
    },

    actualizarCandidatos(valor) {
      this.isCandidatosPage = valor;
    },

    actualizarDetalle(valor) {
      this.isDetallePage = valor;
    },

    actualizarChart(valor) {
      this.isChartPageRE = valor;
    },

    //---------------------------------------------------------------------------------

    async loadCards() {
      this.listCards = [
        {
          id: 1,
          visible: false,
          selection: "prop",
          distrito: 1,
          prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
          nombre_prop: "CARLOS ROBERTO",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: 30,
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
          distrito: 2,
          prop: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/paloma%20%20de%20los%20santos.jpg",
          nombre_prop: "PALOMA DE LOS SANTOS",
          edad_prop: 25,
          sexo_prop: "Mujer",
          cargo_prop: "Diputada",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/ELISA%20CAROLINA.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: 30,
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
          edad_prop: 35,
          sexo_prop: "Mujer",
          cargo_prop: "Diputada",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MC.png",
        },
      ];
    },

    //---------------------------------------------------------------------------------

    async loadMunicipios() {
      const data = [
        { id: "", nombre: "Todos" },
        { id: 1, nombre: "Acaponeta" },
        { id: 2, nombre: "Ahuacatlán" },
        { id: 3, nombre: "Amatlán de Cañas" },
        { id: 4, nombre: "Bahía de Banderas" },
        { id: 5, nombre: "Compostela" },
        { id: 6, nombre: "Huajicori" },
        { id: 7, nombre: "Ixtlán del Río" },
        { id: 8, nombre: "Jala" },
        { id: 9, nombre: "Del Nayar" },
        { id: 10, nombre: "Rosamorada" },
        { id: 11, nombre: "Ruiz" },
        { id: 12, nombre: "San Blas" },
        { id: 13, nombre: "San Pedro Lagunillas" },
        { id: 14, nombre: "Santa María del Oro" },
        { id: 15, nombre: "Santiago Ixcuintla" },
        { id: 16, nombre: "Tecuala" },
        { id: 17, nombre: "Tepic" },
        { id: 18, nombre: "Tuxpan" },
        { id: 19, nombre: "Xalisco" },
        { id: 20, nombre: "La Yesca" },
      ];
      this.listMunicipios = data.map((municipio) => {
        return {
          label: municipio.nombre,
          value: municipio.id,
        };
      });
    },

    //---------------------------------------------------------------------------------

    async loadDemarcaciones() {
      const data = [
        { id: "", nombre: "Todos" },
        { id: 1, nombre: "Demarcación 1" },
        { id: 2, nombre: "Demarcación 2" },
        { id: 3, nombre: "Demarcación 3" },
        { id: 4, nombre: "Demarcación 4" },
        { id: 5, nombre: "Demarcación 5" },
        { id: 6, nombre: "Demarcación 6" },
        { id: 7, nombre: "Demarcación 7" },
        { id: 8, nombre: "Demarcación 8" },
        { id: 8, nombre: "Demarcación 9" },
        { id: 10, nombre: "Demarcación 10" },
        { id: 11, nombre: "Demarcación 11" },
      ];
      this.listDemarcacion = data.map((demarcacion) => {
        return {
          label: demarcacion.nombre,
          value: demarcacion.id,
        };
      });
    },

    //---------------------------------------------------------------------------------

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

    //---------------------------------------------------------------------------------

    async filterCards(distrito) {
      const filteredCards = this.listCards.filter(
        (card) => card.distrito === distrito
      );
      console.log(filteredCards);
      this.listCards = filteredCards;
    },

    async filterEdad(rango_edad) {
      if (rango_edad === "Todos") {
        return this.listCards;
      }

      const rango = rango_edad.split("-").map(Number);
      console.log("rango", rango);
      const filteredList = this.listCards.filter((card) => {
        const edad_prop = card.edad_prop;
        if (rango.length === 2) {
          return edad_prop >= rango[0] && edad_prop <= rango[1];
        } else if (rango.length === 1 && rango[0] === 60) {
          return edad_prop >= rango[0];
        }
        return false;
      });

      this.listCards = filteredList;
      return filteredList;
    },
  },
});
