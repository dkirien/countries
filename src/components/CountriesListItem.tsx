import { FC } from 'react'
import { Collapsible, CollapsibleItem, Collection, CollectionItem, Icon } from 'react-materialize'
import { ICommon, IListItem } from '@/types'

const CountriesListItem: FC<IListItem> = ({ title, content }) => {
  return (
    <>
      <CollapsibleItem
        expanded={false}
        header={title}
        icon={<Icon>expand_more</Icon>}
        node="div"
        onSelect={() => {}}
      >
        {content.__typename === 'Country' ? (
          <Collection>
            {content.child.length ? (
              content.child.map((ch: ICommon) => (
                <CollectionItem key={ch.code}>
                  {ch.name}
                </CollectionItem>
              ))
            ) : (
              <CollectionItem>No languages</CollectionItem>
            )}
          </Collection>
        ) : (
          <Collapsible accordion={false}>
            {content.child && content.child.map((ch: ICommon) => (
              <CountriesListItem title={ch.name} content={ch} key={ch.code} />
            ))}
          </Collapsible>
        )}
      </CollapsibleItem>
    </>
  )
}

export default CountriesListItem
