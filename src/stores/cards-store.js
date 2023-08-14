import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    isHomePage: false,
    isCandidatosPage: false,
    isDetallePage: false,
    isChartPage: false,
    listCards: [],
    listDistritos: [],
    listEdades: [],
    listActorPolitico: [],
    listSexo: [],
    card: {
      id: null,
      selection: null,
      prop: null,
      nombre_prop: null,
      distrito_name: null,
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
      this.isChartPage = valor;
    },

    //---------------------------------------------------------------------------------

    async loadCards() {
      this.listCards = [
        {
          id: 1,
          visible: false,
          selection: "prop",
          distrito: 1,
          distrito_name: "Acaponeta",
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
          siglas: 1,
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
        },
        {
          id: 2,
          visible: false,
          selection: "prop",
          distrito: 2,
          distrito_name: "Tecuala",
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
          siglas: 7,
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MORENA.png",
        },
        {
          id: 3,
          visible: false,
          selection: "prop",
          distrito: 3,
          distrito_name: "Del Nayar",
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
          siglas: 6,
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
          distrito: 2,
          distrito_name: "Tecuala",
          prop: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/nacho%20corona.png",
          nombre_prop: "CARLOS ROBERTO",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: 30,
          siglas: 7,
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MORENA.png",
        },
        {
          id: 5,
          visible: false,
          selection: "prop",
          distrito: 2,
          distrito_name: "Tecuala",
          prop: "https://conoceles-coahuila.org/archivos/fotos_candidaturas/griselda%20foto.jpeg",
          nombre_prop: "CARLOS ROBERTO",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: 30,
          siglas: 2,
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          imgPartido2:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
        },
      ];
      console.log("this cards", this.listCards);
    },

    //---------------------------------------------------------------------------------

    async loadDistritos() {
      const data = [
        { id: "", nombre: "Todos" },
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
      ];
      this.listDistritos = data.map((distrito) => {
        return {
          label: distrito.nombre,
          value: distrito.id,
        };
      });
    },

    //---------------------------------------------------------------------------------

    async loadEdades() {
      const data = [
        { id: 1, edades: "Todos" },
        { id: 2, edades: "18-24" },
        { id: 3, edades: "25-29" },
        { id: 4, edades: "30-39" },
        { id: 5, edades: "40-49" },
        { id: 6, edades: "50-59" },
        { id: 7, edades: "60 o más" },
      ];
      this.listEdades = data.map((edad) => {
        return {
          label: edad.edades,
          value: edad.id,
        };
      });
    },

    async loadSexo(sexo) {
      const data = [
        { id: "", sexo: "Todos" },
        { id: 1, sexo: "Mujer" },
        { id: 2, sexo: "Hombre" },
        { id: 3, sexo: "No binario" },
      ];
      this.listSexo = data.map((sexo) => {
        return {
          label: sexo.sexo,
          value: sexo.id,
        };
      });
    },
    //---------------------------------------------------------------------------------

    async loadActorPolitico(siglas) {
      const data = [
        { id: "", siglas: "", nombre: "Todos" },
        { id: 1, siglas: "PAN", nombre: "Partido Acción Nacional" },
        {
          id: 2,
          siglas: "PRI",
          nombre: "Partido Revolucionario Institucional",
        },
        {
          id: 3,
          siglas: "PRD",
          nombre: "Partido de la Revolución Democrática",
        },
        { id: 4, siglas: "PT", nombre: "Partido del Trabajo" },
        {
          id: 5,
          siglas: "PVEM",
          nombre: "Partido Verde Ecologista de México",
        },
        { id: 6, siglas: "MC", nombre: "Partido Movimiento Ciudadano" },
        { id: 7, siglas: "MORENA", nombre: "Partido Morena" },
        { id: 8, siglas: "NAM", nombre: "Partido Nueva Alianza Nayarit" },
        {
          id: 9,
          siglas: "MLPM",
          nombre: "Partido Movimiento Levántate para Nayarit",
        },
        {
          id: 10,
          siglas: "FXMN",
          nombre: "Partido Fuerza por México Nayarit",
        },
        {
          id: 11,
          siglas: "RSPN",
          nombre: "Partido Redes Sociales Progresistas Nayarit",
        },
      ];
      this.listActorPolitico = data.map((actorPolitico) => {
        return {
          siglas: actorPolitico.siglas,
          label: `${actorPolitico.siglas}-${actorPolitico.nombre}`,
          value: actorPolitico.id,
        };
      });
    },

    //---------------------------------------------------------------------------------

    async loadCard(id) {
      const card = this.listCards.find((card) => card.id === id);

      if (card) {
        this.card.id = card.id;
        this.card.prop = card.prop;
        this.card.selection = card.selection;
        this.card.nombre_prop = card.nombre_prop;
        this.card.distrito = card.distrito;
        this.card.distrito_name = card.distrito_name;
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

    async filterDistrito(distrito) {
      const filteredCards = this.listCards.filter(
        (card) => card.distrito === distrito
      );
      this.listCards = filteredCards;
      console.log("this", this.listCards);
    },

    async filterEdad(rango_edad) {
      console.log("edad", rango_edad);
      if (rango_edad === "Todos") {
        return this.listCards;
      }
      const rango = rango_edad.split("-").map(Number);
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

    async filterActorPolitico(actor_politico) {
      const filterActorPolitico = this.listCards.filter(
        (actor) => actor.siglas === actor_politico
      );
      this.listCards = filterActorPolitico;
      console.log("filterActorPolitico", filterActorPolitico);
    },

    async filterSexo(sexo) {
      const filterSexo = this.listCards.filter(
        (filter) => filter.sexo_prop === sexo
      );
      this.listCards = filterSexo;
    },
  },
});
