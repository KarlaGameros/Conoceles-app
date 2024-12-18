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
          historia_Laboral:
            data.historia_Laboral != null
              ? data.historia_Laboral.replaceAll("\t", " ")
              : data.historia_Laboral,
          trayectoria:
            data.trayectoria != null
              ? data.trayectoria.replaceAll("\t", " ")
              : data.trayectoria,
          motivo_Cargo_Publico:
            data.motivo_Cargo_Publico != null
              ? data.motivo_Cargo_Publico.replaceAll("\t", " ")
              : data.motivo_Cargo_Publico,
          propuesta_Genero:
            data.propuesta_Genero != null
              ? data.propuesta_Genero.replaceAll("\t", " ")
              : data.propuesta_Genero,
        };
        return datosGenerales;
      } catch (error) {
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
            formacion: data.formacion.replaceAll("\t", " "),
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
            propuesta: propuesta.propuesta.replaceAll("\t", " "),
          };
        });
        return propuestas;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    async loadCandidato(id, puesto) {
      try {
        let resp = await api.get(`/Candidatos/${id}/${puesto}`);
        let { data } = resp.data;
        let datosCandidato = null;
        datosCandidato = {
          tipo_Candidato: data.tipo_Candidato,
          puesto:
            data.puesto == 0
              ? "Propietaria"
              : data.puesto == 1
              ? "Suplente"
              : data.puesto == 2
              ? "Propietaria síndico"
              : "Suplente síndico",
          id: data.id,
          foto: data.url_Foto,
          mote: data.mote,
          nombre:
            data.nombres +
            " " +
            data.apellido_Paterno +
            " " +
            data.apellido_Materno,
          candidatura: data.tipo_Eleccion,
          cargo: data.tipo_Candidato,
          partido: data.partido,
          logo_Partido: data.logo_Partido,
          sexo: data.sexo,
          telefono: data.telefono,
          correo: data.correo,
          edad: data.edad,
          is_Coalicion: data.is_Coalicion,
          is_Comun: data.is_Comun,
          comun: data.comun,
          logo_Comun: data.logo_Comun,
          coalicion_Id: data.coalicion_Id,
          coalicion: data.coalicion,
          logo_Coalicion: data.logo_Coalicion,
          informacion_Pausada: data.informacion_Pausada,
        };
        return datosCandidato;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },
  },
});
