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
