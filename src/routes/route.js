import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Skill from "../pages/Skill.jsx";
import ProductDetail from "../components/ProjectModal.jsx";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/skill",
    element: Skill,
  },
  {
    path: "/project",
    element: Project,
  },
  {
    path: "/project/:id",
    element: ProductDetail,
  },
  {
    path: "/contact",
    element: Contact,
  },
];

export default routes;
