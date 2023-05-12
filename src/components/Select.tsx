import { ChangeEventHandler, FC, useEffect } from 'react'
import { SelectProps } from '@/types'

const Select: FC<SelectProps> = (
  {
    id, label, s, multiple, options = {}, onChange, onCloseEnd, children
  }
) => {
  useEffect(() => {
    /* Init select */
    let M = null
    let elem = null
    let instance: any = null

    if ( typeof window !== 'undefined' ) {
      M = require('materialize-css')
      elem = document.querySelector(`#${id}`)
      instance = M.FormSelect.init(elem, {
        ...options,
        dropdownOptions: {
          ...options.dropdownOptions,
          onCloseEnd: (el: HTMLInputElement) => {
            // If multiple = true set values after dropdown close
            if ( multiple ) {
              const select = document.querySelector('#languages') as HTMLSelectElement
              const arr = []

              for ( let i = 0; i < select.options.length; i++ ) {
                if ( select.options[i].selected )
                  arr.push(select.options[i].value)
              }

              onCloseEnd && onCloseEnd(el, arr)
            }
          }
        }
      })
    }

    return () => instance.destroy()
  }, [])

  return (
    <div className={`input-field col s${s}`}>
      <select
        id={id}
        multiple={multiple}
        onChange={onChange}
      >
        {children}
      </select>

      <label>{label}</label>
    </div>
  )
}

export default Select
