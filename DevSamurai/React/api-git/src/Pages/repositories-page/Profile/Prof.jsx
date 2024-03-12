import React from 'react'
import { Container, Header, Login, Name, Avatar, Inner, Data } from './profstyle'

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'


export default function Prof() {
  return <Container>
    <Header>
      <Avatar src='https://avatars.githubusercontent.com/u/134417953?v=4' />
      <Login>Jjoaquim.sx</Login>
      <Name>joaquim</Name>
    </Header>
    <Inner>
      <Data> <MdGroup size={18} /> 10 Seguidores, 10 seguindo</Data>
      <Data> <MdLocationCity size={18}/>  Nova Russas/CE</Data>
      <Data> <MdWork size={18}/> No Company</Data>
      <Data>
        <MdLink size={18}/>
        <a href="https://www.instagram.com/jjoaquiim.sx/">Instagram</a>
      </Data>
    </Inner>
  </Container>
}
