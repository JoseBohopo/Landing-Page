import { lazy, ReactElement } from "react";

const HOME_SECTION = lazy(() => import("../sections/Home"));
const ABOUT_SECTION = lazy(() => import("../sections/About"));
const PROJECTS_SECTION = lazy(() => import("../sections/Projects"));

export const ROUTES_MAP: Map<string, ReactElement> = new Map();
ROUTES_MAP.set("HOME", <HOME_SECTION />)
  .set("ABOUT", <ABOUT_SECTION />)
  .set("PROJECTS", <PROJECTS_SECTION />);
