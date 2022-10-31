import { createContext, useState } from "react";
import { evaluate } from "mathjs";
export const Context = createContext();

export const ContextProvider = (props) => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  //funcion la cual utilliza la libreria mathjs para evaluar la expresion matematica
  const calculator = () => {
    if (display) {
      setDisplay(evaluate(display));
    } else {
      setDisplay("0");
    }
  };

  // funcion que almacene el resultado de la operacion
  const saveResult = () => {
    if (result) {
      setResult(evaluate(result));
    } else {
      setResult("0");
    }
  };

  //funcion la cual agrega los valores a la pantalla
  const getInputs = (input) => {
    setDisplay(display + input);
  };

  //funcion la cual elimina los valores de la pantalla
  const deleteInput = (input) => {
    return setDisplay(display.slice(0, -1));
  };
  const clearDisplay = () => {
    setDisplay("");
  };

  //funcion la cual verifica si el valor es un operador
  const getOperator = (operator) => {
    return isNaN(operator) && operator !== "." && operator !== "=";
  };

  return (
    <Context.Provider
      value={{ getOperator, display, getInputs, deleteInput, calculator, clearDisplay }}
    >
      {props.children}
    </Context.Provider>
  );
};
