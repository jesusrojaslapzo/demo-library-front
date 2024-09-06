import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { EXPLORER_HOME, HOME_PATH } from './paths/all-paths'

const HomeView = lazy(() => import('@/components/pages/Home/Home'))
const ExplorerView = lazy(() => import('@/components/pages/Explorer/Explorer'))

export const routes: RouteObject[] = [
  {
    path: HOME_PATH,
    element: <ExplorerView />
  },
  {
    path: EXPLORER_HOME,
    element: <HomeView />
  }
]

export default routes
