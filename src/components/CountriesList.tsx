import { FC, useEffect, useState } from 'react'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import { IContinent } from '@/types'
import { isLangArrEqual, LS, onDragEndHandler } from '@/helpers'
import Accordion from '@/components/Accordion'
import CountriesListItem from '@/components/CountriesListItem'

const CountriesList: FC<{ data: IContinent[] }> = ({ data }) => {
  const [countries, setCountries] = useState<IContinent[]>([])

  useEffect(() => {
    if ( data ) {
      // Добавляем страны для будущей сортировки
      if ( !LS.get('sortedCountries').length )
        LS.set('sortedCountries', data)

      const sortedArr = LS.get('sortedCountries')
      const ccArr = LS.get('createdCountries')

      setCountries(() => {
        // Добавляем созданные страны
        if ( ccArr.length ) {
          ccArr.forEach((cc: IContinent) => {
            // Находим индекс континента, к которому принадлежит страна
            const currContIdx = sortedArr.findIndex((p: IContinent) => p.code === cc.code)

            if ( currContIdx !== -1 ) {
              // Индекс страны, если такая уже существует
              const existingCountryIdx = sortedArr[currContIdx].child.findIndex((item: any) => item.name === cc.child[0].name)

              if ( existingCountryIdx !== -1 ) {
                // Проверяем на идентичность массив языков
                const existCountry = sortedArr[currContIdx].child[existingCountryIdx].child
                const isEqual = isLangArrEqual(existCountry, cc.child[0].child)

                if ( !isEqual )
                  sortedArr[currContIdx].child[existingCountryIdx] = cc.child[0]
              } else {
                sortedArr[currContIdx].child.push(cc.child[0])
              }
            }
          })
        }

        LS.set('sortedCountries', sortedArr)
        return sortedArr
      })
    }
  }, [data])

  return (
    <>
      <DragDropContext
        onDragEnd={result => onDragEndHandler(result, countries, setCountries)}
      >
        <Droppable droppableId="droppableAccordion">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Accordion accordion={false} id={'accordion'} collapseAllBtn>
                {countries.map((c, index) => (
                  <CountriesListItem
                    key={c.code}
                    title={c.name}
                    content={c}
                    index={index}
                    provided={provided}
                  />
                ))}
                {provided.placeholder}
              </Accordion>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default CountriesList
