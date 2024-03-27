import styled from "styled-components";



export const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Img = styled.img`
  width: 10%;
`


export const Form = styled.form`
  width: 100%;
  max-width: 583px;
  display: flex;
  align-items: center;
  justify-content: center;

  input{
  background: rgba(0, 0, 0, 0.8);
  color: #6f7878;
  width: 50%;
  height: 34px;
  line-height: 64px;
  border: none;
  padding: 5px;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  margin-right: 5px;

  &::placeholder{
    color: #6f7878;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
  }

  .button{
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  width: 42px;

  height: 42px;
  border-radius: 5px;
  border: 2px solid #6f7878;
  cursor: pointer;
  transition: background 0.3s;

  &:hover{
    background: #2d2d2d;
  }
}
}
`

