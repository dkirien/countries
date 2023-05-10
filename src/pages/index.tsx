import { GetStaticPropsResult, NextPage } from 'next'
import client from '../lib/apollo-client'
import { getContinentsWithCountries } from '@/queries'
import { IContinent } from '@/types'
import PageLayout from '@/components/PageLayout'
import CountriesList from '@/components/CountriesList'

const Home: NextPage<{ continents: IContinent[] }> = ({ continents }) => {
  return (
    <PageLayout title={'List of Countries'}>
      <CountriesList data={continents} />
    </PageLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const { data } = await client.query({
    query: getContinentsWithCountries,
  })

  return {
    props: {
      continents: data.continents
    },
  }
}

export default Home

