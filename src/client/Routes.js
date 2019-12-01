import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExpertPage from './pages/ExpertPage';
import FamilyPage from './pages/FamilyPage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        path: '/nosotros',
        ...AboutPage
      },
      {
        path: '/experto',
        ...ExpertPage
      },
      {
        path: '/familia',
        ...FamilyPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
