import styled from "styled-components";

export default function Cart({add, setAdd}) {
  return (
    <>
      {add.map((p) => (
        <ItemCarrinho key={p.id}>
          <img src={p.imagem} alt="clothing" />
          <p>{p.nome}</p>
          <p>{p.preco}</p>
          <button onClick={() => setAdd.splice(p)}>X</button>
        </ItemCarrinho>
      ))}
    </>
  );
}

const ItemCarrinho = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    margin-bottom: 5px;
  }
`;
