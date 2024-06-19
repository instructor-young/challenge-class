import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ModalProvider } from "./components/Modal/Modal.context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
