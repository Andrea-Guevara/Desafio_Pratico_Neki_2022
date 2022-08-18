import React, { useState } from "react";
import Gradiente from "../../components/Gradiente";
import InputOlhinho from "./../../components/InputOlhinho/index";
import {
  Botao,
  Container,
  ContainerInput,
  TextoBotao,
  Logo,
  Titulo,
  TextoCadastrarse,
} from "./styles";
import NavBar from "./../../components/NavBar/index";
import BaseBar from "./../../components/BaseBar/index";
import InputTexto from "./../../components/InputTexto/index";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox } from "react-native-elements";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [selecionado, setSelecionado] = useState(false);

  const navigation = useNavigation();
  const TelaDeCadastro = () => {
    navigation.navigate("Cadastro");
  };
  const TelaHome = () => {
    navigation.navigate("Home");
  };

  // async function getLogin() {
  //   api.post("/api/users", {login, password}).then(async (result) => {
  //     const usuarioString = result.data;
  //     AsyncStorage.setItem("token", usuarioString);
  //     TelaHome();
  //   }).catch((err) =>{
  //     alert("Usuário ou senha incorretos");
  //   });
  // }

  return (
    <>
      <Container>
        <NavBar />
        <Gradiente posicao="top" />
        <Logo source={require("../../../assets/skill.jpg")} />
        <Titulo>Skills</Titulo>
        <ContainerInput>
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
          <CheckBox
            title="Gravar senha"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="#F08080"
            checked={selecionado}
            onPress={() => setSelecionado(!selecionado)}
          />
          <Botao onPress={TelaHome}>
            <TextoBotao>Entrar</TextoBotao>
          </Botao>
        </ContainerInput>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={TelaDeCadastro}
        >
          <TextoCadastrarse>Não posui cadastro? clique Aqui!</TextoCadastrarse>
        </TouchableOpacity>
        <Gradiente posicao="bottom" />
        <BaseBar />
      </Container>
    </>
  );
};
export default Login;