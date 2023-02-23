import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
  wrapperCarro: {
    textAlign: "right",
    display: "flex",
    position: "relative",
  },
  carro: {
    backgroundColor: "#359a2c",
    color: "#ffffff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    right: "-77px",
    top: "-8px",
  },
};

class Carro extends Component {
  state = {};
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
    return (
      <div style={styles.wrapperCarro}>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;

// const arr = [0, 1, 2, 3, 4].reduce((accumulator, currentValue) => {
//   console.log(accumulator, currentValue);
//   return accumulator + currentValue;
// }, 10);

// console.log(arr);
