import { Container, Sidebar, Main } from "./repocss";
import Prof from "./Profile/Prof";
import Filter from "./filter";
import Repositorios from "./repositorios";
import { getLangsFrom } from "../../services/api";




function RepositoriesPage() {
  const User = {
    login: "jjoaquimsx",
    avatar_url: "https://avatars.githubusercontent.com/u/134417953?v=4",
    followers: 0,
    following: 0,
    company: "No-Company",
    name: "jjoaquiimsx",
    location: "Nova Russas/CE",
  };

  const repositories = [
    {
      name: 'Repo 0',
      description: 'descricao 1',
      html_url: "https://devsamurai.com.br",
      language: 'JavaScript'
    },

    {
      name: 'Repo 1',
      description: 'descricao 1',
      html_url: "https://devsamurai.com.br",
      language: 'JavaScript'
    },

    {
      name: 'Repo 2',
      description: 'descricao 2',
      html_url: "https://devsamurai.com.br",
      language: 'Ruby'
    },

    {
      name: 'Repo 3',
      description: 'descricao 3',
      html_url: "https://devsamurai.com.br",
      language: 'React'
    }
  ];

  const languages = getLangsFrom(repositories);

  return <Container>
    <Sidebar>
      <Prof User={User} />
      <Filter languages={languages} />
    </Sidebar>
    <Main>
      <Repositorios></Repositorios>
    </Main>
  </Container>
}

export default RepositoriesPage;
