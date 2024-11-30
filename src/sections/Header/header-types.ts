import { Dispatch, SetStateAction } from "react";

export type HeaderProps = {
  ROUTES: {
    HOME: string;
    ABOUT: string;
    PROJECTS: string;
  };
  onSetPath: Dispatch<SetStateAction<string>>;
};
