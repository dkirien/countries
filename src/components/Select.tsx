import { FC, useEffect } from 'react'
import { SelectProps } from '@/types'

const Select: FC<SelectProps> = (
  {
    id, label, s, multiple, options = {}, error, value, onChange, onCloseEnd, children
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
        classes: error ? 'invalid' : '',
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
  }, [error])

  useEffect(() => {
    // Reset value after form submit
    if ( typeof value !== 'undefined' ) {
      const select = document.querySelector(`#${id}`) as HTMLSelectElement
      const selectInput = select.parentElement?.querySelector('input')

      if ( select && selectInput ) {
        select.value = value

        if ( value === '' ) {
          selectInput.value = ''
        } else {
          for ( let i = 0; i < select.options.length; i++ ) {
            if ( select.options[i].value === value ) {
              selectInput.value = select.options[i].text
            }
          }
        }
      }
    }
  }, [value])

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

      {error && (
        <span className="helper-text" data-error={error} />
      )}
    </div>
  )
}

export default Select
