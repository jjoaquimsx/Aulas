import { Container, Sidebar, Main } from "./repocss";
import Prof from "./Profile/Prof";
import Filter from "./filter";
import Repositorios from "./repositorios";



function RepositoriesPage() {
  return <Container>
    <Sidebar>
      <Prof />
      <Filter />
    </Sidebar>
    <Main>
      <Repositorios></Repositorios>
    </Main>
  </Container>
}

export default RepositoriesPage;
