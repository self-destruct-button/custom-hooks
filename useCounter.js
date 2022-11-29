//Custom Hook para contador
import { useState } from "react";

//Un custom hook siempre tendrá un return
//dependiendo del return (las llaves), si es un arreglo [] se desestructura como arreglo a al hora de usarlo
//su fuera un objeto {} se desestructura como objeto

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    //setCounter(counter + value);
    setCounter((current) => current + value);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  //Se pueden exponer en el return las funciones que controlan el comportamiento del CustomHook
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
