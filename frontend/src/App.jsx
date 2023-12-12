import { useRoutes } from "react-router-dom";
import routs from "./routs";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "./componante/loder/Loader";

function App() {
  const rout = useRoutes(routs);

  const [load, setload] = useState(false);

  return (
    <div onLoad={() => setload(true)}>
      {load ? rout : <Loader />}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
