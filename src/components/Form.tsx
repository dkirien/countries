import { FC, FormEvent } from 'react'
import { Button, Select, TextInput } from 'react-materialize'
import { DropdownOptions } from 'react-materialize/lib/Dropdown'

const selectOptions: {classes: string, dropdownOptions: DropdownOptions } = {
  classes: '',
  dropdownOptions: {
    alignment: 'left',
    autoTrigger: true,
    closeOnClick: true,
    constrainWidth: true,
    coverTrigger: true,
    hover: false,
    inDuration: 150,
    outDuration: 250
  }
}

const Form: FC = () => {
  function submitForm(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="row">
      <form
        className="col s12"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="row">
          <TextInput
            id="name"
            label="Name"
            s={6}
          />

          <Select
            id="continent"
            label="Select continent"
            s={6}
            options={selectOptions}
          >
            <option value="1">
              Option 1
            </option>
            <option value="2">
              Option 2
            </option>
            <option value="3">
              Option 3
            </option>
          </Select>
        </div>

        <div className="row">
          <Select
            id="continent"
            label="Select languages"
            multiple
            s={12}
            options={selectOptions}
          >
            <option value="1">
              Option 1
            </option>
            <option value="2">
              Option 2
            </option>
            <option value="3">
              Option 3
            </option>
          </Select>
        </div>

        <div className="row flex justify-end">
          <div className="col">
            <Button
              node="button"
              waves="teal"
              className={'bg-gray-900 text-white rounded-md text-sm font-medium'}
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
