// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/home/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/components',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/home/components'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/process',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/process/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/about',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/about/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/faq',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/faq/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/contacts',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/contacts/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/car_finder',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/car_finder/index'),
      loading: LoadingComponent,
    }),
  },{
    path: '/privacy',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/terms/index'),
      loading: LoadingComponent,
    }),
  },
]

export default routes



