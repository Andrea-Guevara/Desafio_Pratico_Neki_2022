import React, { useState } from "react";
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
import Gradiente from "./../../components/Gradiente/index";
import NavBar from "./../../components/NavBar/index";
import BaseBar from "./../../components/BaseBar/index";
import InputTexto from "./../../components/InputTexto/index";
import api from "./../../service/api";
import { Modal, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

const CadastroSkill = () => {
  const navigation = useNavigation();
  const TelaDeLogin = () => {
    navigation.navigate("Login");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const SalvarSkill = () => {
    try {
      api
        .post("/api/skills", { name, version, description, imageUrl })
        .then((response) => {
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
    setName("");
    setVersion("");
    setDescription("");
    setImageUrl("");
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
        <Titulo>Cadastrar Skills</Titulo>
        <ScrollView>
          <ContainerInterno>
            <InputTexto
              placeholder={"Nome"}
              value={name}
              onChangeText={setName}
            />
            <InputTexto
              placeholder={"Version"}
              value={version}
              onChangeText={setVersion}
            />
            <InputTexto
              placeholder={"Descrição"}
              value={description}
              onChangeText={setDescription}
            />
            <InputTexto
              placeholder={"Endereço da imagen"}
              value={imageUrl}
              onChangeText={setImageUrl}
            />
            <Botao
              onPress={() => {
                SalvarSkill();
              }}
            >
              <TextoBotao>Cadastrar</TextoBotao>
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
export default CadastroSkill;