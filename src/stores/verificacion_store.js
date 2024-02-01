import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useVerificacionVacante = defineStore("useVerificacionVacante", {
  state: () => ({}),
  actions: {
    async loadCandidatoDatosGenerales(id, puesto) {
      try {
        let resp = await api.get(
          `/Candidatos_Informacion/Datos_Generales_Candidato?CandidatoId=${id}&PuestoCandidato=${puesto}`
        );
        let { data } = resp.data;
        let datosGenerales = {
          id: data.id,
          candidato_Id: data.candidato_Id,
          puesto_Candidato: data.puesto_Candidato,
          facebook: data.facebook,
          twitter: data.twitter,
          youtube: data.youtube,
          instagram: data.instagram,
          tik_Tok: data.tik_Tok,
          pagina_Web: data.pagina_Web,
          email: data.email,
          telefono: data.telefono,
          domicilio: data.domicilio,
          grado_Maximo_Estudios: data.grado_Maximo_Estudios,
          estatus_Grado_Estudios: data.estatus_Grado_Estudios,
          historia_Laboral: data.historia_Laboral,
          trayectoria: data.trayectoria,
          motivo_Cargo_Publico: data.motivo_Cargo_Publico,
          propuesta_Genero: data.propuesta_Genero,
        };

        return datosGenerales;
      } catch (error) {
        console.error(error);
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    async loadCandidatoFormacionAcademica(id, puesto) {
      try {
        let resp = await api.get(
          `/Candidatos_Informacion/Formacion_Academica_Candidato?CandidatoId=${id}&PuestoCandidato=${puesto}`
        );
        let { data } = resp.data;
        let formacionAcademica = null;
        if (data != null) {
          formacionAcademica = {
            id: data.id,
            candidato_Id: data.candidato_Id,
            puesto_Candidato: data.puesto_Candidato,
            formacion: data.formacion,
          };
        } else {
          formacionAcademica = {
            id: "",
            candidato_Id: "",
            puesto_Candidato: "",
            formacion: "",
          };
        }

        return formacionAcademica;
      } catch (error) {
        console.error(error);
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    async loadCandidatoPropuestas(id, puesto) {
      try {
        let resp = await api.get(
          `/Candidatos_Informacion/Propuestas_Candidato?CandidatoId=${id}&PuestoCandidato=${puesto}`
        );
        let { data } = resp.data;
        let propuestas = data.map((propuesta) => {
          return {
            id: propuesta.id,
            candidato_Id: propuesta.candidato_Id,
            puesto_Candidato: propuesta.puesto_Candidato,
            propuesta: propuesta.propuesta,
          };
        });
        return propuestas;
      } catch (error) {
        console.error(error);
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    async loadCandidato(id, puesto) {
      try {
        let resp = await api.get(`/Candidatos/${id}`);
        let { data } = resp.data;
        let datosCandidato = null;
        // let respPartido = await api.get(`/Partidos_Politicos`);
        // let partido = respPartido.data.data;
        // let filtroPartido = partido.find((x) => x.id == data.partido_Id);
        // let datosCandidato = {
        //   id: data.id,
        //   foto: data.url_Foto,
        //   nombre:
        //     data.nombres +
        //     " " +
        //     data.apellido_Paterno +
        //     " " +
        //     data.apellido_Materno,
        //   candidatura: data.tipo_Eleccion,
        //   cargo: data.tipo_Candidato,
        //   partido: filtroPartido.nombre,
        //   logo_Partido: data.logo_Partido,
        //   sexo: data.sexo,
        //   telefono: data.telefono,
        //   correo: data.correo,
        //   edad: data.edad,
        // };
        if (puesto == 0) {
          datosCandidato = {
            id: data.id,
            foto: data.url_Foto_Propietario,
            nombre:
              data.nombres_Propietario +
              " " +
              data.apellido_Paterno_Propietario +
              " " +
              data.apellido_Materno_Propietario,
            candidatura: data.tipo_Eleccion,
            cargo: data.tipo_Candidato,
            partido: data.partido,
            logo_Partido: data.url_Logo_Partido_Propietario,
            sexo: data.sexo_Propietario,
            telefono: data.telefono_Propietario,
            correo: data.correo_Propietario,
            edad: data.edad_Propietario,
          };
        } else if (puesto == 1) {
          datosCandidato = {
            id: data.id,
            foto: data.url_Foto_Suplente,
            nombre:
              data.nombres_Suplente +
              " " +
              data.apellido_Paterno_Suplente +
              " " +
              data.apellido_Materno_Suplente,
            candidatura: data.tipo_Eleccion,
            cargo: data.tipo_Candidato,
            partido: data.partido,
            logo_Partido: data.url_Logo_Partido_Suplente,
            sexo: data.sexo_Suplente,
            telefono: data.telefono_Suplente,
            correo: data.correo_Suplente,
            edad: data.edad_Suplente,
          };
        }
        return datosCandidato;
      } catch (error) {
        console.error(error);
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },
  },
});
