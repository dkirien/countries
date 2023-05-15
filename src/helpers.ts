import { CreateCountryParams, ICommon, IContinent } from '@/types'
import { DropResult } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

/*
* Создает объект со структурой из API
* */
export const createCountryObj: CreateCountryParams = (formValues, continents, languages) => {
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

export const dragReorder = (
  list: IContinent[],
  startIndex: number,
  endIndex: number
): IContinent[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)

  result.splice(endIndex, 0, removed)

  return result
}

/*
* Обновление данных после сортировки
* */
export const onDragEndHandler = (
  result: DropResult,
  state: SetStateAction<any>,
  setState: Dispatch<SetStateAction<any>>,
  parentCode?: string | undefined
) => {
  if ( !result.destination ) return

  const reorderedCountries = dragReorder(
    state,
    result.source.index,
    result.destination.index
  )

  setState(reorderedCountries)

  // Сортировка списка стран
  if ( parentCode ) {
    const sorted = localStorage.getItem('sortedCountries')
    const sortedArr = sorted ? JSON.parse(sorted) : []

    if ( sortedArr.length > 0 ) {
      const parentObjIdx = sortedArr.findIndex((item: IContinent) => (
        item.code === parentCode
      ))

      if ( parentObjIdx !== -1 ) {
        sortedArr[parentObjIdx].child = reorderedCountries
        localStorage.setItem('sortedCountries', JSON.stringify(sortedArr))
      }
    }
  } else {
    localStorage.setItem('sortedCountries', JSON.stringify(reorderedCountries))
  }
}

/*
* Проверяет два массива языков на идентичность
* */
export const isLangArrEqual = (arr1: ICommon[], arr2: ICommon[]) => {
  if ( arr1.length !== arr2.length )
    return false

  return JSON.stringify(arr1) === JSON.stringify(arr2)
}
