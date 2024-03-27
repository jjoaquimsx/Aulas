import { Container, Sidebar, Main } from "./repocss";
import Prof from "./Profile/Prof";
import Filter from "./filter";
import Repositorios from "./repositorios";
import { getLangsFrom } from "../../services/api";
import { useState } from "react";





function RepositoriesPage() {
  const [currentLang, SetcurrentLang] = useState()

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
      id: '1',
      name: 'Repo 0',
      description: 'descricao 1',
      html_url: "https://devsamurai.com.br",
      language: 'JavaScript'
    },

    {
      id: '2',
      name: 'Repo 1',
      description: 'descricao 1',
      html_url: "https://devsamurai.com.br",
      language: 'JavaScript'
    },

    {
      id: '3',
      name: 'Repo 2',
      description: 'descricao 2',
      html_url: "https://devsamurai.com.br",
      language: 'Ruby'
    },

    {
      id: '4',
      name: 'Repo 3',
      description: 'descricao 3',
      html_url: "https://devsamurai.com.br",
      language: 'React'
    }
  ];



  const languages = getLangsFrom(repositories);
  const onFilterClick = (language) => {
    SetcurrentLang(language)
  }


  return <Container>
    <Sidebar>
      <Prof User={User} />
      <Filter languages={languages}
      currentLang={currentLang}
      onClick={onFilterClick} />
    </Sidebar>
    <Main>
      <Repositorios repositories={repositories}
      currentLang={currentLang}
      ></Repositorios>
    </Main>
  </Container>
}

export default RepositoriesPage;
