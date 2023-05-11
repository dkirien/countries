import { NextPage } from 'next'
import PageLayout from '@/components/PageLayout'
import Form from '@/components/Form'

const FormPage: NextPage = () => {
  return (
    <PageLayout title={'Add custom country'}>
      <Form />
    </PageLayout>
  )
}

export default FormPage
