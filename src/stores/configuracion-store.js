import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useConfiguracionStore = defineStore("configuracion", {
  state: () => ({
    tipos_Elecciones: [],
    list_Distritos: [],
    list_Partidos_Politicos: [],
    list_Municipios: [],
    list_Demarcaciones: [],
    list_Edades: [],
    list_Sexo: [],
  }),
  actions: {
    //----------------------------------------------------------------------
    //TIPO DE ELECCIONES

    async loadTipoElecciones() {
      try {
        let resp = await api.get("/Tipos_Elecciones");
        let { data } = resp.data;
        let listActivo = [];
        listActivo = data.filter((x) => x.activo == true);
        let listTipoElecciones = listActivo.map((tipo) => {
          return {
            id: tipo.id,
            nombre: tipo.nombre,
            label: tipo.nombre,
            to: tipo.siglas,
            siglas: tipo.siglas,
            activo: tipo.activo,
            propietario_1: tipo.propietario_1,
            propietario_2: tipo.propietario_2,
            suplente_1: tipo.suplente_1,
            suplente_2: tipo.suplente_2,
            fecha_Registro: tipo.fecha_Registro,
          };
        });

        this.tipo_Elecciones = listTipoElecciones;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //----------------------------------------------------------------------
    //DISTRITOS

    async loadDistritos() {
      try {
        let resp = await api.get("/Distritos");
        let { data } = resp.data;
        let listDistritos = data.map((distrito) => {
          return {
            id: distrito.id,
            no_Distrito: distrito.no_Distrito,
            nombre: distrito.nombre,
            integracion: distrito.integracion,
            value: distrito.id,
            label: `${distrito.no_Distrito} - ${distrito.nombre}`,
          };
        });
        listDistritos.splice(0, 0, {
          value: 0,
          label: "Todos",
        });
        this.list_Distritos = listDistritos;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //----------------------------------------------------------------------
    //PARTIDOS POLITICOS

    async loadPartidosPoliticos() {
      try {
        let resp = await api.get("/Partidos_Politicos");
        let { data } = resp.data;
        let listPartidosPoliticos = data.map((partido) => {
          return {
            value: partido.id,
            label: `${partido.siglas}-${partido.nombre}`,
            id: partido.id,
            nombre: partido.nombre,
            siglas: partido.siglas,
            logo_URL: partido.logo_URL,
            independiente: partido.independiente,
            prioridad: partido.prioridad,
            pantone_Fondo: partido.pantone_Fondo,
            pantone_Letra: partido.pantona_Letra,
          };
        });
        listPartidosPoliticos.splice(0, 0, {
          value: 0,
          label: "Todos",
        });
        this.list_Partidos_Politicos = listPartidosPoliticos;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //----------------------------------------------------------------------
    //MUNICIPIOS

    async loadMunicipios() {
      try {
        let resp = await api.get("/Municipios/MunicipiosNayarit");
        let { data } = resp.data;
        let listMunicipios = data.map((municipio) => {
          return {
            id: municipio.id,
            estado_Id: municipio.estado_Id,
            estado: municipio.estado,
            clave: municipio.clave,
            nombre: municipio.nombre,
            fecha_Registro: municipio.fecha_Registro,
            value: municipio.id,
            label: municipio.nombre,
          };
        });
        listMunicipios.splice(0, 0, {
          value: 0,
          label: "Todos",
        });
        this.list_Municipios = listMunicipios;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //----------------------------------------------------------------------
    //DEMARCACIONES

    async loadDemarcaciones(id) {
      try {
        let resp = await api.get(`/Demarcaciones/ByMunicipio/${id}`);
        let { data } = resp.data;
        let listDemarcaciones = data.map((demarcacion) => {
          return {
            id: demarcacion.id,
            municipio_Id: demarcacion.no_Distrito,
            municipio: demarcacion.municipio,
            nombre: demarcacion.nombre,
            no_Demarcacion: demarcacion.no_Demarcacion,
            indigena: demarcacion.indigena,
            label: demarcacion.nombre,
            value: demarcacion.id,
          };
        });
        listDemarcaciones.splice(0, 0, {
          value: 0,
          label: "Todos",
        });
        this.list_Demarcaciones = listDemarcaciones;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //----------------------------------------------------------------------
    //EDADES

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
      this.list_Edades = data.map((edad) => {
        return {
          label: edad.edades,
          value: edad.id,
        };
      });
    },

    //----------------------------------------------------------------------
    //GENERO

    async loadGenero() {
      const data = [
        { id: "", sexo: "Todos" },
        { id: 1, sexo: "Mujer" },
        { id: 2, sexo: "Hombre" },
        { id: 3, sexo: "No binario" },
      ];
      this.list_Sexo = data.map((sexo) => {
        return {
          label: sexo.sexo,
          value: sexo.id,
        };
      });
    },
  },
});
