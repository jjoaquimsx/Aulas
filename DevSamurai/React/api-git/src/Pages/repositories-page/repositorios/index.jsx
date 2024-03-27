import React from 'react'
import { Container } from './styles'

import Repository from './repository';

import PropTypes from 'prop-types'


const Repositories = ({ repositories, currentLang }) => {
  const repos = repositories
    .filter((repository) => currentLang === undefined || repository.language === currentLang)
    .map((repository) => (
      <Repository key={repository.id} repository={repository}></Repository>
    ));

  return (
    <Container>{repos}</Container>
  )
};

Repositories.defaultProps = {
  currentLang: undefined,
}

Repositories.propType = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentLang: PropTypes.string,
};

export default Repositories