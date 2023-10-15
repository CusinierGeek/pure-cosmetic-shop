import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from "@/shared/guards";
import { useUser } from "@/shared/stores";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/api",
      name: "Api",
      component: null,
      children: []
    },
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/products/detailed",
      name: "ProductDetailedList",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/products/:id",
      name: "Product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      beforeEnter: [isAuthenticatedGuard],
      component: () => import("../views/Profile.vue"),
    },

    {
      path: "/login",
      name: "Login",
      beforeEnter: [isNotAuthenticatedGuard],
      component: () => import("../views/Login.vue"),
    },

    {
      path: "/register",
      name: "Register",
      beforeEnter: [isNotAuthenticatedGuard],
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("../views/Checkout.vue"),
    },

    {
      path: "/404",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach(async () => {
  const userStore = useUser();
  if (userStore.currentUser == undefined) {
    await userStore.fetchCurrentUser();
  }
});
