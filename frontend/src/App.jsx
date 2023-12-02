import { useRoutes } from "react-router-dom";
import routs from "./routs";

import Navbar from "./componante/Navbar/Navbar";



import "./App.css";

function App() {
  const rout = useRoutes(routs);


  return (
    <>
      {/* <Navbar /> */}
     
      {rout}
    </>
  );


}

export default App;
