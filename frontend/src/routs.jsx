import Newproduct from "./pages/Newproduct/Newproduct";
import Homepage from "./pages/homepage/homepage";
import Mainproductpage from "./pages/productpage/productpage";

const routs = [
  { path: "/", element: <Homepage /> },
  { path: "/newproduct", element: <Newproduct /> },
  { path: "/product/:shortname", element: <Mainproductpage /> },
];

export default routs;
