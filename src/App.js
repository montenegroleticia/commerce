import Products from "./Components/Products";
import Cart from "./Components/Cart";
import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const [add, setAdd] = useState([]);

  return (
    <ContainerApp>
      <ContainerListaProdutos>
        <Products add={add} setAdd={setAdd} />
      </ContainerListaProdutos>
      <ContainerCarrinho>
        <Cart add={add} setAdd={setAdd} />
      </ContainerCarrinho>
    </ContainerApp>
  );
}
const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;
const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;
