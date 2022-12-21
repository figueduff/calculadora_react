import React, { useEffect, useState } from "react";
import Display from "./display";

function teclado() {
  const [verDisplay, setVerDisplay] = useState("");

  // agrega a display y deriva operaciones
  const handleClick = (event) => {
    const boton = event.target.classList.contains("mostrar_display");
    if (boton) {
      agregarCaracterDisplay(event.target.textContent);
    } else {
      discriminarOperacion(event.target.id);
    }
  };

  // agregar a display
  const agregarCaracterDisplay = (dato) =>
    checkDisplay()
      ? setVerDisplay(dato)
      : verDisplay.length < 16
      ? setVerDisplay((a) => (a += dato))
      : setVerDisplay(" Max_16_digitos ");

  function checkDisplay() {
    let display = document.querySelector("#resultado");
    let condicionDisplay = ["null", "faltaria_MS", "N°_grande/decimal", "_"];
    return condicionDisplay.some((esta) => display.textContent.includes(esta));
  }

  //  discrimina operacion
  const discriminarOperacion = (key) => {
    checkOperacionEspecial() //!== undefined
      ? aplicarOperacionEspecial(key)
      : aplicarOperacion(key);
  };

  function checkOperacionEspecial() {
    let display = document.querySelector("#resultado");
    let condicionEspecial = ["√n", "xn", "Pi", "%"];
    return condicionEspecial.find((esta) => display.textContent.includes(esta));
  }

  function aplicarOperacion(key) {
    if (key == "ac") setVerDisplay("");
    let resultado = operacionSimple();
    switch (key) {
      case "igual":
        setVerDisplay(resultado);
        break;
      case "x!":
        resultado < 18 && Number.isInteger(resultado)
          ? setVerDisplay(factorial(resultado))
          : setVerDisplay("N°_grande/decimal");
        break;
      case "potencia2":
        setVerDisplay(Math.pow(resultado, 2));
        break;
      case "potencia3":
        setVerDisplay(Math.pow(resultado, 3));
        break;
      case "raiz2":
        setVerDisplay(Math.sqrt(resultado));
        break;
      case "raiz3":
        setVerDisplay(Math.cbrt(resultado));
        break;
      case "sin":
        setVerDisplay(Math.sin(resultado));
        break;
      case "cos":
        setVerDisplay(Math.cos(resultado));
        break;
      case "tg":
        setVerDisplay(Math.tan(resultado));
        break;
      case "mr":
        setVerDisplay("faltaria_MS");
        break;
      case "ln":
        setVerDisplay(Math.log(resultado));
        break;
      case "log":
        setVerDisplay(Math.log10(resultado));
        break;
      case "e":
        setVerDisplay(Math.exp(resultado));
        break;
      default:
        break;
    }
  }

  const operacionSimple = () =>
    document.querySelector("#resultado").textContent !== ""
      ? evalOperacion()
      : setVerDisplay("_");

  function evalOperacion() {
    let display = document.querySelector("#resultado");
    try {
      let result = eval(display.textContent);
      if (result !== "") {
        return result;
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("Operación no valida");
      }
    }
  }

  function aplicarOperacionEspecial(key) {
    let display = document.querySelector("#resultado");
    if (key == "ac") setVerDisplay("");
    if (key == "igual") {
      switch (checkOperacionEspecial()) {
        case "xn":
          let xnDivido = display.textContent.split("xn");
          setVerDisplay(Math.pow(xnDivido[0], xnDivido[1]));
          break;
        case "√n":
          let vnDivido = display.textContent.split("√n");
          setVerDisplay(Math.pow(vnDivido[0], 1 / vnDivido[1]));
          break;
        case "Pi":
          let resultpi = eval(display.textContent.replace(/Pi/, "3.1415"));
          setVerDisplay(resultpi);
          break;
        case "%":
          let resultporc = eval(display.textContent.replace(/%/, "*") + "/100");
          setVerDisplay(resultporc);
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    let teclado = document.querySelector("#teclado");
    teclado.addEventListener("click", handleClick);
    return () => {
      teclado.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Display tecla={verDisplay} />
      <div id="teclado" className="centrar">
        <a className="boton mostrar_display" id="abreparentesis">
          (
        </a>
        <a className="boton mostrar_display" id="cierraparentesis">
          )
        </a>
        <a className="boton especial" id="x!">
          X!
        </a>
        <a className="boton especial" id="potencia2">
          x²
        </a>
        <a className="boton especial" id="raiz2">
          √
        </a>
        <a className="boton mostrar_display" id="raizn">
          √<sup>n</sup>
        </a>
        <a className="boton especial" id="sin">
          sin
        </a>
        <a className="boton especial" id="cos">
          cos
        </a>
        <a className="boton especial" id="tg">
          tg
        </a>
        <a className="boton especial" id="potencia3">
          x³
        </a>
        <a className="boton especial" id="raiz3">
          √<sup>3</sup>
        </a>
        <a className="boton mostrar_display" id="potencian">
          x<sup>n</sup>
        </a>
        <a className="boton mostrar_display" id="n1">
          1
        </a>
        <a className="boton mostrar_display" id="n2">
          2
        </a>
        <a className="boton mostrar_display" id="n3">
          3
        </a>
        <a className="boton mostrar_display" id="divide">
          /
        </a>
        <a className="boton mostrar_display" id="porcentaje">
          %
        </a>
        <a className="boton especial" id="ln">
          Ln
        </a>
        <a className="boton mostrar_display" id="n4">
          4
        </a>
        <a className="boton mostrar_display" id="n5">
          5
        </a>
        <a className="boton mostrar_display" id="n6">
          6
        </a>
        <a className="boton mostrar_display" id="multiplica">
          *
        </a>
        <a className="boton especial" id="log">
          Log
        </a>
        <a className="boton especial" id="e">
          e
        </a>
        <a className="boton mostrar_display" id="n7">
          7
        </a>
        <a className="boton mostrar_display" id="n8">
          8
        </a>
        <a className="boton mostrar_display" id="n9">
          9
        </a>
        <a className="boton mostrar_display" id="resta">
          -
        </a>
        <a className="boton especial" id="ac">
          AC
        </a>
        <a className="boton mostrar_display" id="punto">
          .
        </a>
        <a className="boton mostrar_display" id="n0">
          0
        </a>
        <a className="boton mostrar_display" id="pi">
          Pi
        </a>
        <a className="boton mostrar_display" id="suma">
          +
        </a>
        <a className="boton especial" id="mr">
          MR
        </a>
        <a className="boton especial" id="igual">
          =
        </a>
      </div>
    </>
  );
}

export default teclado;
