import React from "react";
import Newproduct from "./pages/Newproduct/Newproduct";
import Homepage from "./pages/homepage/homepage";
import Mainproductpage from "./pages/productpage/productpage";
import Loader from "./componante/loder/Loader";
const Lazyhopage = React.lazy(() => import("./pages/homepage/homepage"));

const routs = [
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Lazyhopage />
      </React.Suspense>
    ),
  },
  { path: "/newproduct", element: <Newproduct /> },
  { path: "/product/:shortname", element: <Mainproductpage /> },
];

export default routs;
