import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Rotas from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </>
  );
}