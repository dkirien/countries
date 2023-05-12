import { CreateCountryParams } from '@/types'

export const createCountryObf: CreateCountryParams = (formValues, continents, languages) => {
  const contName = continents.find(c => c.code === formValues.continent)?.name

  return {
    __typename: 'Continent',
    code: formValues.continent,
    name: contName ? contName : '',
    child: [{
      __typename: 'Country',
      code: formValues.name,
      name: formValues.name,
      child: Array.isArray(formValues.languages) && formValues.languages.map(l => (
        {
          __typename: 'Language',
          code: l,
          name: languages.find(dl => dl.code === l)?.name,
        }
      ))
    }]
  }
}
