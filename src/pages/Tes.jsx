export default function Lista({produtos}){
return (
    <div className="tudo">
      <div className="header">
      <h1 className="titu">Lista de Produtos</h1>
      </div>
      <div className="produtos">
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
    </div>
  )
}