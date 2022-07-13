import React from "react";
import styled from "styled-components";
import responsive from "../responsive";

const ContainerProduct = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  max-width: 550px;
  margin-top: 1em;

  ${responsive.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
const ImgProduct = styled.img`
  height: 80%;
  max-height: 400px;
  border-radius: 8px 0px 0px 8px;
  object-fit: cover;

  ${responsive.mobile} {
    border-radius: 8px 8px 0px 0px;
  }
`;
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  flex: 1;
  border-radius: 0px 8px 8px 0px;

  ${responsive.mobile} {
    border-radius: 0px 0px 8px 8px;
  }
`;
const WrapperContent = styled.div`
  background: var(--white);
  width: 80%;
  margin: 0 auto;
  border-radius: 0px 8px 8px 0px;
`;
const TitleCategory = styled.h5`
  font-family: Montserrat;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--darkGrayishBlue);
  letter-spacing: 3px;
  margin-top: 2em;
`;
const TitleProduct = styled.h1`
  font-family: Fraunces;
  font-weight: 700;
  color: var(--veryDarkBlue);
  line-height: 1em;
`;
const DescriptionProduct = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: var(--darkGrayishBlue);
  line-height: 1.6em;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-family: Fraunces;
  font-size: 27px;
  color: var(--darkCyan);
  line-height: 1.6em;
`;
const StrikethroughPrice = styled.span`
  font-family: Montserrat;
  font-size: 12px;
  margin-left: 2em;
  color: var(--darkGrayishBlue);
  text-decoration: line-through;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  background: var(--darkCyan);
  font-family: Montserrat;
  font-weight: 700;
  color: var(--white);
  width: 100%;
  border: none;
  padding: 1em 0;
  border-radius: 10px;
  margin-top: 1.5em;

  ${responsive.mobile} {
    margin-bottom: 1.5em;
  }
`;

const imgDesktop = "/images/image-product-desktop.jpg";
const imgMobile = "/images/image-product-mobile.jpg";
const witdthViewport = window.innerWidth;

const Card = () => {
  return (
    <>
      <ContainerProduct>
        <ImgProduct
          src={witdthViewport > 375 ? imgDesktop : imgMobile}
          alt="eau de cologne"
        />
        <ContainerContent>
          <WrapperContent>
            <TitleCategory>perfume</TitleCategory>
            <TitleProduct>
              Gabrielle<br></br> Essence Eau De Parfum
            </TitleProduct>
            <DescriptionProduct>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </DescriptionProduct>
            <Row>
              <Price> $149.99</Price>
              <StrikethroughPrice>$169.99</StrikethroughPrice>
            </Row>
            <Button>
              <img src="/images/icon-cart.svg"></img>
              &nbsp; Add to Cart
            </Button>
          </WrapperContent>
        </ContainerContent>
      </ContainerProduct>
    </>
  );
};

export default Card;
