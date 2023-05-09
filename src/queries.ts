import { gql } from '@apollo/client'

export const getContinentsWithCountries = gql`
query {
  continents {
    code
    name
    countries {
      code
      name
      languages {
        code
        name
      }
    }
  }
}
`
