import { FC, useEffect, useState } from 'react'
import { SelectProps } from '@/types'
import { FormSelect } from '@/types'

let M: any = null

const Select: FC<SelectProps> = (
  {
    id, label, s, multiple, options = {}, error, value, onChange, onCloseEnd, children
  }
) => {
  const [elem, setElem] = useState<Element | null>(null)
  const [instance, setInstance] = useState<FormSelect | null>(null)

  useEffect(() => {
    if ( typeof window !== 'undefined' ) {
      M = require('materialize-css')
      setElem(document.querySelector(`#${id}`))
    }

    return () => instance?.destroy()
  }, [])

  useEffect(() => {
    if ( elem ) {
      initSelect()
      setInstance(M.FormSelect.getInstance(elem))
    }
  }, [elem])

  useEffect(() => {
    if ( typeof value !== 'undefined' ) {
      const select = document.querySelector(`#${id}`) as HTMLSelectElement
      setSelectValue(select)
    }
  }, [value])

  useEffect(() => initSelect(), [error])

  function initSelect() {
    M.FormSelect.init(elem, {
      ...options,
      classes: error ? 'invalid' : '',
      dropdownOptions: {
        ...options.dropdownOptions,
        onCloseEnd: (el: HTMLInputElement) => {
          // Если multiple = true устанавливать значение после закрытия селекта
          if ( multiple ) {
            const select = document.querySelector('#languages') as HTMLSelectElement
            const arr = []

            for ( let i = 0; i < select.options.length; i++ ) {
              if ( select.options[i].selected )
                arr.push(select.options[i].value)
            }

            onCloseEnd && onCloseEnd(el, arr.length ? arr : '')
          }
        }
      }
    })
  }

  function setSelectValue(select: HTMLSelectElement) {
    if ( select && typeof value !== 'undefined' ) {
      select.value = value

      if ( multiple ) {
        for ( let i = 0; i < select.options.length; i++ ) {
          if ( value.includes(select.options[i].value) ) {
            select.options[i].selected = true
          }
        }
      } else {
        for ( let i = 0; i < select.options.length; i++ ) {
          if ( select.options[i].value === value ) {
            select.options[i].selected = true
          }
        }
      }

      initSelect()
    }
  }

  return (
    <div className={`input-field col s12 m${s}`}>
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
