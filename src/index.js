import React from "react";
import ReactDOM from "react-dom/client";
//import du fichier reset qu'on l'on a mis dans le index.css
import "./index.css";
//import du composant App
import App from "./App";

// J'injecte le contenu de l'appel du App dans la div dont l'id est "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
