import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    loading: false,
    isHomePage: false,
    limpiar: false,
    buttons: false,
    documentoExcel: null,
    selectedTab: null,
    list_Candidatos: [],
    list_Candidatos_By_Eleccion: [],
    listCards: [],
    listFiltroCards: [],
    list_Propuestas: [],
    list_Group: [],
    distrito_Id_movil: null,
    actor_politico_Id_movil: null,
    rango_edad_Id_movil: null,
    sexo_Id_movil: null,
    municipio_Id_movil: null,
    demarcacion_Id_movil: null,
    cargo: "MR",
    candidato: {
      uno_Aviso_Privacidad: false,
      dos_Publicacion: false,
      tres_Informe_Estadistico: false,
      selection: null,
      label: null,
      informacion_Pausada: null,
      id: null,
      no_Formula: null,
      puesto: null,
      estatus: null,
      municipio_Id: null,
      municipio: null,
      distrito_Id: null,
      no_Distrito: null,
      distrito: null,
      demarcacion_Id: null,
      demarcacion: null,
      tipo_Candidato: null,
      orden: null,
      aprobado: null,
      validado: null,
      validado_IEEN: null,
      nombres: null,
      apellido_Paterno: null,
      apellido_Materno: null,
      mote: null,
      sexo: null,
      url_Foto: null,
      clave_Elector: null,
      rfc: null,
      curp: null,
      fecha_Nacimiento: null,
      ocupacion: null,
      telefono: null,
      correo: null,
      pertenece_Grupo_Vulnerable_Propietario: false,
      grupo_Vulnerable_Propietario: null,
      consentimiento_URL: null,
      avance_Curricular: null,
      faltante_Curricular: null,
      is_Coalicion: false,
      coalicion_Id: null,
      coalicion: null,
      logo_Coalicion: null,
      is_Comun: false,
      comun_Id: null,
      comun: null,
      logo_Comun: null,
      logo_Partido: null,
      partido_Id: null,
      partido: null,
      orden_Publicacion: null,
      edad: null,
      tipo_Eleccion_Id: null,
      tipo_Eleccion: null,
      indigena: null,
      afromexicano: null,
      discapacidad: null,
      lgbttiq: null,
      migrante: null,
      poblacion_Mayor: null,
      poblacion_Joven: null,
      informacion_Pausada: null,
      consecutivo: false,
      grupo1: false,
      grupo2: false,
      grupo3: false,
      grupo4: false,
    },
    info: {
      latitud: null,
      longitud: null,
      marca: null,
      modelo: null,
      sistema_Operativo: null,
    },
    formacion: {
      id: null,
      candidato_Id: null,
      puesto_Candidato: null,
      formacion: null,
    },
    datos_Generales: {
      id: null,
      candidato_Id: null,
      puesto_Candidato: null,
      facebook: null,
      twitter: null,
      youtube: null,
      instagram: null,
      tik_Tok: null,
      pagina_Web: null,
      email: null,
      telefono: null,
      domicilio: null,
      grado_Maximo_Estudios: null,
      estatus_Grado_Estudios: null,
      historia_Laboral: null,
      trayectoria: null,
      motivo_Cargo_Publico: null,
      propuesta_Genero: null,
    },
  }),
  actions: {
    actualizarMenu(valor) {
      this.isHomePage = valor;
    },

    actualizarButtonColor(valor) {
      this.buttons = valor;
    },

    limpiarFiltros() {
      this.listFiltroCards = [];
    },

    initDatosGenerales() {
      this.datos_Generales.id = null;
      this.datos_Generales.candidato_Id = null;
      this.datos_Generales.puesto_Candidato = null;
      this.datos_Generales.facebook = null;
      this.datos_Generales.twitter = null;
      this.datos_Generales.youtube = null;
      this.datos_Generales.instagram = null;
      this.datos_Generales.tik_Tok = null;
      this.datos_Generales.pagina_Web = null;
      this.datos_Generales.email = null;
      this.datos_Generales.telefono = null;
      this.datos_Generales.domicilio = null;
      this.datos_Generales.grado_Maximo_Estudios = null;
      this.datos_Generales.estatus_Grado_Estudios = null;
      this.datos_Generales.historia_Laboral = null;
      this.datos_Generales.trayectoria = null;
      this.datos_Generales.motivo_Cargo_Publico = null;
      this.datos_Generales.propuesta_Genero = null;
    },

    initCandidato() {
      this.candidato.informacion_Pausada = null;
      this.candidato.id = null;
      this.candidato.no_Formula = null;
      this.candidato.puesto = null;
      this.candidato.estatus = null;
      this.candidato.municipio_Id = null;
      this.candidato.municipio = null;
      this.candidato.distrito_Id = null;
      this.candidato.no_Distrito = null;
      this.candidato.distrito = null;
      this.candidato.demarcacion_Id = null;
      this.candidato.demarcacion = null;
      this.candidato.tipo_Candidato = null;
      this.candidato.orden = null;
      this.candidato.aprobado = null;
      this.candidato.validado = null;
      this.candidato.validado_IEEN = null;
      this.candidato.nombres = null;
      this.candidato.apellido_Paterno = null;
      this.candidato.apellido_Materno = null;
      this.candidato.mote = null;
      this.candidato.sexo = null;
      this.candidato.url_Foto = null;
      this.candidato.clave_Elector = null;
      this.candidato.rfc = null;
      this.candidato.curp = null;
      this.candidato.fecha_Nacimiento = null;
      this.candidato.ocupacion = null;
      this.candidato.telefono = null;
      this.candidato.correo = null;
      this.candidato.pertenece_Grupo_Vulnerable_Propietario = false;
      this.candidato.grupo_Vulnerable_Propietario = null;
      this.candidato.consentimiento_URL = null;
      this.candidato.avance_Curricular = null;
      this.candidato.faltante_Curricular = null;
      this.candidato.is_Coalicion = false;
      this.candidato.coalicion_Id = null;
      this.candidato.coalicion = null;
      this.candidato.logo_Coalicion = null;
      this.candidato.is_Comun = false;
      this.candidato.comun_Id = null;
      this.candidato.comun = null;
      this.candidato.logo_Comun = null;
      this.candidato.logo_Partido = null;
      this.candidato.partido_Id = null;
      this.candidato.partido = null;
      this.candidato.orden_Publicacion = null;
      this.candidato.edad = null;
      this.candidato.tipo_Eleccion_Id = null;
      this.candidato.tipo_Eleccion = null;
      this.candidato.indigena = null;
      this.candidato.afromexicano = null;
      this.candidato.discapacidad = null;
      this.candidato.lgbttiq = null;
      this.candidato.poblacion_Mayor = null;
      this.candidato.poblacion_Joven = null;
      this.candidato.informacion_Pausada = null;
      this.candidato.consecutivo = false;
      this.candidato.grupo1 = false;
      this.candidato.grupo2 = false;
      this.candidato.grupo3 = false;
      this.candidato.grupo4 = false;
    },

    //---------------------------------------------------------------------------------

    async loadExcel() {
      try {
        this.documentoExcel = "";
        const resp = await api.get("/Candidatos/Zip", {
          responseType: "blob",
        });
        if (resp.status == 200) {
          let blob = new window.Blob([resp.data], {
            type: "application/zip",
          });
          this.documentoExcel = window.URL.createObjectURL(blob);
          return { success: true };
        } else {
          return {
            success: false,
            data: "Error al descargar archivo, intentelo de nuevo",
          };
        }
      } catch (error) {
        return {
          success: false,
          data: "Ocurrio un error, intentelo de nuevo. Si el error persiste contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------

    async loadCandidatosByEleccion(id) {
      try {
        this.list_Candidatos_By_Eleccion = [];
        this.loading = true;
        let resp = await api.get(`/Candidatos/ByTipoEleccion/${id}`);
        let { data } = resp.data;
        let filtro = data.filter((x) => x.id != 776 && x.id != 655);
        let listCandidatos = filtro.map((candidato) => {
          return {
            selection: "prop",
            id: candidato.id,
            no_Formula: candidato.no_Formula,
            tipo_Eleccion_Id: candidato.tipo_Eleccion_Id,
            tipo_Eleccion: candidato.tipo_Eleccion,
            municipio_Id: candidato.municipio_Id,
            municipio: candidato.municipio,
            distrito_Id: candidato.distrito_Id,
            distrito: candidato.distrito,
            no_Distrito: candidato.no_Distrito,
            demarcacion_Id: candidato.demarcacion_Id,
            demarcacion: candidato.demarcacion,
            coalicion_Id: candidato.coalicion_Id,
            coalicion: candidato.coalicion,
            url_Logo_Coalicion: candidato.url_Logo_Coalicion,
            estatus: candidato.estatus,
            usuario_Id: candidato.usuario_Id,
            is_Coalicion: candidato.is_Coalicion,
            activo: candidato.activo,
            tipo_Candidato: candidato.tipo_Candidato,
            orden: candidato.orden,
            validado: candidato.validado,
            fecha_Registro: candidato.fecha_Registro,
            is_Comun: candidato.is_Comun,
            comun: candidato.comun,
            comun_Id: candidato.comun_Id,
            url_Logo_Comun: candidato.url_Logo_Comun,
            //-----------PROPIETARIO---------------------
            consecutivo_Propietario: candidato.consecutivo_Propietario,
            grado_Academico_Propietario: candidato.grado_Academico_Propietario,
            nombres_Propietario: candidato.nombres_Propietario,
            apellido_Paterno_Propietario:
              candidato.apellido_Paterno_Propietario == null
                ? ""
                : candidato.apellido_Paterno_Propietario,
            apellido_Materno_Propietario:
              candidato.apellido_Materno_Propietario == null
                ? ""
                : candidato.apellido_Materno_Propietario,
            nombre_Completo_Propietario: `${candidato.nombres_Propietario.trim()} ${
              candidato.apellido_Paterno_Propietario == null
                ? ""
                : candidato.apellido_Paterno_Propietario.trim()
            } ${
              candidato.apellido_Materno_Propietario == null
                ? ""
                : candidato.apellido_Materno_Propietario.trim()
            }`,
            mote_Propietario: candidato.mote_Propietario,
            sexo_Propietario: candidato.sexo_Propietario,
            url_Foto_Propietario: candidato.url_Foto_Propietario,
            clave_Elector_Propietario: candidato.clave_Elector_Propietario,
            rfC_Propietario: candidato.rfC_Propietario,
            curP_Propietario: candidato.curP_Propietario,
            fecha_Nacimiento_Propietario:
              candidato.fecha_Nacimiento_Propietario,
            ocupacion_Propietario: candidato.ocupacion_Propietario,
            telefono_Propietario: candidato.telefono_Propietario,
            correo_Propietario: candidato.correo_Propietario,
            pertenece_Grupo_Vulnerable_Propietario:
              candidato.pertenece_Grupo_Vulnerable_Propietario,
            grupo_Vulnerable_Propietario:
              candidato.grupo_Vulnerable_Propietario,
            edad_Propietario: candidato.edad_Propietario,
            partido_Id: candidato.partido_Id,
            partido: candidato.partido,
            url_Logo_Partido_Propietario:
              candidato.url_Logo_Partido_Propietario,
            //-----------PROPIETARIO 2---------------------
            consecutivo_Propietario_2: candidato.consecutivo_Propietario_2,
            grado_Academico_Propietario_2:
              candidato.grado_Academico_Propietario_2,
            nombre_Completo_Propietario_2: `${candidato.nombres_Propietario_2.trim()} ${
              candidato.apellido_Paterno_Propietario_2 == null
                ? ""
                : candidato.apellido_Paterno_Propietario_2.trim()
            } ${
              candidato.apellido_Materno_Propietario_2 == null
                ? ""
                : candidato.apellido_Materno_Propietario_2.trim()
            }`,
            nombres_Propietario_2: candidato.nombres_Propietario_2,
            apellido_Paterno_Propietario_2:
              candidato.apellido_Paterno_Propietario_2 == null
                ? ""
                : candidato.apellido_Paterno_Propietario_2,
            apellido_Materno_Propietario_2:
              candidato.apellido_Materno_Propietario_2 == null
                ? ""
                : candidato.apellido_Materno_Propietario_2,
            mote_Propietario_2: candidato.mote_Propietario_2,
            sexo_Propietario_2: candidato.sexo_Propietario_2,
            url_Foto_Propietario_2: candidato.url_Foto_Propietario_2,
            clave_Elector_Propietario_2: candidato.clave_Elector_Propietario_2,
            rfC_Propietario_2: candidato.rfC_Propietario_2,
            curP_Propietario_2: candidato.curP_Propietario_2,
            fecha_Nacimiento_Propietario_2:
              candidato.fecha_Nacimiento_Propietario_2,
            ocupacion_Propietario_2: candidato.ocupacion_Propietario_2,
            telefono_Propietario_2: candidato.telefono_Propietario_2,
            correo_Propietario_2: candidato.correo_Propietario_2,
            pertenece_Grupo_Vulnerable_Propietario_2:
              candidato.pertenece_Grupo_Vulnerable_Propietario_2,
            grupo_Vulnerable_Propietario_2:
              candidato.grupo_Vulnerable_Propietario_2,
            edad_Propietario_2: candidato.edad_Propietario_2,
            partido_Propietario_2_Id: candidato.partido_Propietario_2_Id,
            partido_Propietario_2: candidato.partido_Propietario_2,
            url_Logo_Partido_Propietario_2:
              candidato.url_Logo_Partido_Propietario_2,
            //-----------SUPLENTE---------------------
            grado_Academico_Suplente: candidato.grado_Academico_Suplente,
            nombre_Completo_Suplente: `${candidato.nombres_Suplente.trim()} ${
              candidato.apellido_Paterno_Suplente == null
                ? ""
                : candidato.apellido_Paterno_Suplente.trim()
            } ${
              candidato.apellido_Materno_Suplente == null
                ? ""
                : candidato.apellido_Materno_Suplente.trim()
            }`,
            nombres_Suplente: candidato.nombres_Suplente,
            apellido_Paterno_Suplente:
              candidato.apellido_Paterno_Suplente == null
                ? ""
                : candidato.apellido_Paterno_Suplente,
            apellido_Materno_Suplente:
              candidato.apellido_Materno_Suplente == null
                ? ""
                : candidato.apellido_Materno_Suplente,
            mote_Suplente: candidato.mote_Suplente,
            sexo_Suplente: candidato.sexo_Suplente,
            url_Foto_Suplente: candidato.url_Foto_Suplente,
            clave_Elector_Suplente: candidato.clave_Elector_Suplente,
            rfC_Suplente: candidato.rfC_Suplente,
            curP_Suplente: candidato.curP_Suplente,
            fecha_Nacimiento_Suplente: candidato.fecha_Nacimiento_Suplente,
            ocupacion_Suplente: candidato.ocupacion_Suplente,
            telefono_Suplente: candidato.telefono_Suplente,
            correo_Suplente: candidato.correo_Suplente,
            edad_Suplente: candidato.edad_Suplente,
            pertenece_Grupo_Vulnerable_Suplente:
              candidato.pertenece_Grupo_Vulnerable_Suplente,
            grupo_Vulnerable_Suplente: candidato.grupo_Vulnerable_Suplente,
            partido_Suplente_Id: candidato.partido_Suplente_Id,
            partido_Suplente: candidato.partido_Suplente,
            url_Logo_Partido_Suplente: candidato.url_Logo_Partido_Suplente,
            //-----------SUPLENTE 2---------------------
            grado_Academico_Suplente_2: candidato.grado_Academico_Suplente_2,
            nombre_Completo_Suplente_2: `${candidato.nombres_Suplente_2.trim()} ${
              candidato.apellido_Paterno_Suplente_2 == null
                ? ""
                : candidato.apellido_Paterno_Suplente_2.trim()
            } ${
              candidato.apellido_Materno_Suplente_2 == null
                ? ""
                : candidato.apellido_Materno_Suplente_2.trim()
            }`,
            nombres_Suplente_2: candidato.nombres_Suplente_2,
            apellido_Paterno_Suplente_2:
              candidato.apellido_Paterno_Suplente_2 == null
                ? ""
                : candidato.apellido_Paterno_Suplente_2,
            apellido_Materno_Suplente_2:
              candidato.apellido_Materno_Suplente_2 == null
                ? ""
                : candidato.apellido_Materno_Suplente_2,
            mote_Suplente_2: candidato.mote_Suplente_2,
            sexo_Suplente_2: candidato.sexo_Suplente_2,
            url_Foto_Suplente_2: candidato.url_Foto_Suplente_2,
            clave_Elector_Suplente_2: candidato.clave_Elector_Suplente_2,
            rfC_Suplente_2: candidato.rfC_Suplente_2,
            curP_Suplente_2: candidato.curP_Suplente_2,
            fecha_Nacimiento_Suplente_2: candidato.fecha_Nacimiento_Suplente_2,
            ocupacion_Suplente_2: candidato.ocupacion_Suplente_2,
            telefono_Suplente_2: candidato.telefono_Suplente_2,
            correo_Suplente_2: candidato.correo_Suplente_2,
            pertenece_Grupo_Vulnerable_Suplente_2:
              candidato.pertenece_Grupo_Vulnerable_Suplente_2,
            grupo_Vulnerable_Suplente_2: candidato.grupo_Vulnerable_Suplente_2,
            partido_Suplente_2_Id: candidato.partido_Suplente_2_Id,
            partido_Suplente_2: candidato.partido_Suplente_2,
            url_Logo_Partido_Suplente_2: candidato.url_Logo_Partido_Suplente_2,
            edad_Suplente_2: candidato.edad_Suplente_2,
            validado_Propietario: candidato.validado_Propietario,
            validado_Propietario_2: candidato.validado_Propietario_2,
            validado_Suplente: candidato.validado_Suplente,
            validado_Suplente_2: candidato.validado_Suplente_2,
            identidadPropietario:
              candidato.informacion_Pausada_Propietario != null
                ? candidato.informacion_Pausada_Propietario.split("|")
                : "",
            informacion_Pausada_Propietario:
              candidato.informacion_Pausada_Propietario,
            informacion_Pausada_Propietario_2:
              candidato.informacion_Pausada_Propietario_2,
            identidadPropietario2:
              candidato.informacion_Pausada_Propietario_2 != null
                ? candidato.informacion_Pausada_Propietario_2.split("|")
                : "",
            informacion_Pausada_Suplente:
              candidato.informacion_Pausada_Suplente,
            identidadSuplente:
              candidato.informacion_Pausada_Suplente != null
                ? candidato.informacion_Pausada_Suplente.split("|")
                : "",
            informacion_Pausada_Suplente_2:
              candidato.informacion_Pausada_Suplente_2,
            identidadSuplente2:
              candidato.informacion_Pausada_Suplente_2 != null
                ? candidato.informacion_Pausada_Suplente_2.split("|")
                : "",
          };
        });
        this.list_Candidatos_By_Eleccion = listCandidatos;
        this.loading = false;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------

    async loadPropuestasByCandidato(candidato_Id, puesto) {
      try {
        let resp = await api.get(
          `/Candidatos_Informacion/Propuestas_Candidato?CandidatoId=${candidato_Id}&PuestoCandidato=${puesto}`
        );
        let { data } = resp.data;
        this.list_Propuestas = data.map((propuesta) => {
          return {
            id: propuesta.id,
            candidato_Id: propuesta.candidato_Id,
            puesto_Candidato: propuesta.puesto_Candidato,
            propuesta: propuesta.propuesta,
          };
        });
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------

    async loadFormacionAcademicaById(candidato_Id, puesto) {
      try {
        let resp = null;
        resp = await api.get(
          `/Candidatos_Informacion/Formacion_Academica_Candidato?CandidatoId=${candidato_Id}&PuestoCandidato=${puesto}`
        );
        if (resp.status == 200) {
          const { success, data } = resp.data;
          if (success == true) {
            this.formacion.id = data.id;
            this.formacion.candidato_Id = data.candidato_Id;
            this.formacion.puesto_Candidato = data.puesto_Candidato;
            this.formacion.formacion = data.formacion;
          }
        }
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------

    async loadDatosGeneralesById(candidato_Id, puesto) {
      try {
        let resp = null;
        resp = await api.get(
          `/Candidatos_Informacion/Datos_Generales_Candidato?CandidatoId=${candidato_Id}&PuestoCandidato=${puesto}`
        );
        if (resp.status == 200) {
          const { success, data } = resp.data;
          if (success == true) {
            this.datos_Generales.id = data.id;
            this.datos_Generales.candidato_Id = data.candidato_Id;
            this.datos_Generales.puesto_Candidato = data.puesto_Candidato;
            this.datos_Generales.facebook = data.facebook;
            this.datos_Generales.twitter = data.twitter;
            this.datos_Generales.youtube = data.youtube;
            this.datos_Generales.instagram = data.instagram;
            this.datos_Generales.tik_Tok = data.tik_Tok;
            this.datos_Generales.pagina_Web = data.pagina_Web;
            this.datos_Generales.email = data.email;
            this.datos_Generales.telefono = data.telefono;
            this.datos_Generales.domicilio = data.domicilio;
            this.datos_Generales.grado_Maximo_Estudios =
              data.grado_Maximo_Estudios;
            this.datos_Generales.estatus_Grado_Estudios =
              data.estatus_Grado_Estudios;
            this.datos_Generales.historia_Laboral = data.historia_Laboral;
            this.datos_Generales.trayectoria = data.trayectoria;
            this.datos_Generales.motivo_Cargo_Publico =
              data.motivo_Cargo_Publico;
            this.datos_Generales.propuesta_Genero = data.propuesta_Genero;
          }
        }
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------

    async loadCandidatoById(id, puesto) {
      try {
        let resp = null;
        resp = await api.get(`/Candidatos/${id}/${puesto}`);
        if (resp.status == 200) {
          const { success, data } = resp.data;
          if (success == true) {
            this.candidato.label = "";
            this.candidato.selection =
              puesto == 0
                ? "prop"
                : puesto == 1
                ? "sup"
                : puesto == 2
                ? "propSin"
                : "supSin";
            this.candidato.uno_Aviso_Privacidad = data.uno_Aviso_Privacidad;
            this.candidato.dos_Publicacion = data.dos_Publicacion;
            this.candidato.tres_Informe_Estadistico =
              data.tres_Informe_Estadistico;
            this.candidato.puesto = data.puesto;
            this.candidato.no_Formula = data.no_Formula;
            this.candidato.activo = data.activo;
            this.candidato.id = data.id;
            this.candidato.estatus = data.estatus;
            this.candidato.tipo_Eleccion_Id = data.tipo_Eleccion_Id;
            this.candidato.tipo_Eleccion = data.tipo_Eleccion;
            this.candidato.municipio_Id = data.municipio_Id;
            this.candidato.municipio = data.municipio;
            this.candidato.distrito_Id = data.distrito_Id;
            this.candidato.no_Distrito = data.no_Distrito;
            this.candidato.distrito = data.distrito;
            this.candidato.demarcacion_Id = data.demarcacion_Id;
            this.candidato.demarcacion = data.demarcacion;
            this.candidato.coalicion_Id = data.coalicion_Id;
            this.candidato.is_Coalicion = data.is_Coalicion;
            this.candidato.coalicion = data.coalicion;
            this.candidato.tipo_Candidato = data.tipo_Candidato;
            this.candidato.orden = data.orden;
            this.candidato.partido_Id = data.partido_Id;
            this.candidato.logo_Coalicion = data.logo_Coalicion;
            this.candidato.validado = data.validado;
            this.candidato.fecha_Registro = data.fecha_Registro;
            this.candidato.aprobado = data.aprobado;
            this.candidato.validado_IEEN = data.validado_IEEN;
            this.candidato.nombre_Completo = `${data.nombres} ${data.apellido_Paterno} ${data.apellido_Materno}`;
            this.candidato.nombres = data.nombres;
            this.candidato.apellido_Paterno = data.apellido_Paterno;
            this.candidato.apellido_Materno = data.apellido_Materno;
            this.candidato.mote = data.mote;
            this.candidato.sexo = data.sexo;
            this.candidato.url_Foto = data.url_Foto;
            this.candidato.clave_Elector = data.clave_Elector;
            this.candidato.rfc = data.rfc;
            this.candidato.curp = data.curp;
            this.candidato.fecha_Nacimiento = data.fecha_Nacimiento;
            this.candidato.ocupacion = data.ocupacion;
            this.candidato.telefono = data.telefono;
            this.candidato.correo = data.correo;
            this.candidato.pertenece_Grupo_Vulnerable_Propietario =
              data.pertenece_Grupo_Vulnerable_Propietario;
            this.candidato.grupo_Vulnerable_Propietario =
              data.grupo_Vulnerable_Propietario;
            this.candidato.consentimiento_URL = data.consentimiento_URL;
            this.candidato.avance_Curricular = data.avance_Curricular;
            this.candidato.faltante_Curricular = data.faltante_Curricular;
            this.candidato.is_Coalicion = data.is_Coalicion;
            this.candidato.coalicion_Id = data.coalicion_Id;
            this.candidato.coalicion = data.coalicion;
            this.candidato.logo_Partido = data.logo_Partido;
            this.candidato.partido_Id = data.partido_Id;
            this.candidato.partido = data.partido;
            this.candidato.edad = data.edad;
            this.candidato.tipo_Eleccion_Id = data.tipo_Eleccion_Id;
            this.candidato.tipo_Eleccion = data.tipo_Eleccion;
            this.candidato.indigena = data.indigena;
            this.candidato.afromexicano = data.afromexicano;
            this.candidato.discapacidad = data.discapacidad;
            this.candidato.lgbttiq = data.lgbttiq;
            this.candidato.poblacion_Mayor = data.poblacion_Mayor;
            this.candidato.poblacion_Joven = data.poblacion_Joven;
            this.candidato.informacion_Pausada = data.informacion_Pausada;
            this.candidato.is_Comun = data.is_Comun;
            this.candidato.comun_Id = data.comun_Id;
            this.candidato.comun = data.comun;
            this.candidato.logo_Comun = data.logo_Comun;
            this.candidato.orden_Publicacion = data.orden_Publicacion;
            this.candidato.consecutivo = data.consecutivo;
            this.candidato.migrante = data.migrante;
            if (this.candidato.pertenece_Grupo_Vulnerable_Propietario == true) {
              let elementosGrupos =
                this.candidato.grupo_Vulnerable_Propietario.split("||");
              if (elementosGrupos[0].split("|") != undefined) {
                this.candidato.grupo1 =
                  elementosGrupos[0].split("|")[0] == "true" ? true : false;
              }
              if (elementosGrupos[1].split("|") != undefined) {
                this.candidato.grupo2 =
                  elementosGrupos[1].split("|")[0] == "true" ? true : false;
              }
              if (elementosGrupos[2].split("|") != undefined) {
                this.candidato.grupo3 =
                  elementosGrupos[2].split("|")[0] == "true" ? true : false;
              }
              if (elementosGrupos[3].split("|") != undefined) {
                this.candidato.grupo4 =
                  elementosGrupos[3].split("|")[0] == "true" ? true : false;
              }
            }
          }
        }
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------
  },
});
