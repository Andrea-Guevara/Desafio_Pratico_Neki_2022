import React from "react";
import { View, StyleSheet } from "react-native";

const NavBar = () => {
  return <View style={styles.header} />;
};
export default NavBar;
const styles = StyleSheet.create({
  header: {
    height: 40,
    width: "100%",
    backgroundColor: "#f08080",
  },
});