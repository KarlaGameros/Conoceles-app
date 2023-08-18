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
        console.log("-----candidatos", valor);
        this.isCandidatosPage = valor;
      },

      actualizarDetalle(valor) {
        this.isDetallePage = valor;
      },

      actualizarChart(valor) {
        console.log("---------", valor);
        this.isChartPagePS = valor;
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

      async filterCards(municipio) {
        const filteredCards = this.listCards.filter(
          (card) => card.municipio === municipio
        );
        this.listCards = filteredCards;
      },

      async filterActorPolitico(actor_politico) {
        const filterActorPolitico = this.listCards.filter(
          (actor) => actor.siglas === actor_politico
        );
        this.listCards = filterActorPolitico;
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

      async filterSexo(sexo) {
        const filterSexo = this.listCards.filter(
          (filter) => filter.sexo_prop === sexo
        );
        this.listCards = filterSexo;
      },
    },
  }
);
