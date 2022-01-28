import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Service from "../views/ServicePage.vue";
import Other from "../views/OtherPage.vue";
import Another from "../views/AnotherPage.vue";
import Pagetwo from "../views/Page2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }, 
  {
    path: "/service",
  name: "service",
  component: Service,
}, 
{
  path: "/other",
name: "other",
component: Other,
},
{
  path: "/another",
name: "another",
component: Another,
},
{
  path: "/pagetwo",
name: "pagetwo",
component: Pagetwo,
}

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
