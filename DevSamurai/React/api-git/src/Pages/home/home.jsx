import "../home/home.css"
import gitImage from "../assets/imgs/github-142-svgrepo-com (2).svg"
import { CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [login, setLogin] = useState("");


  return (
    <container>
      <img src={gitImage} alt="" />
      <h1>API GitHub</h1>
      <form action="">
        <input type="text"
        placeholder="Digite o usuario"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        />
        <Link to={`${login}/repositories`} className="button">
          <CiCircleChevRight color="#6f7878" size="85%"></CiCircleChevRight>
        </Link>
      </form>
    </container>
  );
}

export default Home;
