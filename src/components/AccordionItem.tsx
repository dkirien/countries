import React, { FC } from 'react'
import { AccordionItem } from '@/types'

const AccordionItem: FC<AccordionItem> = ({ title, expanded, icon, children, provided }) => {
  return (
    <li className={expanded ? 'active' : ''}>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className="collapsible-header">
          <i className="material-icons">{icon}</i>
          {title}
        </div>
      </div>

      <div className="collapsible-body">
        <span>{children}</span>
      </div>
    </li>
  )
}

export default AccordionItem
