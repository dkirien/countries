import { FC } from 'react'
import { IContinent } from '@/types'
import Accordion from '@/components/Accordion'
import CountriesListItem from '@/components/CountriesListItem'

const CountriesList: FC<{ data: IContinent[] }> = ({ data }) => {
  return (
    <>
      <Accordion accordion={false} id={'accordion'} collapseAllBtn>
        {data.map(d => (
          <CountriesListItem title={d.name} content={d} key={d.code} />
        ))}
      </Accordion>
    </>
  )
}

export default CountriesList
