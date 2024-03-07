import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Hero2 from "./Hero-2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Card />
    <Hero />
    <Hero2 />
  </React.StrictMode>
);
