import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
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
    right: "-80px",
    top: "-20px",
  },
};

class Carro extends Component {
  state = {};
  render() {
    const { carro } = this.props;
    const cantidad = carro.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button style={styles.carro}>Carro</button>
        <DetallesCarro />
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
