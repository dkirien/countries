import React, { FC } from 'react'
import Navigation from '@/components/Navigation'

const MainLayout: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      <Navigation />

      {children}
    </>
  )
}

export default MainLayout
