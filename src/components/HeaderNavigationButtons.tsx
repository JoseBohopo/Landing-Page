import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { ROUTES_MAP } from "../routes";

const HeaderNavigationButtons: React.FC<{
  onSetPath: Dispatch<SetStateAction<string>>;
}> = ({ onSetPath }) => {
  const { t } = useTranslation();
  return (
    <ul className="flex">
      {[...ROUTES_MAP.keys()].map((element) => (
        <li>
          <button
            key={element}
            className="custom-btn btn cursor-pointer"
            onClick={() => onSetPath(element)}
          >
            <span>{t(element)}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavigationButtons;
