import React from "react";
import ReactDOM from "react-dom/client";
import Teclado from "./assets/componentes/teclado";

ReactDOM.createRoot(document.getElementById("root")).render(
  <section id="calculadora" className="centrar">
    <div id="contenedor_calculadora">
      <Teclado />
    </div>
  </section>
);
