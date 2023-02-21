import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carro: [],
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state; // Desestructuramos el arreglo de productos del carro

    // si el producto ya existe en el carro
    if (carro.find((x) => x.name === producto.name)) {
      // Creamos un nuevo arreglo con los productos del carro, pero si el producto ya existe, le sumamos 1 a la cantidad
      const newCarro = carro.map((x) =>
        x.name === producto.name ? { ...x, cantidad: x.cantidad + 1 } : x
      );
      // Actualizamos el estado con el nuevo arreglo
      return this.setState({ carro: newCarro });
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar carro={this.state.carro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
