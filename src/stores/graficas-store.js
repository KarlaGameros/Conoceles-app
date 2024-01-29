import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useGraficasStore = defineStore("useGraficasStore", {
  state: () => ({
    list_Graficas_By_Eleccion: [],
    list_Graficas_Filtrado: [],
  }),

  actions: {
    increment() {
      this.counter++;
    },

    //---------------------------------------------------------------------------------
    async loadGraficasByEleccion(id) {
      try {
        let resp = await api.get(
          `/Tipos_Elecciones/DataGraficasGralGeneroByTipoEleccion/${id}`
        );
        let { data } = resp.data;
        this.list_Graficas_By_Eleccion = data.map((item) => {
          return {
            candidato_Id: item.candidato_Id,
            tipo_Eleccion_Id: item.tipo_Eleccion_Id,
            puesto: item.puesto,
            sexo: item.sexo,
            edad: item.edad,
          };
        });
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },
  },
});
