import React from "react";
import styled from "styled-components";
import responsive from "../responsive"
/* import img from "/Users/jose/Desktop/Frontmentor/Challenges/newbie/product-preview-card-component-main/my-solution/public/images/image-product-desktop.jpg"; */

const ContainerProduct = styled.div`
  display: flex;
  margin: 0 auto;
  /* border-radius: 30px; */
  /* background-color: red; */
  width: 80%;
  max-width: 550px;
  margin-top: 1em;

  ${responsive.mobile}{
    display: flex;
  flex-direction: column;
  }

`;
const img = "/images/image-product-desktop.jpg";

const ImgProduct = styled.img`
  height: 80%;
  max-height: 400px;
  border-radius: 8px 0px 0px 8px;
  /* width: 50%; */
  object-fit: cover;
  /* background-image: url("/images/image-product-desktop.jpg"); */
  background-image: url(${img});

  ${responsive.mobile}{
    border-radius: 8px 8px 0px 0px;
  }
`;
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  flex: 1;
  border-radius: 0px 8px 8px 0px;

  ${responsive.mobile}{
    border-radius: 0px 0px 8px 8px;
  }
`;
const WrapperContent = styled.div`
  /* display: flex;
  flex-direction: column; */
  background: var(--white);
  /* flex: 1; */
  width: 80%;
  margin: 0 auto;
  border-radius: 0px 8px 8px 0px;
`;
const TitleCategory = styled.h5`
  font-family: Montserrat;
  /* font-size: 20px; */
  text-transform: uppercase;
  font-weight: 500;
  color: var(--darkGrayishBlue);
  letter-spacing: 3px;
  margin-top: 2em;
`;
const TitleProduct = styled.h1`
  font-family: Fraunces;
  /* font-size: 20px; */
  /* text-transform: uppercase; */
  font-weight: 700;
  color: var(--veryDarkBlue);
  line-height: 1em;
  /* letter-spacing: 3px; */
`;
const DescriptionProduct = styled.p`
  font-family: Montserrat;
  font-size: 14px;

  font-weight: 500;
  color: var(--darkGrayishBlue);
  /* letter-spacing: 3px; */
  line-height: 1.6em;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-family: Fraunces;
  font-size: 27px;

  /* font-weight: 700; */
  color: var(--darkCyan);
  /* letter-spacing: 3px; */
  line-height: 1.6em;
`;
const StrikethroughPrice = styled.span`
  font-family: Montserrat;
  font-size: 12px;
  margin-left: 2em;

  /* font-weight: 700; */
  color: var(--darkGrayishBlue);
  /* letter-spacing: 3px; */

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
  /* margin: 0 auto; */
  border: none;
  padding: 1em 0;
  border-radius: 10px;
  margin-top: 1.5em;

  ${responsive.mobile}{
    margin-bottom: 1.5em;
  }
`;

const Card = () => {
  return (
    <>
      <ContainerProduct>
        <ImgProduct
          /* src="/images/image-product-desktop.jpg" */
          /* alt="eau de cologne" */
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
