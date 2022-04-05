import React from "react";
import { Container, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/logo__large_plus@2x.png"
          alt="logo"
        />
      </Wrapper>
    </Container>
  );
};
