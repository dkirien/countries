import { FC } from 'react'
import { IContinent } from '@/types'
import { Accordion } from 'flowbite-react'
import CountriesListItem from '@/components/CountriesListItem'

const CountriesList: FC<{ data: IContinent[] }> = ({ data }) => {
  return (
    <>
      <Accordion collapseAll={true} alwaysOpen={true}>
        {data.map(d => (
          <Accordion.Panel key={d.code}>
            <CountriesListItem title={d.name} content={d} />
          </Accordion.Panel>
        ))}
      </Accordion>
    </>
  )
}

export default CountriesList
