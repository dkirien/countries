import { GetStaticPropsResult, NextPage } from 'next'
import PageLayout from '@/components/PageLayout'
import AddForm from '@/components/AddForm'
import client from '@/lib/apollo-client'
import { getContinents, getLanguages } from '@/queries'
import { FormPageProps } from '@/types'

const FormPage: NextPage<FormPageProps> = ({ continents, languages }) => {
  return (
    <PageLayout title={'Add custom country'}>
      <AddForm data={{continents, languages}} />
    </PageLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const { data: { continents } } = await client.query({
    query: getContinents,
  })

  const { data: { languages } } = await client.query({
    query: getLanguages,
  })

  return {
    props: {
      continents,
      languages
    },
  }
}

export default FormPage
