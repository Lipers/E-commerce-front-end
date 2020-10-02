import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Header from "../../components/Header";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [contador, setContador] = useState(0);
  const [carrinho] = useState(false);

  useEffect(() => {
    setContador(Number(localStorage.getItem("contador")));
    axios
      .get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
      .then(({ data }) => {
        console.log(data);
        setProdutos(
          data.filter(
            (product) => !localStorage.getItem("ids")?.includes(product.id)
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const adicionarProduto = (id) => {
    setContador(contador + 1);
    localStorage.setItem("contador", contador + 1);
    localStorage.getItem("ids")
      ? localStorage.setItem("ids", [localStorage.getItem("ids"), id])
      : localStorage.setItem("ids", id);

    setProdutos(produtos.filter((product) => product.id !== id));
    console.log(localStorage.getItem("ids"));
  };

  return (
    <main className="container">
      <Header
        contador={contador}
        setProdutos={setProdutos}
        setContador={setContador}
        carrinho={carrinho}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul className="card-section">
        {produtos.map((product) => (
          <li className="card" key={product.id}>
            <img src={product.image} alt="imagem-produto" />
            <p>nome: {product.name}</p>
            <p>preço: {product.price}</p>
            <button onClick={() => adicionarProduto(product.id)}>
              Adicionar
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
