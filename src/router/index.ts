import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import TemplateMain from "@/components/templates/TemplateMain.vue";
import PageProductHome from "@/components/pages/PageProductHome.vue";
import PageProductDetail from "@/components/pages/PageProductDetail.vue";
import PageCart from "@/components/pages/PageCart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/product",
      redirect: { name: "product-home" },
      component: TemplateMain,
      children: [
        {
          path: "",
          name: "product-home",
          component: PageProductHome,
        },
        {
          path: "detail/:id",
          name: "product-detail",
          component: PageProductDetail,
        },
        {
          path: "cart",
          name: "product-cart",
          component: PageCart,
        },
      ],
    },
  ],
});

export default router;
