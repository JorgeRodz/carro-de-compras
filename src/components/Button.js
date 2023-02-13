import { Component } from "react";
import "./../styles/button.css";

const styles = {
  button: {
    backgroundColor: "#0a283e",
    color: "#ffffff",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

class Button extends Component {
  render() {
    return <button className="btn" style={styles.button} {...this.props} />;
  }
}

export default Button;
