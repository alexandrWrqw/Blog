import { createBrowserRouter } from 'react-router-dom';

import App from '../Components/App/App';
import RouteErrorMessage from '../Components/RouteErrorMessage/RouteErrorMessage';
import ArticleList from '../Components/ArticleList/ArticleList';
import ArticleItemFull from '../Components/ArticleItemFull/ArticleItemFull';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import EditProfile from '../Components/EditProfile/EditProfile';
import CreateArticle from '../Components/CreateArticle/CreateArticle';

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
        path: '/new-article',
        element: <CreateArticle />,
      },

      {
        path: 'sign-in',
        element: <SignIn />,
      },

      {
        path: 'sign-up',
        element: <SignUp />,
      },

      {
        path: 'profile',
        element: <EditProfile />,
      },
    ],
  },
]);

export default router;
