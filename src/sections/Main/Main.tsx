import React from "react";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import { MainProps } from "./main-types";

const Main: React.FC<MainProps> = ({ ROUTES, path }: MainProps) => {
  const routeRender = {
    [ROUTES.HOME]: <Home />,
    [ROUTES.ABOUT]: <About />,
    [ROUTES.PROJECTS]: <Projects />,
  };

  return routeRender[path];
};

export default Main;
