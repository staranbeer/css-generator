import { createRoot } from "react-dom/client";
import App from "./App";
import StylesProvider from "./context/StylesProvider";
import "./index.css";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <StylesProvider>
    <App />
  </StylesProvider>
);
