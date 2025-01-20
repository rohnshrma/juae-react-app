// import
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// create root : where all the html will be injected
const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(App());
root.render(<App />);
