import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Titulo = styled.Text`
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  color: black;
  margin-top: 80px;
`;

export const ContainerInterno = styled.View`
  height: 300px;
  width: 90%;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
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

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerInternoModal = styled.View`
  background-color: #fff;
  border: 2px #f08080;
  border-radius: 20px;
  align-items: center;
  padding: 35px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const TextoModal = styled.Text`
  font-size: 16px;
  align-self: center;
  font-weight: 700;
  color: black;
`;

export const BotaoOk = styled.TouchableOpacity`
  height: 35px;
  width: 95px;
  background-color: #dda0dd;
  border: 2px #f08080;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;