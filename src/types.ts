import { ReactNode } from 'react'

export interface ICommon {
  code: string
  name: string
}

export interface IContinent extends ICommon {
  child: ICountry[]
}

export interface ICountry extends ICommon {
  child: ICommon[]
}

export interface IListItem {
  title?: string
  content: any
}

export type PageLayout = {
  title: string
  children: ReactNode
}
