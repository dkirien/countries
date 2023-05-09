import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const activeClasses = 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
const basicClasses = 'text-gray-90 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'

const Navigation: FC = () => {
  const router = useRouter()

  return (
    <nav className="bg-grey-100 border-solid border border-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          <div className="flex items-center">
            <div className="flex items-baseline space-x-4">
              <Link href="/"
                    className={router.pathname === '/' ? activeClasses : basicClasses}
              >
                Countries List
              </Link>

              <Link href="/form"
                    className={router.pathname === '/form' ? activeClasses : basicClasses}
              >
                Add country
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
