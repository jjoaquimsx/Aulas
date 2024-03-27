import React from 'react'
import { Container, Name, Description, Footer, Lang, Link } from './style.js'
import PropTypes from 'prop-types'
import { langColors } from '../../../../services/config.js'

const Repository = ({ repository }) => {
  const color = langColors[repository.language && repository.language.toLowerCase()]

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target='_blank'>VER</Link>
      </Footer>
    </Container>
  )
}


Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    html_url: PropTypes.array.isRequired,
    language: PropTypes.array.isRequired,
  }).isRequired,
}

export default Repository
