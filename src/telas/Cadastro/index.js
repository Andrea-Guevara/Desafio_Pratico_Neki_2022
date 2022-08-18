import React, { useState } from "react";
import Gradiente from "./../../components/Gradiente/index";
import {
  Botao,
  BotaoOk,
  Container,
  ContainerInterno,
  ContainerInternoModal,
  ContainerModal,
  TextoBotao,
  TextoModal,
  Titulo,
} from "./styles";
import NavBar from "./../../components/NavBar/index";
import BaseBar from "./../../components/BaseBar/index";
import InputTexto from "./../../components/InputTexto/index";
import InputOlhinho from "./../../components/InputOlhinho/index";
import { ScrollView, TouchableOpacity, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../service/api";

const Cadastro = () => {
  const navigation = useNavigation();
  const TelaDeLogin = () => {
    navigation.navigate("Login");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const SalvarUser = () => {
    try {
      api.post("/api/users", { login, password }).then((response) => {
        if (response.status == 201) {
          console.log(response.data);
          setModalVisible(true);
        }
      });
    } catch (err) {
      alert(err.data.message);
    }
  };

  const Limpar = () => {
    setModalVisible(!modalVisible);
    setLogin("");
    setPassword("");
  };

  return (
    <>
      <Container>
        <Gradiente posicao="top" />
        <NavBar />
        <TouchableOpacity
          style={{ position: "absolute", marginTop: 4 }}
          onPress={TelaDeLogin}
        >
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <Titulo>Cadastrar-se</Titulo>
        <ScrollView>
          <ContainerInterno>
            <InputTexto
              placeholder={"Usuário"}
              value={login}
              onChangeText={setLogin}
            />
            <InputOlhinho
              placeholder={"Senha"}
              value={password}
              onChangeText={setPassword}
            />
            {/* <InputOlhinho placeholder={"Confirmar senha"} /> */}
            <Botao
              onPress={() => {
                SalvarUser();
              }}
            >
              <TextoBotao>Salvar</TextoBotao>
            </Botao>
          </ContainerInterno>
        </ScrollView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ContainerModal>
            <ContainerInternoModal>
              <TextoModal>Usuário salvo com sucesso!</TextoModal>
              <BotaoOk
                onPress={() => {
                  Limpar();
                }}
              >
                <TextoModal>Ok</TextoModal>
              </BotaoOk>
            </ContainerInternoModal>
          </ContainerModal>
        </Modal>
        <BaseBar />
        <Gradiente posicao="bottom" />
      </Container>
    </>
  );
};
export default Cadastro;