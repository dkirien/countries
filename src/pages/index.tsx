import { GetStaticPropsResult, NextPage } from 'next'
import client from '../lib/apollo-client'
import { getContinentsWithCountries } from '@/queries'
import { IContinent } from '@/types'

const Home: NextPage<{ continents: IContinent[] }> = ({continents}) => {
  return (
    <div>

    </div>
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

