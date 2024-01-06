import React from "react";
import Newproduct from "./pages/Newproduct/Newproduct";

import Loader from "./componante/loder/Loader";
const Lazyhopage = React.lazy(() => import("./pages/homepage/homepage"));
const LazyMainproduct = React.lazy(() =>
  import("./pages/productpage/productpage")
);

const routs = [
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Lazyhopage />
      </React.Suspense>
    ),
  },
  {
    path: "/product/:shortname",
    element: (
      <React.Suspense fallback={<Loader />}>
        <LazyMainproduct />
      </React.Suspense>
    ),
  },
  { path: "/newproduct", element: <Newproduct /> },
];

export default routs;
