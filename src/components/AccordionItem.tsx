import { FC } from 'react'
import { AccordionItem } from '@/types'

const AccordionItem: FC<AccordionItem> = ({title, expanded, icon, children}) => {
  return (
    <li className={expanded ? 'active' : ''}>
      <div className="collapsible-header">
        <i className="material-icons">{icon}</i>
        {title}
      </div>

      <div className="collapsible-body">
        <span>{children}</span>
      </div>
    </li>
  )
}

export default AccordionItem
