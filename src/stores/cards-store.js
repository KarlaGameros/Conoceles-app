import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    isHomePage: false,
    buttons: false,
    selectedTab: null,
    list_Candidatos: [],
    list_Filtro_Candidatos: [],
    listCards: [],
    listFiltroCards: [],
    candidato: {
      selection: null,
      id: null,
      tipo_Eleccion_Id: null,
      tipo_Eleccion: null,
      municipio_Id: null,
      municipio: null,
      distrito_Id: null,
      distrito: null,
      demarcacion_Id: null,
      demarcacion: null,
      coalicion_Id: null,
      coalicion: null,
      url_Logo_Coalicion: null,
      estatus: null,
      is_Coalicion: false,
      activo: false,
      tipo_Candidato: null,
      orden: null,
      validado: true,
      fecha_Registro: null,
      nombre_Completo_Propietario: null,
      nombres_Propietario: null,
      apellido_Paterno_Propietario: null,
      apellido_Materno_Propietario: null,
      mote_Propietario: null,
      sexo_Propietario: null,
      url_Foto_Propietario: null,
      clave_Elector_Propietario: null,
      rfC_Propietario: null,
      curP_Propietario: null,
      fecha_Nacimiento_Propietario: null,
      ocupacion_Propietario: null,
      telefono_Propietario: null,
      correo_Propietario: null,
      pertenece_Grupo_Vulnerable_Propietario: false,
      grupo_Vulnerable_Propietario: null,
      partido_Id: null,
      partido: null,
      url_Logo_Partido_Propietario: null,
      nombre_Completo_Propietario_2: null,
      nombres_Propietario_2: null,
      apellido_Paterno_Propietario_2: null,
      apellido_Materno_Propietario_2: null,
      mote_Propietario_2: null,
      sexo_Propietario_2: null,
      url_Foto_Propietario_2: null,
      clave_Elector_Propietario_2: null,
      rfC_Propietario_2: null,
      curP_Propietario_2: null,
      fecha_Nacimiento_Propietario_2: null,
      ocupacion_Propietario_2: null,
      telefono_Propietario_2: null,
      correo_Propietario_2: null,
      pertenece_Grupo_Vulnerable_Propietario_2: false,
      grupo_Vulnerable_Propietario_2: null,
      partido_Propietario_2_Id: null,
      partido_Propietario_2: null,
      url_Logo_Partido_Propietario_2: null,
      nombre_Completo_Suplente: null,
      nombres_Suplente: null,
      apellido_Paterno_Suplente: null,
      apellido_Materno_Suplente: null,
      mote_Suplente: null,
      sexo_Suplente: null,
      url_Foto_Suplente: null,
      clave_Elector_Suplente: null,
      rfC_Suplente: null,
      curP_Suplente: null,
      fecha_Nacimiento_Suplente: null,
      ocupacion_Suplente: null,
      telefono_Suplente: null,
      correo_Suplente: null,
      pertenece_Grupo_Vulnerable_Suplente: false,
      grupo_Vulnerable_Suplente: null,
      partido_Suplente_Id: null,
      partido_Suplente: null,
      url_Logo_Partido_Suplente: null,
      nombre_Completo_Suplente_2: null,
      nombres_Suplente_2: null,
      apellido_Paterno_Suplente_2: null,
      apellido_Materno_Suplente_2: null,
      mote_Suplente_2: null,
      sexo_Suplente_2: null,
      url_Foto_Suplente_2: null,
      clave_Elector_Suplente_2: null,
      rfC_Suplente_2: null,
      curP_Suplente_2: null,
      fecha_Nacimiento_Suplente_2: null,
      ocupacion_Suplente_2: null,
      telefono_Suplente_2: null,
      correo_Suplente_2: null,
      pertenece_Grupo_Vulnerable_Suplente_2: false,
      grupo_Vulnerable_Suplente_2: null,
      partido_Suplente_2_Id: null,
      partido_Suplente_2: null,
      url_Logo_Partido_Suplente_2: null,
    },
    info: {
      latitud: null,
      longitud: null,
      marca: null,
      modelo: null,
      sistema_Operativo: null,
    },
  }),
  actions: {
    actualizarMenu(valor) {
      this.isHomePage = valor;
    },

    actualizarButtonColor(valor) {
      this.buttons = valor;
    },

    //---------------------------------------------------------------------------------

    async infoDeviceConoceles(device) {
      try {
        const resp = null;
        resp = await api.post("/Candidatos", device);
        if (resp.status == 200) {
          const { success, data } = resp.data;
          if (success === true) {
            return { success, data };
          } else {
            return { success, data };
          }
        } else {
          return {
            success: false,
            data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
          };
        }
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------

    async filtrarCandidatos(tipo) {
      try {
        this.list_Filtro_Candidatos = this.list_Candidatos.filter(
          (x) => x.tipo_Eleccion == tipo
        );
      } catch (error) {
        return {
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    //---------------------------------------------------------------------------------

    async loadCandidatos() {
      try {
        let resp = await api.get("/Candidatos/Aprobados");
        let { data } = resp.data;
        let listCandidatos = data.map((candidato) => {
          return {
            selection: "prop",
            id: candidato.id,
            tipo_Eleccion_Id: candidato.tipo_Eleccion_Id,
            tipo_Eleccion: candidato.tipo_Eleccion,
            municipio_Id: candidato.municipio_Id,
            municipio: candidato.municipio,
            distrito_Id: candidato.distrito_Id,
            distrito: candidato.distrito,
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
            nombres_Propietario: candidato.nombres_Propietario,
            apellido_Paterno_Propietario:
              candidato.apellido_Paterno_Propietario,
            apellido_Materno_Propietario:
              candidato.apellido_Materno_Propietario,
            nombre_Completo_Propietario: `${candidato.nombres_Propietario} ${candidato.apellido_Paterno_Propietario} ${candidato.apellido_Materno_Propietario}`,
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
            partido_Id: candidato.partido_Id,
            partido: candidato.partido,
            url_Logo_Partido_Propietario:
              candidato.url_Logo_Partido_Propietario,
            nombre_Completo_Propietario_2: `${candidato.nombres_Propietario_2} ${candidato.apellido_Paterno_Propietario_2} ${candidato.apellido_Materno_Propietario_2}`,
            nombres_Propietario_2: candidato.nombres_Propietario_2,
            apellido_Paterno_Propietario_2:
              candidato.apellido_Paterno_Propietario_2,
            apellido_Materno_Propietario_2:
              candidato.apellido_Materno_Propietario_2,
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
            partido_Propietario_2_Id: candidato.partido_Propietario_2_Id,
            partido_Propietario_2: candidato.partido_Propietario_2,
            url_Logo_Partido_Propietario_2:
              candidato.url_Logo_Partido_Propietario_2,
            nombre_Completo_Suplente: `${candidato.nombres_Suplente} ${candidato.apellido_Paterno_Suplente} ${candidato.apellido_Materno_Suplente}`,
            nombres_Suplente: candidato.nombres_Suplente,
            apellido_Paterno_Suplente: candidato.apellido_Materno_Suplente,
            apellido_Materno_Suplente: candidato.apellido_Materno_Suplente,
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
            pertenece_Grupo_Vulnerable_Suplente:
              candidato.pertenece_Grupo_Vulnerable_Suplente,
            grupo_Vulnerable_Suplente: candidato.grupo_Vulnerable_Suplente,
            partido_Suplente_Id: candidato.partido_Suplente_Id,
            partido_Suplente: candidato.partido_Suplente,
            url_Logo_Partido_Suplente: candidato.url_Logo_Partido_Suplente,
            nombre_Completo_Suplente_2: `${candidato.nombres_Suplente_2} ${candidato.apellido_Paterno_Suplente_2} ${candidato.apellido_Materno_Suplente_2}`,
            nombres_Suplente_2: candidato.nombres_Suplente_2,
            apellido_Paterno_Suplente_2: candidato.apellido_Paterno_Suplente_2,
            apellido_Materno_Suplente_2: candidato.apellido_Materno_Suplente_2,
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
          };
        });
        console.log(listCandidatos);
        this.list_Candidatos = listCandidatos;
      } catch (error) {
        return {
          success: false,
          data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
        };
      }
    },

    async calcularEdad(val) {
      if (val != null) {
        var fechaNace = new Date(val);
        var fechaActual = new Date();

        var mes = fechaActual.getMonth();
        var dia = fechaActual.getDate();
        var año = fechaActual.getFullYear();

        fechaActual.setDate(dia);
        fechaActual.setMonth(mes);
        fechaActual.setFullYear(año);

        suplente_1.value.edad = Math.floor(
          (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
        );

        return edad;
      }
    },

    //---------------------------------------------------------------------------------

    async loadCandidatoById(id) {
      try {
        let resp = null;
        resp = await api.get(`/Candidatos/${id}`);
        if (resp.status == 200) {
          const { success, data } = resp.data;
          if (success == true) {
            this.candidato.selection = "prop";
            this.candidato.activo = data.activo;
            this.candidato.id = data.id;
            this.candidato.tipo_Eleccion_Id = data.tipo_Eleccion_Id;
            this.candidato.tipo_Eleccion = data.tipo_Eleccion;
            this.candidato.municipio_Id = data.municipio_Id;
            this.candidato.municipio = data.municipio;
            this.candidato.distrito_Id = data.distrito_Id;
            this.candidato.distrito = data.distrito;
            this.candidato.demarcacion_Id = data.demarcacion_Id;
            this.candidato.demarcacion = data.demarcacion;
            this.candidato.coalicion_Id = data.coalicion_Id;
            this.candidato.is_Coalicion = data.is_Coalicion;
            this.candidato.coalicion = data.coalicion;
            this.candidato.tipo_Candidato = data.tipo_Candidato;
            this.candidato.orden = data.orden;
            this.candidato.partido_Id = data.partido_Id;
            this.candidato.url_Logo_Coalicion = data.url_Logo_Coalicion;
            this.candidato.validado = data.validado;
            this.candidato.fecha_Registro = data.fecha_Registro;

            this.candidato.nombre_Completo_Propietario = `${data.nombres_Propietario} ${data.apellido_Paterno_Propietario} ${data.apellido_Materno_Propietario}`;
            this.candidato.nombres_Propietario = data.nombres_Propietario;
            this.candidato.apellido_Paterno_Propietario =
              data.apellido_Paterno_Propietario;
            this.candidato.apellido_Materno_Propietario =
              data.apellido_Materno_Propietario;
            this.candidato.mote_Propietario = data.mote_Propietario;
            this.candidato.sexo_Propietario = data.sexo_Propietario;
            this.candidato.url_Foto_Propietario = data.url_Foto_Propietario;
            this.candidato.clave_Elector_Propietario =
              data.clave_Elector_Propietario;
            this.candidato.rfC_Propietario = data.rfC_Propietario;
            this.candidato.curP_Propietario = data.curP_Propietario;
            this.candidato.fecha_Nacimiento_Propietario =
              data.fecha_Nacimiento_Propietario;
            this.candidato.ocupacion_Propietario = data.ocupacion_Propietario;
            this.candidato.telefono_Propietario = data.telefono_Propietario;
            this.candidato.correo_Propietario = data.correo_Propietario;
            this.candidato.pertenece_Grupo_Vulnerable_Propietario =
              data.pertenece_Grupo_Vulnerable_Propietario;
            this.candidato.grupo_Vulnerable_Propietario =
              data.grupo_Vulnerable_Propietario;
            this.candidato.partido_Id = data.partido_Id;
            this.candidato.partido = data.partido;
            this.candidato.url_Logo_Partido_Propietario =
              data.url_Logo_Partido_Propietario;

            this.candidato.nombre_Completo_Propietario_2 = `${data.nombres_Propietario_2} ${data.apellido_Paterno_Propietario_2} ${data.apellido_Materno_Propietario_2}`;
            this.candidato.nombres_Propietario_2 = data.nombres_Propietario_2;
            this.candidato.apellido_Paterno_Propietario_2 =
              data.apellido_Paterno_Propietario_2;
            this.candidato.apellido_Materno_Propietario_2 =
              data.apellido_Materno_Propietario_2;
            this.candidato.mote_Propietario_2 = data.mote_Propietario_2;
            this.candidato.sexo_Propietario_2 = data.sexo_Propietario_2;
            this.candidato.url_Foto_Propietario_2 = data.url_Foto_Propietario_2;
            this.candidato.clave_Elector_Propietario_2 =
              data.clave_Elector_Propietario_2;
            this.candidato.rfC_Propietario_2 = data.rfC_Propietario_2;
            this.candidato.curP_Propietario_2 = data.curP_Propietario_2;
            this.candidato.fecha_Nacimiento_Propietario_2 =
              data.fecha_Nacimiento_Propietario_2;
            this.candidato.ocupacion_Propietario_2 =
              data.ocupacion_Propietario_2;
            this.candidato.telefono_Propietario_2 = data.telefono_Propietario_;
            this.candidato.correo_Propietario_2 = data.correo_Propietario_2;
            this.candidato.pertenece_Grupo_Vulnerable_Propietario_2 =
              data.pertenece_Grupo_Vulnerable_Propietario_2;
            this.candidato.grupo_Vulnerable_Propietario_2 =
              data.grupo_Vulnerable_Propietario_2;
            this.candidato.partido_Propietario_2_Id =
              data.partido_Propietario_2_Id;
            this.candidato.partido_Propietario_2 = data.partido_Propietario_2;
            this.candidato.url_Logo_Partido_Propietario_2 =
              data.url_Logo_Partido_Propietario_2;

            this.candidato.nombre_Completo_Suplente = `${data.nombres_Suplente} ${data.apellido_Paterno_Suplente} ${data.apellido_Materno_Suplente}`;
            this.candidato.nombres_Suplente = data.nombres_Suplente;
            this.candidato.apellido_Paterno_Suplente =
              data.apellido_Paterno_Suplente;
            this.candidato.apellido_Materno_Suplente =
              data.apellido_Materno_Suplente;
            this.candidato.mote_Suplente = data.mote_Suplente;
            this.candidato.sexo_Suplente = data.sexo_Suplente;
            this.candidato.url_Foto_Suplente = data.url_Foto_Suplente;
            this.candidato.clave_Elector_Suplente = data.clave_Elector_Suplente;
            this.candidato.rfC_Suplente = data.rfC_Suplente;
            this.candidato.curP_Suplente = data.curP_Suplente;
            this.candidato.fecha_Nacimiento_Suplente =
              data.fecha_Nacimiento_Suplente;
            this.candidato.ocupacion_Suplente = data.ocupacion_Suplente;
            this.candidato.telefono_Suplente = data.telefono_Suplente;
            this.candidato.correo_Suplente = data.correo_Suplente;
            this.candidato.pertenece_Grupo_Vulnerable_Suplente =
              data.pertenece_Grupo_Vulnerable_Suplente;
            this.candidato.grupo_Vulnerable_Suplente =
              data.grupo_Vulnerable_Suplente;
            this.candidato.partido_Suplente_Id = data.partido_Suplente_Id;
            this.candidato.partido_Suplente = data.partido_Suplente;
            this.candidato.url_Logo_Partido_Suplente =
              data.url_Logo_Partido_Suplente;

            this.candidato.nombre_Completo_Suplente_2 = `${data.nombres_Suplente_2} ${data.apellido_Paterno_Suplente_2} ${data.apellido_Materno_Suplente_2}`;
            this.candidato.nombres_Suplente_2 = data.nombres_Suplente_2;
            this.candidato.apellido_Paterno_Suplente_2 =
              data.apellido_Paterno_Suplente_2;
            this.candidato.apellido_Materno_Suplente_2 =
              data.apellido_Materno_Suplente_2;
            this.candidato.mote_Suplente_2 = data.mote_Suplente_2;
            this.candidato.sexo_Suplente_2 = data.sexo_Suplente_2;
            this.candidato.url_Foto_Suplente_2 = data.url_Foto_Suplente_2;
            this.candidato.clave_Elector_Suplente_2 =
              data.clave_Elector_Suplente_2;
            this.candidato.rfC_Suplente_2 = data.rfC_Suplente_2;
            this.candidato.curP_Suplente_2 = data.curP_Suplente_2;
            this.candidato.fecha_Nacimiento_Suplente_2 =
              data.fecha_Nacimiento_Suplente_2;
            this.candidato.ocupacion_Suplente_2 = data.ocupacion_Suplente_2;
            this.candidato.telefono_Suplente_2 = data.telefono_Suplente_2;
            this.candidato.correo_Suplente_2 = data.correo_Suplente_2;
            this.candidato.pertenece_Grupo_Vulnerable_Suplente_2 =
              data.pertenece_Grupo_Vulnerable_Suplente_2;
            this.candidato.grupo_Vulnerable_Suplente_2 =
              data.grupo_Vulnerable_Suplente_2;
            this.candidato.partido_Suplente_2_Id = data.partido_Suplente_2_Id;
            this.candidato.partido_Suplente_2 = data.partido_Suplente_2;
            this.candidato.url_Logo_Partido_Suplente_2 =
              data.url_Logo_Partido_Suplente_2;
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
  },
});
