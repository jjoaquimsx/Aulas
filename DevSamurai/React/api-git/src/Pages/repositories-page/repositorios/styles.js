import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 2rem;
  margin-top: 2rem;


  @media screen and (max-width: 768px){
    padding: 10px;
    grid-template-columns: repeat(2, minmax(0,1fr));
  }


  @media screen and (max-width: 576px){
    grid-template-columns: auto;
    gap: 1rem;
    padding: 10px;
  }
`