import { ReactNode } from 'react'
import * as React from 'react'

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

export interface SelectDropdownOptions {
  alignment?: 'left' | 'right' | 'top' | 'buttom'
  autoTrigger?: boolean
  constrainWidth?: boolean
  container?: React.ReactNode
  coverTrigger?: boolean
  closeOnClick?: boolean
  hover?: boolean
  inDuration?: number
  outDuration?: number
  onOpenStart?: () => void
  onOpenEnd?: () => void
  onCloseStart?: () => void
  onCloseEnd?: () => void
}

export interface SelectOptions {
  classes?: string
  dropdownOptions?: SelectDropdownOptions
}

export type SelectProps = {
  children: ReactNode
  id: string
  label: string
  options?: SelectOptions
  multiple?: boolean
  s?: number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onCloseEnd?: (el: HTMLInputElement, vale: string[]) => void
}

export type Collapsible = {
  el: Element
  destroy: () => void
  close: (section: number) => void
}

export type Accordion = {
  id: string
  accordion?: boolean
  collapseAllBtn?: boolean
  children?: ReactNode | string
}

export type AccordionItem = {
  title: string
  expanded?: boolean
  icon?: string
  children?: ReactNode | string
}

export type FormPageProps = {
  continents: ICommon[]
  languages: ICommon[]
}
