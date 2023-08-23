const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/inicio", component: () => import("pages/IndexPage.vue") },
      {
        path: "/diputaciones",
        name: "diputaciones",
        component: () => import("../modulos/diputaciones/pages/IndexPage"),
      },
      {
        path: "/diputacionesCards",
        name: "diputacionesCards",
        component: () => import("../modulos/diputaciones/pages/CardsPage"),
      },
      {
        path: "/diputacionesDetalle/:id/:selection",
        name: "diputacionesDetalle",
        props: true,
        component: () =>
          import("../modulos/diputaciones/pages/DetalleCandidatoPage"),
      },
      {
        path: "/presidenciaSindicatura",
        name: "presidenciaSindicatura",
        component: () =>
          import("../modulos/presidencia_sindicaturia/pages/IndexPage"),
      },
      {
        path: "/cardsPresidenciaSindicatura",
        name: "cardsPresidenciaSindicatura",

        component: () =>
          import(
            "../modulos/presidencia_sindicaturia/pages/CardsPresidenciaPage"
          ),
      },
      {
        path: "/detallePresidenciaSindicatura/:id/:selection",
        name: "detallePresidenciaSindicatura",
        props: true,
        component: () =>
          import(
            "../modulos/presidencia_sindicaturia/pages/DetallePresidenciaSindicaturaPage"
          ),
      },
      {
        path: "/regidurias",
        name: "regidurias",
        component: () => import("../modulos/regidurias/pages/IndexPage"),
      },
      {
        path: "/cardsRegidurias",
        name: "cardsRegidurias",
        component: () =>
          import("../modulos/regidurias/pages/CardsRegiduriasPage"),
      },
      {
        path: "/detalleRegidurias/:id/:selection",
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
