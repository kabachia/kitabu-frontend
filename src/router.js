import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/books",
    name: "books",
    component: () => import("./components/BookList")
  },
  /*{
    path: "/books/:id",
    name: "book-details",
    component: () => import("./components/Book")
  },*/
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddBook")
  },
  {
    path: "/authors",
    name: "authors",
    component: () => import("./components/AuthorList")
  },
  /*{
    path: "/authors/:id",
    name: "author-details",
    component: () => import("./components/Author")
  },*/
  {
    path: "/authors/add",
    name: "author-add",
    component: () => import("./components/AddAuthor")
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
