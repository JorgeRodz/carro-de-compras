import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#ffffff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
};

class DetallesCarro extends Component {
  state = {};
  render() {
    return <div style={styles.detallesCarro}>Detalles carro</div>;
  }
}

export default DetallesCarro;
