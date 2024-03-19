import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;

  @media screen and (max-width: 768px){
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px){
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: 1.3rem;
  margin: 0;
`;

export const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin: 0;
  color: #fff;
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const Inner = styled.div`
  padding-top: 1rem;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  color: #FFF;
  margin: 0;

  svg{
    margin-right: 10px;
  }
`;

export const Insta = styled.a`
  text-decoration: underline;
  text-underline-offset: 0.2rem;
  transition: all 0.6s linear;
  &:hover{
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
`;