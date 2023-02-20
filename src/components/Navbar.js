import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles = {
  navbar: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgba(0,0,0,0.1)",
  },
};

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro />
      </nav>
    );
  }
}

export default Navbar;