import React from "react";
import { EntradaTexto } from "./styles";

const InputTexto = ({ placeholder, value, onChangeText }) => {
  return (
    <EntradaTexto
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="black"
    />
  );
};
export default InputTexto;