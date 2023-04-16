import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Chat } from "./Chat";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
);
