const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/diputaciones",
        name: "DIP",
        component: () => import("../modulos/diputaciones/pages/IndexPage"),
      },
      {
        path: "/diputacionesCards",
        name: "DIPcards",
        component: () => import("../modulos/diputaciones/pages/CardsPage"),
      },
      {
        path: "/diputacionesDetalle/:id/:puesto",
        name: "diputacionesDetalle",
        props: true,
        component: () =>
          import("../modulos/diputaciones/pages/DetalleCandidatoPage"),
      },
      {
        path: "/presidenciaSindicatura",
        name: "PYS",
        component: () =>
          import("../modulos/presidencia_sindicaturia/pages/IndexPage"),
      },
      {
        path: "/cardsPresidenciaSindicatura",
        name: "PYScards",
        component: () =>
          import(
            "../modulos/presidencia_sindicaturia/pages/CardsPresidenciaPage"
          ),
      },
      {
        path: "/detallePresidenciaSindicatura/:id/:puesto",
        name: "detallePresidenciaSindicatura",
        props: true,
        component: () =>
          import(
            "../modulos/presidencia_sindicaturia/pages/DetallePresidenciaSindicaturaPage"
          ),
      },
      {
        path: "/regidurias",
        name: "REG",
        component: () => import("../modulos/regidurias/pages/IndexPage"),
      },
      {
        path: "/cardsRegidurias",
        name: "REGcards",
        component: () =>
          import("../modulos/regidurias/pages/CardsRegiduriasPage"),
      },
      {
        path: "/detalleRegidurias/:id/:puesto",
        name: "detalleRegidurias",
        props: true,
        component: () =>
          import("../modulos/regidurias/pages/DetalleRegiduriasPage"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
