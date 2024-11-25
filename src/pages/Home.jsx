import { useEffect, useState } from "react";
import Teste from "./Tes";

export default function App() {
  const [lista, setLista] = useState([]);
  const [listaSalva, setListaSalva] = useState([]);

  useEffect(() => {
    const receberListaProdutos = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        setLista(dados);
        setListaSalva(dados);
      } catch (error) {
        alert("A conexão com a API está errada!");
      }
    };
    receberListaProdutos();
  }, []);

  const orderAz = () => {
    const listaAux = [...listaSalva].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setListaSalva(listaAux);
  };

  const orderPrecoMenor = () => {
    const listaAux = [...listaSalva].sort((a, b) => a.price - b.price);
    setListaSalva(listaAux);
  };

  const orderPrecoMaior = () => {
    const listaAux = [...listaSalva].sort((a, b) => b.price - a.price);
    setListaSalva(listaAux);
  };

  const pesquisarItem = (valor) => {
    const listaAux = lista.filter((item) =>
      item.title.toLowerCase().includes(valor.toLowerCase())
    );
    setListaSalva(listaAux);
  };

  return (
    <div className="tudo">
      <div className="todosbotao">
      <div className="botao">
      <button className="click" onClick={orderAz}>Ordenar A-Z</button>
      </div>
      <div className="botao">
      <button className="click" onClick={orderPrecoMenor}>Preço: Menor - Maior</button>
      </div>
      <div className="botao">
      <button className="click" onClick={orderPrecoMaior}>Preço: Maior - Menor</button>
      </div>
      </div>

      <input className="pesquisas" placeholder="Pesquisar" onChange={(item) => pesquisarItem(item.target.value)}/>

      <Teste produtos={listaSalva} />
    </div>
  );
}
