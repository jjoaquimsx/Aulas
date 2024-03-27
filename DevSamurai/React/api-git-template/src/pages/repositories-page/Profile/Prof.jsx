import React from 'react'
import PropTypes from "prop-types"
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Login, Name, Avatar, Inner, Data, Insta } from './profstyle'



export default function Prof({ User }) {
  return <Container>
    <Header>
      <Avatar src={User.avatar_url} />
      <Login>{User.login}</Login>
      <Name>{User.name}</Name>
    </Header>
    <Inner>
      <Data> <MdGroup size={18} /> {User.following} seguindo, {User.followers} seguidores</Data>
      <Data> <MdLocationCity size={18} />{User.location}</Data>

      <Data> <MdWork size={18} />{User.company}</Data>

      <Data >
        <MdLink size={18} />
        <Insta href='' >Instagram</Insta>

      </Data>
    </Inner>
  </Container>
};

Prof.propTypes = {
  User: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
}

