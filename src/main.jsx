import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./index.css";
import Loading from "./components/Loading/Loading";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
