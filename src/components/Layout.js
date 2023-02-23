import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: "#ffffff",
    color: "#0a283e",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "1200px",
  },
};

class Layout extends Component {
  state = {};
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
