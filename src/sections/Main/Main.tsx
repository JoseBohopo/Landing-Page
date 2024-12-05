import React, { Suspense } from "react";
import { ROUTES_MAP } from "../../routes";

const Main: React.FC<{ path: string }> = ({ path }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex-grow mt-5 lg:mt-10 h-full">
        {ROUTES_MAP.get(path)}
      </main>
    </Suspense>
  );
};

export default React.memo(Main);
