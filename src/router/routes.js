const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("pages/AboutPage.vue"),
      },
      {
        path: "/tipografia",
        name: "tipografia",
        component: () => import("pages/TipografiaPage.vue"),
      },
      {
        path: "/grid",
        name: "grid",
        component: () => import("pages/GridPage.vue"),
      },
      {
        path: "/form",
        name: "form",
        component: () => import("pages/FormPage.vue"),
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
