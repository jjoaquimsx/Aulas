import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: #191919;
  min-width: 10rem;
  width: 22rem;
  max-height: 100vh;
  overflow-y: hidden;

  @media screen and (max-width: 768px){
    width: 100vw;
  }
`;

export const Main = styled.section`
  background: #2d2d2d;
  width: 100%;
  height: 100vh;
  padding: 1rem;

  @media screen and (max-width: 768px){
    padding: 0%;
  }

  @media screen and (max-width: 576px){
    padding: 0;
  }
`;