import React, { useState } from "react";
import { Icon, InputArea, InputComOlhinho } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const InputOlhinho = ({ placeholder, value, onChangeText }) => {
  const [olhinho, setOlhinho] = useState(true);
  return (
    <>
      <InputArea>
        <InputComOlhinho
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={olhinho}
          placeholderTextColor="black"
        />
        <Icon onPress={() => setOlhinho(!olhinho)}>
          {olhinho ? (
            <Ionicons name="eye-off" size={22} color="black" />
          ) : (
            <Ionicons name="eye" size={22} color="black" />
          )}
        </Icon>
      </InputArea>
    </>
  );
};
export default InputOlhinho;