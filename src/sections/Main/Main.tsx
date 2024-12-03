import React, { Suspense } from "react";
import { ROUTES_MAP } from "../../routes";

const Main: React.FC<{ path: string }> = ({ path }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>{ROUTES_MAP.get(path)}</Suspense>
  );
};

export default React.memo(Main);
