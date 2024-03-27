import { CiCircleChevRight } from "react-icons/ci";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Title, Container, Form, Img} from "./home";
import gitImage from "../assets/imgs/github-142-svgrepo-com (2).svg"

function Home() {

  const [login, setLogin] = useState("");


  return (
    <Container>
      <Img src={gitImage} alt="" />
      <Title>API GitHub</Title>
      <Form action="">
        <input type="text"
        placeholder="Digite o usuario"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        />
        <Link to={`${login}/repositories`} className="button">
          <CiCircleChevRight color="#6f7878" size="85%" />
        </Link>
      </Form>
    </Container>
  );
}

export default Home;
