import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    isHomePage: false,
    buttons: false,
    selectedTab: null,
    isCandidatosPage: false,
    isDetallePage: false,
    isChartPage: false,
    listCards: [],
    listDistritos: [],
    listFiltroCards: [],
    listEdades: [],
    listActorPolitico: [],
    listSexo: [],
    card: {
      id: null,
      selection: null,
      label: null,
      prop: null,
      siglas: null,
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
      prop_sin: null,
      nombre_prop_sin: null,
      edad_prop_sin: null,
      sexo_prop_sin: null,
      cargo_prop_sin: null,
      estado_prop_sin: null,
      formula_prop_sin: null,
      sup_sin: null,
      nombre_sup_sin: null,
      edad_sup_sin: null,
      cargo_sup_sin: null,
      sexo_sup_sin: null,
      estado_sup_sin: null,
      formula_sup_sin: null,
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

    actualizarBack(valor) {
      this.back = valor;
    },

    actualizarTab(valor) {
      this.selectedTab = valor;
    },

    actualizarButtonColor(valor) {
      this.buttons = valor;
    },

    //---------------------------------------------------------------------------------

    async loadCards() {
      this.listCards = [
        {
          id: 1,
          visible: false,
          selection: "prop",
          label: "",
          municipio: 1,
          siglas: 1,
          municipio_name: "Acaponeta",
          demarcacion_Id: 1,
          distrito: 1,
          distrito_name: "Acaponeta",
          prop: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_prop: "CARLOS ROBERTO",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Prop. Presidente",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup: "MARIA LOPEZ",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Sup. Presidente",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          prop_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop_sin: "ALEXIS LOPEZ",
          edad_prop_sin: 35,
          sexo_prop_sin: "Hombre",
          cargo_prop_sin: "Prop. Sindico",
          estado_prop_sin: "Nayarit",
          formula_prop_sin: "42456",
          sup_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup_sin: "MARIA TORRES",
          edad_sup_sin: 45,
          sexo_sup_sin: "Mujer",
          cargo_sup_sin: "Sup. Sindico",
          estado_sup_sin: "Nayarit",
          formula_sup_sin: "785456",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
        },
        {
          id: 2,
          visible: false,
          selection: "prop",
          label: "",
          siglas: 1,
          distrito: 1,
          distrito: "Acaponeta",
          municipio: 2,
          municipio_name: "Ahuacatlán",
          demarcacion_Id: 1,
          distrito: 3,
          distrito_name: "Del Nayar",
          prop: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop: "GILBERTO MARTINES",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup: "TANIA LOPEZ",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          prop_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop_sin: "JUAN LOPEZ",
          edad_prop_sin: 35,
          sexo_prop_sin: "Hombre",
          cargo_prop_sin: "Diputado",
          estado_prop_sin: "Nayarit",
          formula_prop_sin: "42456",
          sup_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup_sin: "KENIA TORRES",
          edad_sup_sin: 45,
          sexo_sup_sin: "Mujer",
          cargo_sup_sin: "Diputada",
          estado_sup_sin: "Nayarit",
          formula_sup_sin: "785456",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PAN.png",
        },
        {
          id: 3,
          visible: false,
          selection: "prop",
          label: "",
          siglas: 2,
          municipio: 17,
          municipio_name: "Tepic",
          demarcacion_Id: 2,
          distrito: 2,
          distrito_name: "Tecuala",
          prop: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_prop: "LUIS TAPIA",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Diputado",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup: "BEATRIZ LOPEZ",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Diputada",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          prop_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop_sin: "RAMON LOPEZ",
          edad_prop_sin: 35,
          sexo_prop_sin: "Hombre",
          cargo_prop_sin: "Diputado",
          estado_prop_sin: "Nayarit",
          formula_prop_sin: "42456",
          sup_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup_sin: "GUADALUPE TORRES",
          edad_sup_sin: 45,
          sexo_sup_sin: "Mujer",
          cargo_sup_sin: "Diputada",
          estado_sup_sin: "Nayarit",
          formula_sup_sin: "785456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
        },
        {
          id: 4,
          visible: false,
          selection: "prop",
          label: "",
          siglas: 2,
          municipio: 2,
          municipio_name: "Ahuacatlán",
          demarcacion_Id: 2,
          distrito: 2,
          distrito_name: "Tecuala",
          prop: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop: "FERNANDO PEREZ",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Prop. Presidente",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup: "MIRIAM SMITH",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Sup. Presidente",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          prop_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop_sin: "EMILIO GAMEROS",
          edad_prop_sin: 35,
          sexo_prop_sin: "Hombre",
          cargo_prop_sin: "Prop. Sindico",
          estado_prop_sin: "Nayarit",
          formula_prop_sin: "42456",
          sup_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup_sin: "ALEJANDRA GOMEZ",
          edad_sup_sin: 45,
          sexo_sup_sin: "Mujer",
          cargo_sup_sin: "Sup. Sindico",
          estado_sup_sin: "Nayarit",
          formula_sup_sin: "785456",
          imgPartido1:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
        },
        {
          id: 5,
          visible: false,
          selection: "prop",
          label: "",
          municipio: 1,
          siglas: 1,
          municipio_name: "Acaponeta",
          demarcacion_Id: 1,
          distrito: 1,
          distrito_name: "Acaponeta",
          prop: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_prop: "MARIA VALDEZ",
          edad_prop: 25,
          sexo_prop: "Mujer",
          cargo_prop: "Prop. Presidente",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_sup: "LUZ ESQUEDA",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Sup. Presidente",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          prop_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop_sin: "ANGEL CASTRO",
          edad_prop_sin: 35,
          sexo_prop_sin: "Hombre",
          cargo_prop_sin: "Prop. Sindico",
          estado_prop_sin: "Nayarit",
          formula_prop_sin: "42456",
          sup_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup_sin: "KAREN ORTEGA",
          edad_sup_sin: 45,
          sexo_sup_sin: "Mujer",
          cargo_sup_sin: "Sup. Sindico",
          estado_sup_sin: "Nayarit",
          formula_sup_sin: "785456",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MC.png",
        },
        {
          id: 6,
          visible: false,
          selection: "prop",
          label: "",
          municipio: 1,
          siglas: 1,
          municipio_name: "Acaponeta",
          demarcacion_Id: 1,
          distrito: 1,
          distrito_name: "Acaponeta",
          prop: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_prop: "GRECIA VALDEZ",
          edad_prop: 25,
          sexo_prop: "Mujer",
          cargo_prop: "Prop. Presidente",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup: "MARY ORTEGA",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Sup. Presidente",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          prop_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop_sin: "JONAH MONTES",
          edad_prop_sin: 35,
          sexo_prop_sin: "Hombre",
          cargo_prop_sin: "Prop. Sindico",
          estado_prop_sin: "Nayarit",
          formula_prop_sin: "42456",
          sup_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_sup_sin: "OMAR GAMEROS",
          edad_sup_sin: 45,
          sexo_sup_sin: "Hombre",
          cargo_sup_sin: "Sup. Sindico",
          estado_sup_sin: "Nayarit",
          formula_sup_sin: "785456",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/MC.png",
        },
        {
          id: 7,
          visible: false,
          selection: "prop",
          label: "",
          municipio: 1,
          siglas: 1,
          municipio_name: "Acaponeta",
          demarcacion_Id: 1,
          distrito: 1,
          distrito_name: "Acaponeta",
          prop: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop: "MARTIN DE LA ROSA",
          edad_prop: 25,
          sexo_prop: "Hombre",
          cargo_prop: "Prop. Presidente",
          estado_prop: "Nayarit",
          formula_prop: "12456",
          sup: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup: "LUZ MARIA LOPEZ",
          edad_sup: 30,
          sexo_sup: "Mujer",
          cargo_sup: "Sup. Presidente",
          estado_sup: "Nayarit",
          formula_sup: "789456",
          prop_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          nombre_prop_sin: "MIGUEL LOPEZ",
          edad_prop_sin: 35,
          sexo_prop_sin: "Hombre",
          cargo_prop_sin: "Prop. Sindico",
          estado_prop_sin: "Nayarit",
          formula_prop_sin: "42456",
          sup_sin:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
          nombre_sup_sin: "MARGARITA TORRES",
          edad_sup_sin: 45,
          sexo_sup_sin: "Mujer",
          cargo_sup_sin: "Sup. Sindico",
          estado_sup_sin: "Nayarit",
          formula_sup_sin: "785456",
          imgPartido3:
            "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/RSP.png",
        },
      ];
    },

    //---------------------------------------------------------------------------------

    async loadDistritos() {
      const data = [
        { id: 0, nombre: "Todos" },
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
        { id: "", nombre: "Representación proporcinal" },
      ];
      this.listDistritos = data.map((distrito) => {
        return {
          label:
            distrito.id == 0
              ? distrito.nombre
              : `${distrito.id} - ${distrito.nombre}`,
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

    async loadSexo() {
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

    async loadActorPolitico() {
      const data = [
        { id: 0, siglas: "TODOS", nombre: "TODOS" },
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
        { id: 8, siglas: "NAN", nombre: "Partido Nueva Alianza Nayarit" },
        {
          id: 9,
          siglas: "MLN",
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
          label:
            actorPolitico.id == 0
              ? actorPolitico.nombre
              : `${actorPolitico.siglas}-${actorPolitico.nombre}`,
          value: actorPolitico.id,
        };
      });
    },

    //---------------------------------------------------------------------------------

    async loadCard(id) {
      const card = this.listCards.find((card) => card.id == id);
      if (card) {
        this.card.id = card.id;
        this.card.label = card.label;
        this.card.prop = card.prop;
        this.card.selection = card.selection;
        this.card.nombre_prop = card.nombre_prop;
        this.card.demarcacion_Id = card.demarcacion_Id;
        this.card.siglas = card.siglas;
        this.card.distrito = card.distrito;
        this.card.distrito_name = card.distrito_name;
        this.card.municipio = card.municipio;
        this.card.municipio_name = card.municipio_name;
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
        this.card.prop_sin = card.prop_sin;
        this.card.nombre_prop_sin = card.nombre_prop_sin;
        this.card.edad_prop_sin = card.edad_prop_sin;
        this.card.sexo_prop_sin = card.sexo_prop_sin;
        this.card.cargo_prop_sin = card.cargo_prop_sin;
        this.card.estado_prop_sin = card.estado_prop_sin;
        this.card.formula_prop_sin = card.formula_prop_sin;
        this.card.sup_sin = card.sup_sin;
        this.card.nombre_sup_sin = card.nombre_sup_sin;
        this.card.cargo_sup_sin = card.cargo_sup_sin;
        this.card.edad_sup_sin = card.edad_sup_sin;
        this.card.sexo_sup_sin = card.sexo_sup_sin;
        this.card.estado_sup_sin = card.estado_sup_sin;
        this.card.formula_sup_sin = card.formula_sup_sin;
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
    },

    async filterEdad(rango_edad) {
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
    },

    async filterSexo(sexo) {
      const filterSexo = this.listCards.filter(
        (filter) => filter.sexo_prop === sexo
      );
      this.listCards = filterSexo;
    },
  },
});
