import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Hero2 from "./Hero-2.jsx";
import Hero3 from "./Hero-3.jsx";
import Hero4 from "./Hero-4.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Card />
    <Hero />
    <Hero2 />
    <Hero3 />
    <Hero4 />
  </React.StrictMode>
);
