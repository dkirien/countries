import { FC } from 'react'
import { ICommon, IListItem } from '@/types'
import AccordionItem from '@/components/AccordionItem'
import Accordion from '@/components/Accordion'

const CountriesListItem: FC<IListItem> = ({ title, content }) => {
  return (
    <>
      <AccordionItem
        expanded={false}
        title={title}
        body={content}
        icon='expand_more'
      >
        {content.__typename === 'Country' ? (
          <ul className="collection">
            {content.child.length ? (
              content.child.map((ch: ICommon) => (
                <li className="collection-item" key={ch.code}>
                  {ch.name}
                </li>
              ))
            ) : (
              <li className="collection-item">No languages</li>
            )}
          </ul>
        ) : (
          <Accordion accordion={false} id={`accordion-${content.code}`}>
            {content.child && content.child.map((ch: ICommon) => (
              <CountriesListItem title={ch.name} content={ch} key={ch.code} />
            ))}
          </Accordion>
        )}
      </AccordionItem>
    </>
  )
}

export default CountriesListItem
