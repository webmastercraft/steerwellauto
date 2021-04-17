// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'

export default [
  {
    path: '/browse',
    exact: true,
    component: Loadable({
      loader: () => import('./index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/browse/detail/:id',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/detail/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/browse/:id/booking',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/booking/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/browse/:id/success_booking',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/success_booking/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/browse/bus',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/bus/index'),
      loading: LoadingComponent,
    }),
  },
]