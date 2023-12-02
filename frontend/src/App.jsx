import { useRoutes } from "react-router-dom";
import routs from "./routs";
import Navbar from "./componante/Navbar/Navbar";
import productpage from "./pages/productpage/productpage";
import "./App.css";

function App() {
  const rout = useRoutes(routs);

  return (
    <>
      {/* <Navbar /> */}
      <productpage />
      {rout}
    </>
  );
}

export default App;
