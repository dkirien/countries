import { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { FormPageProps, SelectOptions } from '@/types'
import Select from '@/components/Select'

const selectOptions: SelectOptions = {
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

const addSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Required'),
  continent: Yup.string()
    .trim()
    .required('Required'),
  languages: Yup.string()
    .required('Required'),
})

const AddForm: FC<{ data: FormPageProps }> = ({ data }) => {

  function submitForm(values: any) {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        continent: data.continents[0].code,
        languages: [],
      }}
      validationSchema={addSchema}
      onSubmit={values => {
        submitForm(values)
      }}
    >
      {({ errors, touched, values, handleChange, setFieldValue }) => (
        <Form>
          <div className="row">
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <Field name={'name'}>
                    {() => (
                      <div className="input-field col s6">
                        <input
                          type='text'
                          id="name"
                          name={'name'}
                          placeholder={'Enter country name'}
                          onChange={handleChange}
                        />

                        <label htmlFor="name" className="active">Name</label>
                      </div>
                    )}
                  </Field>

                  <Field name={'continent'}>
                    {() => (
                      <Select
                        id="continent"
                        label="Select continent"
                        s={6}
                        options={selectOptions}
                        onChange={handleChange}
                      >
                        {data.continents && data.continents.map(c => (
                          <option value={c.code} key={c.code}>
                            {c.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>
                </div>

                <div className="row">
                  <Field name={'languages'}>
                    {() => (
                      <Select
                        id="languages"
                        label="Select languages"
                        multiple
                        s={12}
                        options={selectOptions}
                        onCloseEnd={(el, value) => setFieldValue('languages', value)}
                      >
                        {data.languages && data.languages.map(c => (
                          <option value={c.code} key={c.code}>
                            {c.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>
                </div>

                <div className="flex justify-end">
                  <div className="col">
                    <button
                      className="btn bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-900 focus:bg-gray-900"
                      type={'submit'}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddForm
