import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Axios from "axios";

export default function Header({
  contador,
  setProdutos,
  setContador,
  carrinho,
}) {
  const removerTodos = async () => {
    try {
      const { data } = await Axios.get(
        "https://5d6da1df777f670014036125.mockapi.io/api/v1/product"
      );

      carrinho ? setProdutos([]) : setProdutos(data);

      localStorage.setItem("ids", "");

      setContador(0);
      localStorage.setItem("contador", "0");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header">
      <main className="main">
        <Link className="link" to="/catalogo">
          <i className="fas fa-store"></i> Catálogo
        </Link>

        <button className="todos" onClick={removerTodos}>
          Remover Todos
        </button>

        <Link className="link" to="/carrinho">
          <i className="fas fa-shopping-cart"></i> Carrinho: {contador}
        </Link>
      </main>
    </header>
  );
}
