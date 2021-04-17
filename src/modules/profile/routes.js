
import Loadable from 'react-loadable'
import LoadingComponent from '../../common/loader/index'

export default [
  {
    path: '/profile',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/track_car',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('../trackCar/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/track_doc',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('../trackDoc/index'),
      loading: LoadingComponent,
    }),
  },
]