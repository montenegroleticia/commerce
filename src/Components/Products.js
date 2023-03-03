import ProductsObj from "./ProductObj";
import styled from "styled-components";

export default function Products({setAdd, add}) {

  function addP(p){
    const base = [...add];
    for(let i = 0; i < add.length; i++){
      if(p === add[i]){
        return base;
      }
    }
    return setAdd([...add, p]);
  }

  return (
    <>
      {ProductsObj.map((p) => (
        <ItemProduto key={p.id}>
          <img src={p.imagem} alt="clothing" />
          <div>
            <p>{p.nome}</p>
            <p>{p.preco}</p>
          </div>
          <button onClick={() => addP(p)}>Comprar</button>
        </ItemProduto>
      ))}
    </>
  );
}

const ItemProduto = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;
