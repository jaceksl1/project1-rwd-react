import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import Section3 from "./components/Section3";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <body>
      <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </body>
  );
};

export default App;
