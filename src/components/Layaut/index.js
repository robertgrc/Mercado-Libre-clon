import React from "react";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Producto } from "../Producto";
import { Container, Wrapper } from "./styles";

export const Layaut = () => {
  return (
    <div>
      <Container>
        <Header />
        <Wrapper>
          <Hero />
          <Producto />
        </Wrapper>
      </Container>
    </div>
  );
};
