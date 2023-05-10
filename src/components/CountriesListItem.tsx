import { FC } from 'react'
import { Accordion } from 'flowbite-react'
import { ICommon, IListItem } from '@/types'

const CountriesListItem: FC<IListItem> = ({ title, content }) => {
  return (
    <>
      <Accordion.Title className={'text-gray-900 bg-white hover:bg-gray-50 !ring-0'}>
        {title}
      </Accordion.Title>

      <Accordion.Content className={'bg-white'}>
        {content.__typename === 'Country' ? (
          <ul>
            {content.child.length ? (
              content.child.map((ch: ICommon) => (
                <li key={ch.code}>
                  {ch.name}
                </li>
              ))
            ) : ('No languages')}
          </ul>
        ) : (
          <Accordion collapseAll={true} alwaysOpen={true}>
            {content.child && content.child.map((ch: ICommon) => (
              <Accordion.Panel key={ch.code}>
                <CountriesListItem title={ch.name} content={ch} />
              </Accordion.Panel>
            ))}
          </Accordion>
        )}
      </Accordion.Content>
    </>
  )
}

export default CountriesListItem
