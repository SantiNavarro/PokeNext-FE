import styled from "styled-components";
import { css } from "styled-components";

export const btnStyles = css`
  background: white;
  border: 3px solid #116530;
  color: #116530;
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 30px;

  &:hover {
    background: #116530;
    border: 1px solid white;
    color: white;
  }
`;

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  ${btnStyles}
`;

export const ImageStyled = styled.img`
  width: 200px;
`;

export const InputStyled = styled.input`
  border: 3px solid #116530;
  color: #116530;
  width: fit-content;
  padding: 1rem;
  border-radius: 5px;
`;

export const GotchasCounter = styled.div`
  position: absolute;
  background: white;
  border: 4px solid #d4550b;
  color: #d4550b;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  padding: 1rem 2rem;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
