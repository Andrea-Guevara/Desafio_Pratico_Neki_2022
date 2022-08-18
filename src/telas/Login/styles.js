import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 80px;
  align-self: center;
  margin-top: 30px;
`;

export const Titulo = styled.Text`
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  color: black;
  margin-top: 10px;
`;

export const ContainerInput = styled.View`
  height: 40%;
  width: 90%;
  align-self: center;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Botao = styled.TouchableOpacity`
  height: 35px;
  width: 45%;
  border-radius: 20px;
  background-color: #f08080;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  font-size: 19px;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export const TextoCadastrarse = styled.Text`
  font-size: 15px;
  color: black;
`;