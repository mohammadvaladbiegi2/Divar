import Homepage from "./pages/homepage/homepage";
import Mainproductpage from "./pages/productpage/productpage";

const routs = [
  { path: "/", element: <Homepage /> },
  { path: "/product/:shortname", element: <Mainproductpage /> },
];

export default routs;
