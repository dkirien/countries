import { FC, useEffect, useState } from 'react'
import { IContinent } from '@/types'
import Accordion from '@/components/Accordion'
import CountriesListItem from '@/components/CountriesListItem'

const CountriesList: FC<{ data: IContinent[] }> = ({ data }) => {
  const [countries, setCountries] = useState<IContinent[]>([])

  useEffect(() => {
    if ( data ) {
      const cc = localStorage.getItem('createdCountries')
      const ccArr = cc ? JSON.parse(cc) : []

      setCountries(() => {
        ccArr.forEach((cc: IContinent) => {
          const currContIdx = data.findIndex(p => p.code === cc.code)

          if ( currContIdx !== -1 ) {
            data[currContIdx].child.push(cc.child[0])
          }
        })

        return data
      })
    }
  }, [data])

  return (
    <>
      {countries && (
        <Accordion accordion={false} id={'accordion'} collapseAllBtn>
          {countries.map(c => (
            <CountriesListItem title={c.name} content={c} key={c.code} />
          ))}
        </Accordion>
      )}
    </>
  )
}

export default CountriesList
