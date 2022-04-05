import React from "react";
import {
  Container,
  Panel,
  Column,
  Galeria,
  Description,
  Section,
} from "./styles";

export const Producto = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <Galeria>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_974109-MBO46635874225_072021-F.webp 2x"
              alt="producto"
            />
          </Galeria>
          <Info />
        </Column>
        <Column>
          {/* <ProductoVenta/>
        <InfoVendedor/> */}
          <Garantia />
        </Column>
      </Panel>
    </Container>
  );
};

const Info = () => {
  return (
    <Description>
      <h4>Description</h4>
      <br></br>
      <p>
        <span>
          MSI Trident 3 VR7RC-025US Escritorio para juegos GTX 1060 i7-7700 16GB
          256GB SSD 1TB HDD
        </span>
        <br></br>
        Es nuevo original y viene con todos los accesorios y garantía. Tipo de
        almacenamiento: HDD + SSD Sistema operativo: Windows 10 Capacidad del
        disco duro: 1 TB Conectividad: DisplayPort, HDMI Tamaño de RAM: 16 GB
        Modelo: MSI Trident 3<br></br>
      </p>
      <p>
        <span>
          MSI Trident 3 VR7RC-025US Escritorio para juegos GTX 1060 i7-7700 16GB
          256GB SSD 1TB HDD
          <br></br>
          <h5>
            MSI Trident 3 VR7RC-025US Escritorio para juegos GTX 1060 i7-7700
            16GB 256GB SSD 1TB HDD
          </h5>
        </span>
        <br />
        Es nuevo original y viene con todos los accesorios y garantía. Tipo de
        almacenamiento: HDD + SSD Sistema operativo: Windows 10 Capacidad del
        disco duro: 1 TB Conectividad: DisplayPort, HDMI Tamaño de RAM: 16 GB
        Modelo: MSI Trident 3<br></br>
      </p>
    </Description>
  );
};

const Garantia = () => {
  return (
    <Section>
      <h4>Garantia</h4>
      <div>
        <span>
          <p className="title">Compra Protegida con Mercado Pago</p>
          <p className="description">
            Recibe el producto que esperabas o te devolvemos tu dinero
          </p>
        </span>
        <span>
          <p className="title">Garantia de Vendedor</p>
          <p className="description">
            Recibe el producto que esperabas o te devolvemos tu dinero
          </p>
        </span>
      </div>
    </Section>
  );
};
