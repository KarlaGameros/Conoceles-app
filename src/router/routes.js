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
        path: "/cardsDiputaciones",
        name: "cardsDiputaciones",
        component: () => import("../modulos/cards/pages/IndexPage"),
      },
      {
        path: "/detalleCantidato",
        name: "detalleCantidato",
        component: () => import("../modulos/detalleCandidato/pages/IndexPage"),
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
