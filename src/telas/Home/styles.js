import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const ContainerBotaoTexto = styled.View`
  height: 40px;
  width: 70px;
  align-self: flex-end;
  position: absolute;
`;

export const BotaoSair = styled.TouchableOpacity`
  margin-top: 6px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TextoSair = styled.Text`
  font-size: 17px;
  color: black;
`;

export const ContainerLista = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 15px;
`;

export const Imagens = styled.Image`
  height: 100px;
  width: 30%;
  border-radius: 30px;
`;

export const ContainerTextos = styled.View`
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 63%;
`;

export const ContainerIcone = styled.View`
  width: 7%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BotaoDeletarVermelho = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

export const BotaoAdicionar = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #f08080;
  justify-content: center;
  align-items: center;
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

export const TituloModal = styled.Text`
  font-size: 16px;
  align-self: center;
  font-weight: 700;
  margin-bottom: 20px;
  color: black;
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
  border: 2px #f08080;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
  margin-left: 5px;
  background-color: #dda0dd;
  flex-direction: row;
`;

export const ContainerBotao = styled.View`
  flex-direction: row;
`;

export const ContainerBotaoModal = styled.View`
  flex-direction: row;
`;

export const BotaoCadastrarSkill = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;