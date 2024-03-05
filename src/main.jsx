import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Card />
    <Hero />
  </React.StrictMode>
);
