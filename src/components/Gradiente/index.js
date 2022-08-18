import { LinearGradient } from "expo-linear-gradient";

const Gradiente = (props) => {
  if (props.posicao == "top") {
    return (
      <LinearGradient
        colors={["#f08080", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "40%",
          zIndex: -1,
        }}
      />
    );
  } else {
    return (
      <LinearGradient
        colors={["transparent", "#dda0dd"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "40%",
          zIndex: -1,
        }}
      />
    );
  }
};

export default Gradiente;