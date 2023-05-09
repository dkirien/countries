import { ReactNode } from 'react'

interface ICommon {
  code: string
  name: string
}

export interface IContinent extends ICommon {
  countries: ICountry[]
}

export interface ILanguage extends ICommon {
}

export interface ICountry extends ICommon {
  languages: ILanguage[]
}

export type PageLayout = {
  title: string
  children: ReactNode
}
