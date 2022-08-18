import React from "react";
import { View, StyleSheet } from "react-native";

const BaseBar = () => {
  return <View style={styles.footer} />;
};
export default BaseBar;

const styles = StyleSheet.create({
  footer: {
    height: "6%",
    width: "100%",
    backgroundColor: "#dda0dd",
    position: "absolute",
    bottom: 0,
  },
});