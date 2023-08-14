import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const usePresidenciaSindicaturiaStore = defineStore(
  "presidenciaSindicaturia",
  {
    state: () => ({
      isHomePagePS: false,
      isCandidatosPage: false,
      isDetallePage: false,
      isChartPagePS: false,
      listCards: [],
      listMunicipios: [],
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
        this.isHomePagePS = valor;
      },

      actualizarCandidatos(valor) {
        this.isCandidatosPage = valor;
      },

      actualizarDetalle(valor) {
        this.isDetallePage = valor;
      },

      actualizarChart(valor) {
        this.isChartPagePS = valor;
      },

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
            prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
            nombre_prop: "CARLOS ROBERTO",
            edad_prop: 25,
            sexo_prop: "Hombre",
            cargo_prop: "Prop. Presidente",
            estado_prop: "Nayarit",
            formula_prop: "12456",
            sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
            nombre_sup: "MARIA LOPEZ",
            edad_sup: 30,
            sexo_sup: "Mujer",
            cargo_sup: "Sup. Presidente",
            estado_sup: "Nayarit",
            formula_sup: "789456",
            prop_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/nacho%20corona.png",
            nombre_prop_sin: "ALEXIS LOPEZ",
            edad_prop_sin: 35,
            sexo_prop_sin: "Hombre",
            cargo_prop_sin: "Prop. Sindico",
            estado_prop_sin: "Nayarit",
            formula_prop_sin: "42456",
            sup_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/paloma%20%20de%20los%20santos.jpg",
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
            municipio: 2,
            municipio_name: "Ahuacatlán",
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
            prop_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/nacho%20corona.png",
            nombre_prop_sin: "ALEXIS LOPEZ",
            edad_prop_sin: 35,
            sexo_prop_sin: "Hombre",
            cargo_prop_sin: "Diputado",
            estado_prop_sin: "Nayarit",
            formula_prop_sin: "42456",
            sup_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/paloma%20%20de%20los%20santos.jpg",
            nombre_sup_sin: "MARIA TORRES",
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
            prop_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/nacho%20corona.png",
            nombre_prop_sin: "ALEXIS LOPEZ",
            edad_prop_sin: 35,
            sexo_prop_sin: "Hombre",
            cargo_prop_sin: "Diputado",
            estado_prop_sin: "Nayarit",
            formula_prop_sin: "42456",
            sup_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/paloma%20%20de%20los%20santos.jpg",
            nombre_sup_sin: "MARIA TORRES",
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
            prop: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-05%20at%2011.32.55%20PM.jpeg",
            nombre_prop: "CARLOS ROBERTO",
            edad_prop: 25,
            sexo_prop: "Hombre",
            cargo_prop: "Prop. Presidente",
            estado_prop: "Nayarit",
            formula_prop: "12456",
            sup: "http://www.conoceles-coahuila.org/archivos/fotos_candidaturas/WhatsApp%20Image%202023-04-14%20at%2012.44.11%20PM.jpeg",
            nombre_sup: "MARIA LOPEZ",
            edad_sup: 30,
            sexo_sup: "Mujer",
            cargo_sup: "Sup. Presidente",
            estado_sup: "Nayarit",
            formula_sup: "789456",
            prop_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/nacho%20corona.png",
            nombre_prop_sin: "ALEXIS LOPEZ",
            edad_prop_sin: 35,
            sexo_prop_sin: "Hombre",
            cargo_prop_sin: "Prop. Sindico",
            estado_prop_sin: "Nayarit",
            formula_prop_sin: "42456",
            sup_sin:
              "https://conoceles-coahuila.org/archivos/fotos_candidaturas/paloma%20%20de%20los%20santos.jpg",
            nombre_sup_sin: "MARIA TORRES",
            edad_sup_sin: 45,
            sexo_sup_sin: "Mujer",
            cargo_sup_sin: "Sup. Sindico",
            estado_sup_sin: "Nayarit",
            formula_sup_sin: "785456",
            imgPartido1:
              "https://www.prepnayarit2021.com/storage/actas_digitales/midaec/logos_partidos/PRI.png",
          },
        ];
      },

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

      async loadCard(id) {
        console.log("id", id);
        const card = this.listCards.find((card) => card.id === id);

        if (card) {
          this.card.id = card.id;
          this.card.label = card.label;
          this.card.prop = card.prop;
          this.card.selection = card.selection;
          this.card.nombre_prop = card.nombre_prop;
          this.card.siglas = card.siglas;
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
        console.log("this.card", this.card);
      },

      async filterCards(municipio) {
        const filteredCards = this.listCards.filter(
          (card) => card.municipio === municipio
        );
        console.log(filteredCards);
        this.listCards = filteredCards;
      },

      async filterActorPolitico(actor_politico) {
        console.log("fil", actor_politico);
        const filterActorPolitico = this.listCards.filter(
          (actor) => actor.siglas === actor_politico
        );
        this.listCards = filterActorPolitico;
        console.log("list", filterActorPolitico);
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

      async filterSexo(sexo) {
        const filterSexo = this.listCards.filter(
          (filter) => filter.sexo_prop === sexo
        );
        this.listCards = filterSexo;
      },
    },
  }
);
