// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Make sure App.js is in the same folder or adjust the path accordingly

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

