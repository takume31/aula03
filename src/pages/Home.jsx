import { useEffect, useState } from "react";
import Teste from "./Tes"
export default function App() {
  
  const [Lista, setLista] = useState([]);

  useEffect(() => { 

    const receberListaProdutos = async () => {
        
    try{
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setLista(dados);
    }
    catch (error){
        alert("A conexão com a API falhou!");
    }
}
    
    receberListaProdutos();
  }, []);

  return (
    <Teste produtos={Lista}/>
  );
}
