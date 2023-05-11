import { FC } from 'react'
import { Collapsible } from 'react-materialize'
import { IContinent } from '@/types'
import CountriesListItem from '@/components/CountriesListItem'

const CountriesList: FC<{ data: IContinent[] }> = ({ data }) => {
  return (
    <>
      <Collapsible accordion={false}>
        {data.map(d => (
          <CountriesListItem title={d.name} content={d} key={d.code} />
        ))}
      </Collapsible>
    </>
  )
}

export default CountriesList
