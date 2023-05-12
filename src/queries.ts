import { gql } from '@apollo/client'

export const getContinentsWithCountries = gql`
query {
  continents {
    code
    name
    child: countries {
      code
      name
      child: languages {
        code
        name
      }
    }
  }
}
`

export const getContinents = gql`
query {
  continents {
    code
    name
  }
}
`

export const getLanguages = gql`
query {
  languages {
    code
    name
  }
}
`
