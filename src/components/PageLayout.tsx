import { FC } from 'react'
import { PageLayout } from '@/types'

const PageLayout: FC<PageLayout> = ({ title, children }) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className={'mx-auto max-w-7xl py-6 px-6 lg:px-8'}>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
        </div>
      </header>


      <main>
        <div className="mx-auto max-w-7xl py-6 px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  )
}

export default PageLayout
