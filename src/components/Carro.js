import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

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
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={10} />
        </span>
        <button style={styles.carro}>Carro</button>
      </div>
    );
  }
}

export default Carro;
