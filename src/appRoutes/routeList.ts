import { lazy } from 'react';

const HomePage = lazy(() => import('pages/home'));

const routeList = [
  {
    path: '/',
    component: HomePage,
    name: 'Home',
  },
];

export { routeList };
