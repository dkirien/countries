import { FC, useState } from 'react'
import { ICommon, IListItem } from '@/types'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { onDragEndHandler } from '@/helpers'
import AccordionItem from '@/components/AccordionItem'
import Accordion from '@/components/Accordion'

const CountriesListItem: FC<IListItem> = ({ title, content, index }) => {
  const [childContent, setChildContent] = useState(content.child)

  return (
    <>
      <Draggable key={content.code} draggableId={content.code} index={index}>
        {provided => (
          <AccordionItem
            expanded={false}
            title={title}
            body={content}
            icon="expand_more"
            provided={provided}
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
              <DragDropContext
                onDragEnd={result => {
                  onDragEndHandler(result, childContent, setChildContent, content.code)
                }}
              >
                <Droppable droppableId={`droppableAccordion-${content.code}`}>
                  {provided => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <Accordion accordion={false} id={`accordion-${content.code}`}>
                        {childContent && childContent.map((ch: ICommon, childIndex: number) => (
                          <CountriesListItem
                            title={ch.name}
                            content={ch}
                            key={ch.code}
                            index={childIndex}
                            provided={provided}
                          />
                        ))}
                        {provided.placeholder}
                      </Accordion>
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            )}
          </AccordionItem>
        )}
      </Draggable>
    </>
  )
}

export default CountriesListItem
