import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { ROUTES_MAP } from "../routes";

const HeaderNavigationButtons: React.FC<{
  onSetPath: Dispatch<SetStateAction<string>>;
}> = ({ onSetPath }) => {
  const { t } = useTranslation();
  return (
    <>
      {[...ROUTES_MAP.keys()].map((element) => (
        <button
          key={element}
          className="custom-btn btn mx-2"
          onClick={() => onSetPath(element)}
        >
          <span>{t(element)}</span>
        </button>
      ))}
    </>
  );
};

export default React.memo(HeaderNavigationButtons);
