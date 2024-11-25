import Litar from "./Lista"
export default function Lista({produtos}){
  if(produtos.length == 0) {
    return(   
      <div  className="come">
      <Litar/>
      </div>
    )
  }
return (
    <div className="tudo">
        <div className="prod">
      <ul className="prot">
        {
        produtos.map(produto => (
          <div className="den">
          <li className="name" key={produto.id}>
            <img src={produto.image} alt={produto.title} width={100}/>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Preço: ${produto.price}</p>
          </li>
          </div>  
        ))}
      </ul>
      </div>
      </div>
  )
}