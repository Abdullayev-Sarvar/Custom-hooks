import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('../routes/home/Home'))
const Recipe = lazy(() => import('../routes/recipes/Recipe'))

const RoutesController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}><Home /></Suspense>
    },
    {
      path: '/recipe/:id',
      element: <Suspense fallback={<div className='flex justify-center items-center'><div className="loader"></div></div>}><Recipe /></Suspense>
    }
  ])
}

export default RoutesController