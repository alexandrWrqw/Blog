import { createBrowserRouter } from 'react-router-dom';

import App from '../Components/App/App';
import RouteErrorMessage from '../Components/RouteErrorMessage/RouteErrorMessage';
import ArticleList from '../Components/ArticleList/ArticleList';
import ArticleItemFull from '../Components/ArticleItemFull/ArticleItemFull';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import EditProfile from '../Components/EditProfile/EditProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteErrorMessage />,
    children: [
      {
        path: '/',
        element: <ArticleList />,
      },

      {
        path: '/articles',
        element: <ArticleList />,
      },

      {
        path: '/articles/:slug',
        element: <ArticleItemFull />,
      },

      {
        path: 'authorization',
        element: <SignIn />,
      },

      {
        path: 'registration',
        element: <SignUp />,
      },

      {
        path: 'edit-profile',
        element: <EditProfile />,
      },
    ],
  },
]);

export default router;
