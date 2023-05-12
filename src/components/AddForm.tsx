import { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { CreatedCountry, FormPageProps, IContinent, SelectOptions } from '@/types'
import { createCountryObf } from '@/helpers'
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
    .required('Field is required'),
  continent: Yup.string()
    .trim()
    .required('Required'),
  languages: Yup.array()
    .of(Yup.string())
    .required('Field is required'),
})

const AddForm: FC<{ data: FormPageProps }> = ({ data }) => {
  function submitForm(values: CreatedCountry) {
    const ls = localStorage.getItem('createdCountries')
    const arr = ls ? JSON.parse(ls) : []

    if ( arr.length > 0 ) {
      const existingIdx = arr.findIndex((item: IContinent) => {
        return item.child[0].name === values.name
      })

      if ( existingIdx !== -1 ) {
        arr[existingIdx] = createCountryObf(values, data.continents, data.languages)
      } else {
        arr.push(createCountryObf(values, data.continents, data.languages))
      }
    } else {
      arr.push(createCountryObf(values, data.continents, data.languages))
    }

    localStorage.setItem('createdCountries', JSON.stringify(arr))

    M.toast({ html: 'Country is added successfully!' })
  }

  return (
    <Formik
      initialValues={{
        name: '',
        continent: data.continents[0].code,
        languages: '',
      }}
      validationSchema={addSchema}
      onSubmit={(values, actions) => {
        submitForm(values)
        actions.resetForm()
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
                          type="text"
                          id="name"
                          name={'name'}
                          className={(touched.name && errors.name) ? 'invalid' : ''}
                          placeholder={'Enter country name'}
                          value={values.name}
                          onChange={handleChange}
                        />

                        <label htmlFor="name" className="active">Name</label>
                        {errors.name && (
                          <span className="helper-text" data-error={errors.name} />
                        )}
                      </div>
                    )}
                  </Field>

                  <Field name={'continent'}>
                    {() => (
                      <Select
                        id="continent"
                        label="Select continent"
                        s={6}
                        value={values.continent}
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
                        value={values.languages}
                        error={touched.languages ? errors.languages : ''}
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
