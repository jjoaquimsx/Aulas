import React from 'react'
import { Container, Name, Description, Footer, Lang, Link } from './style.js'

const Repository = () => (
  <Container color='#f37272'>
    <Name>Repository Name</Name>
    <Description></Description>
    <Footer color='#f37272'>
      <Lang>Repository Lang</Lang>
      <Link href='https://github.com/jjoaquimsx' target='_blank'>VER</Link>
    </Footer>
  </Container>
)

export default Repository