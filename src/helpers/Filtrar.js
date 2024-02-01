import { storeToRefs } from "pinia";
import { useCardsStore } from "src/stores/cards-store";

const candidatosStore = useCardsStore();
const { listFiltroCards } = storeToRefs(candidatosStore);

const Filtrar = async (resultado, filtro, tab) => {
  try {
    //let listFiltroCards = [];

    listFiltroCards.value = resultado.filter((item) => {
      let cumple = true;
      if (filtro.distrito !== undefined) {
        if (filtro.distrito == "") {
          cumple = cumple && item.prop.distrito_Id === item.prop.distrito_Id;
        } else {
          cumple = cumple && item.prop.distrito_Id === filtro.distrito;
        }
      }
      if (filtro.actor_politico !== undefined) {
        if (filtro.actor_politico == "") {
          cumple = cumple && item.prop.partido_Id === item.prop.partido_Id;
        } else {
          if (tab == "DIP" || tab == "REG") {
            if (item.prop.partido_Id === filtro.actor_politico) {
              item.selection = "prop";
              cumple = cumple && item.prop.partido_Id === filtro.actor_politico;
            } else {
              item.selection = "sup";
              cumple = cumple && item.sup.partido_Id === filtro.actor_politico;
            }
          } else if (tab == "PYS") {
            if (item.prop.partido_Id === filtro.actor_politico) {
              item.selection = "prop";
              cumple = cumple && item.prop.partido_Id === filtro.actor_politico;
            } else if (item.sup.partido_Id === filtro.actor_politico) {
              item.selection = "sup";
              cumple = cumple && item.sup.partido_Id === filtro.actor_politico;
            } else if (item.propSin.partido_Id === filtro.actor_politico) {
              item.selection = "propSin";
              cumple =
                cumple && item.propSin.partido_Id === filtro.actor_politico;
            } else {
              item.selection = "supSin";
              cumple =
                cumple && item.supSin.partido_Id === filtro.actor_politico;
            }
          }
        }
      }
      if (filtro.sexo !== undefined) {
        if (filtro.sexo == "Todos") {
          cumple = cumple && item.prop.sexo === item.prop.sexo;
        } else {
          if (tab == "DIP" || tab == "REG") {
            if (item.prop.sexo === filtro.sexo) {
              item.selection = "prop";
              cumple = cumple && item.prop.sexo === filtro.sexo;
            } else {
              item.selection = "sup";
              cumple = cumple && item.sup.sexo === filtro.sexo;
            }
          } else if (tab == "PYS") {
            if (item.prop.sexo === filtro.sexo) {
              item.selection = "prop";
              cumple = cumple && item.prop.sexo === filtro.sexo;
            } else if (item.sup.sexo === filtro.sexo) {
              item.selection = "sup";
              cumple = cumple && item.sup.sexo === filtro.sexo;
            } else if (item.propSin.sexo === filtro.sexo) {
              item.selection = "propSin";
              cumple = cumple && item.propSin.sexo === filtro.sexo;
            } else {
              item.selection = "supSin";
              cumple = cumple && item.supSin.sexo === filtro.sexo;
            }
          }
        }
      }
      if (filtro.edad !== undefined) {
        if (filtro.edad == "Todos") {
          cumple = cumple && item.prop.edad > 0;
        } else {
          const rango = filtro.edad.split("-").map(Number);
          if (rango.length === 2) {
            if (tab == "DIP" || tab == "REG") {
              if (item.prop.edad >= rango[0] && item.prop.edad <= rango[1]) {
                item.selection = "prop";
                cumple =
                  cumple &&
                  item.prop.edad >= rango[0] &&
                  item.prop.edad <= rango[1];
              } else {
                item.selection = "sup";
                cumple =
                  cumple &&
                  item.sup.edad >= rango[0] &&
                  item.sup.edad <= rango[1];
              }
            } else if (tab == "PYS") {
              if (item.prop.edad >= rango[0] && item.prop.edad <= rango[1]) {
                item.selection = "prop";
                cumple =
                  cumple &&
                  item.prop.edad >= rango[0] &&
                  item.prop.edad <= rango[1];
              } else if (
                item.sup.edad >= rango[0] &&
                item.sup.edad <= rango[1]
              ) {
                item.selection = "sup";
                cumple =
                  cumple &&
                  item.sup.edad >= rango[0] &&
                  item.sup.edad <= rango[1];
              } else if (
                item.propSin.edad >= rango[0] &&
                item.sup.edad <= rango[1]
              ) {
                item.selection = "propSin";
                cumple =
                  cumple &&
                  item.propSin.edad >= rango[0] &&
                  item.propSin.edad <= rango[1];
              } else if (
                item.supSin.edad >= rango[0] &&
                item.supSin.edad <= rango[1]
              ) {
                item.selection = "supSin";
                cumple =
                  cumple &&
                  item.supSin.edad >= rango[0] &&
                  item.supSin.edad <= rango[1];
              } else {
                cumple =
                  cumple &&
                  item.supSin.edad >= rango[0] &&
                  item.supSin.edad <= rango[1];
              }
            }
          } else if (rango.length === 1) {
            if (tab == "PYS") {
              if (item.prop.edad >= 60) {
                item.selection = "prop";
                cumple = cumple && item.prop.edad >= 60;
              } else if (item.sup.edad >= 60) {
                item.selection = "sup";
                cumple = cumple && item.sup.edad >= 60;
              } else if (item.propSin.edad >= 60) {
                item.selection = "propSin";
                cumple = cumple && item.propSin.edad >= 60;
              } else {
                item.selection = "supSin";
                cumple = cumple && item.supSin.edad >= 60;
              }
            } else if (tab == "REG" || tab == "DIP") {
              if (item.prop.edad > 60) {
                item.selection = "prop";
                cumple = cumple && item.prop.edad > 60;
              } else {
                item.selection = "sup";
                cumple = cumple && item.sup.edad > 60;
              }
            }
          }
        }
      }
      if (filtro.municipio !== undefined) {
        if (filtro.municipio == "") {
          cumple = cumple && item.prop.municipio_Id === item.prop.municipio_Id;
        } else {
          cumple = cumple && item.prop.municipio_Id === filtro.municipio;
        }
      }
      if (filtro.demarcacion !== undefined) {
        if (filtro.demarcacion == "") {
          cumple =
            cumple && item.prop.demarcacion_Id === item.prop.demarcacion_Id;
        } else {
          cumple = cumple && item.prop.demarcacion_Id === filtro.demarcacion;
        }
      }
      return cumple;
    });
  } catch (error) {
    return {
      success: false,
      data: "Ocurrió un error, inténtelo de nuevo. Si el error persiste, contacte a soporte",
    };
  }
};
export default Filtrar;
