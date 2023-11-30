import { useRoutes } from "react-router-dom";
import routs from "./routs";
import "./App.css";

function App() {
  const rout = useRoutes(routs);

  return <>{rout}</>;
}

export default App;
