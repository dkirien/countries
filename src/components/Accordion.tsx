import { FC, useEffect, useState } from 'react'
import { Collapsible, Accordion } from '@/types'

let M: any = null

const Accordion: FC<Accordion> = ({ id, accordion, collapseAllBtn, children }) => {
  const [elem, setElem] = useState<Element | null>(null)
  const [instance, setInstance] = useState<Collapsible | null>(null)

  useEffect(() => {
    /* Init accordion */
    if ( typeof window !== 'undefined' ) {
      M = require('materialize-css')
      setElem(document.querySelector(`#${id}`))
    }

    return () => instance?.destroy()
  }, [])

  useEffect(() => {
    if ( elem ) {
      M.Collapsible.init(elem, {
        accordion: accordion
      })
      setInstance(M.Collapsible.getInstance(elem))
    }
  }, [elem])

  function collapseAll() {
    const allAccordions = document.querySelectorAll('.collapsible')

    if ( allAccordions.length ) {
      for ( let i = 0; i < allAccordions.length; i++ ) {
        const currAccordion = M.Collapsible.getInstance(allAccordions[i])
        const children = currAccordion?.el.children

        if ( children ) {
          for ( let j = 0; j < children.length; j++ ) {
            if ( children[j].className.includes('active') ) {
              currAccordion?.close(j)
            }
          }
        }
      }
    }
  }

  return (
    <div>
      {collapseAllBtn && (
        <div className="flex justify-end">
          <button
            className="btn bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-900 focus:bg-gray-900"
            type={'submit'}
            onClick={collapseAll}
          >
            Collapse all
          </button>
        </div>
      )}

      <ul className="collapsible" id={id}>
        {children}
      </ul>
    </div>
  )
}

export default Accordion
