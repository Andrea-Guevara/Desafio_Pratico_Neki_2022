import React, { useEffect, useState, useRef } from "react";
import {
  BotaoAdicionar,
  BotaoCadastrarSkill,
  BotaoDeletarVermelho,
  BotaoOk,
  BotaoSair,
  Container,
  ContainerBotaoModal,
  ContainerBotaoTexto,
  ContainerIcone,
  ContainerInternoModal,
  ContainerLista,
  ContainerModal,
  ContainerTextos,
  Imagens,
  TextoModal,
  TextoSair,
  TituloModal,
} from "./styles";
import NavBar from "./../../components/NavBar/index";
import Gradiente from "./../../components/Gradiente/index";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "./../../service/api";
import { FlatList, Text, Modal, View } from "react-native";
import { SeparadorDeItems } from "./../../components/SeparadorDeItems/index";
import { Picker } from "@react-native-picker/picker";

let idExcluir;

const Home = () => {
  const navigation = useNavigation();
  const TelaDeLogin = () => {
    navigation.navigate("Login");
  };
  const TelaCadastroDeSkills = () => {
    navigation.navigate("CadastroSkill");
  };

  const [skills, setSkills] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeletar1, setModalDeletar1] = useState(false);
  const [modalDeletar2, setModalDeletar2] = useState(false);
  const [confirmacaoDeletar, setConfirmacaoDeletar] = useState(false);
  const [idSkill, setIdSkill] = useState("");

  const [selecionarSkill, setSelecionarSkill] = useState();
  const pickerRef = useRef();

  const getSkills = () => {
    api.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
  };

  useEffect(() => {
    getSkills();
  }, []);

  const deletarSkills = (idExcluir) => {
    setModalDeletar2(false);
    api.delete(`/api/skills/${idExcluir}`).then((response) => {
      if (response.status == 204) {
        setConfirmacaoDeletar(true);
      }
    });
  };

  const modalDele2 = (idExcluir) => {
    setModalDeletar1(false);
    setModalDeletar2(true);
    console.log(idExcluir);
  };

  const modalDelete = (id) => {
    idExcluir = id;
    console.log(idExcluir);
    setModalDeletar1(true);
  };

  const recarregar = () => {
    setConfirmacaoDeletar(false);
    getSkills();
  };

  const modalAdicionarSkill = (id) => {
    setModalVisible(true);
    setIdSkill(id);
  };

  const Item = ({ name, version, description, imageUrl, id }) => (
    <>
      <ContainerLista>
        <Imagens source={{ uri: imageUrl }} />
        <ContainerTextos>
          <Text>Nome: {name}</Text>
          <Text>Level: {version}</Text>
          <Text>Descrição: {description}</Text>
        </ContainerTextos>
        <ContainerIcone>
          <BotaoAdicionar
            onPress={() => {
              modalAdicionarSkill(id);
            }}
          >
            <Ionicons name="add-outline" size={24} color="white" />
          </BotaoAdicionar>
          <BotaoDeletarVermelho
            onPress={() => {
              modalDelete(id);
            }}
          >
            <AntDesign name="delete" size={20} color="white" />
          </BotaoDeletarVermelho>
        </ContainerIcone>
      </ContainerLista>
    </>
  );

  const ItemRenderizado = ({ item }) => (
    <>
      <Item
        imageUrl={item.imageUrl}
        name={item.name}
        version={item.version}
        description={item.description}
        id={item.id}
      />
      <View style={{ height: 30, width: 120, justifyContent: "center" }}>
        <Picker
          ref={pickerRef}
          selectedValue={selecionarSkill}
          onValueChange={(itemValue) => setSelecionarSkill(itemValue)}
        >
          <Picker.Item label="Escolher habilidade " value="" />
          <Picker.Item label="Adaptabilidade" value="Adaptabilidade" />
          <Picker.Item label="Produtividade" value="Produtividade" />
          <Picker.Item label="Trabalho em equipe" value="Trabalho em equipe" />
          <Picker.Item label="Inovação" value="Inovação" />
          <Picker.Item label="Boa comunicação" value="Boa comunicação" />
        </Picker>
      </View>
    </>
  );

  return (
    <>
      <Container>
        <NavBar />
        <Gradiente posicao="top" />
        <BotaoCadastrarSkill onPress={TelaCadastroDeSkills}>
          <Text style={{ color: "white" }}>Cadastrar skills</Text>
          <Ionicons name="ios-add" size={24} color="white" />
        </BotaoCadastrarSkill>
        <ContainerBotaoTexto>
          <BotaoSair onPress={TelaDeLogin}>
            <TextoSair>Sair</TextoSair>
            <AntDesign name="logout" size={24} color="black" />
          </BotaoSair>
        </ContainerBotaoTexto>
        <FlatList
          ItemSeparatorComponent={SeparadorDeItems}
          data={skills}
          renderItem={ItemRenderizado}
          keyExtractor={(item) => item.id}
        />

        <Modal animationType="slide" transparent={true} visible={modalDeletar1}>
          <ContainerModal>
            <ContainerInternoModal>
              <TituloModal>Deseja excluir esta Skill?</TituloModal>
              <ContainerBotaoModal>
                <BotaoOk onPress={() => modalDele2(idExcluir)}>
                  <TextoModal>Sim</TextoModal>
                  <AntDesign name="check" size={24} color="olivedrab" />
                </BotaoOk>
                <BotaoOk onPress={() => setModalDeletar1(false)}>
                  <TextoModal>Não</TextoModal>
                  <Feather name="x" size={24} color="red" />
                </BotaoOk>
              </ContainerBotaoModal>
            </ContainerInternoModal>
          </ContainerModal>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={modalDeletar2}>
          <ContainerModal>
            <ContainerInternoModal>
              <TituloModal>Realmente deseja excluir esta Skill?</TituloModal>
              <ContainerBotaoModal>
                <BotaoOk onPress={() => deletarSkills(idExcluir)}>
                  <TextoModal>Sim</TextoModal>
                </BotaoOk>
                <BotaoOk onPress={() => setModalDeletar2(false)}>
                  <TextoModal>Não</TextoModal>
                </BotaoOk>
              </ContainerBotaoModal>
            </ContainerInternoModal>
          </ContainerModal>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={confirmacaoDeletar}
        >
          <ContainerModal>
            <ContainerInternoModal>
              <TituloModal>Skill excluida com sucesso! </TituloModal>
              <BotaoOk
                onPress={() => {
                  recarregar();
                }}
              >
                <TextoModal>Ok</TextoModal>
              </BotaoOk>
            </ContainerInternoModal>
          </ContainerModal>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ContainerModal>
            <ContainerInternoModal>
              <TituloModal>Adicionar Skill</TituloModal>
              <ContainerBotaoModal>
                <BotaoOk>
                  <TextoModal>Salvar</TextoModal>
                </BotaoOk>
                <BotaoOk
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  <TextoModal>Cancelar</TextoModal>
                </BotaoOk>
              </ContainerBotaoModal>
            </ContainerInternoModal>
          </ContainerModal>
        </Modal>
        <Gradiente posicao="bottom" />
      </Container>
    </>
  );
};
export default Home;