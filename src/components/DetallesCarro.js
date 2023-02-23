import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#ffffff",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    textAlign: "center",
    position: "absolute",
    right: "0%",
    top: "50%",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

class DetallesCarro extends Component {
  state = {};
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((product) => (
            <li key={product.name} style={styles.producto}>
              <img
                src={product.img}
                alt={product.name}
                width="50"
                height="32"
              />
              {product.name}
              <span> x{product.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
