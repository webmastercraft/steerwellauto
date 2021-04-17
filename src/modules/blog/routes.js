// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'

export default [
  {
    path: '/blog',
    exact: true,
    component: Loadable({
      loader: () => import('./index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/blog/article/:id',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/article/index'),
      loading: LoadingComponent,
    }),
  },
]