import styled from "styled-components";


export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const ButtonStyled = styled.button`
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