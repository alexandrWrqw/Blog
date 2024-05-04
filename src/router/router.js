import { createBrowserRouter } from 'react-router-dom';

import App from '../Components/App/App';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute';

import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import ArticlePage from '../pages/ArticlePage/ArticlePage';
import CreateArticlePage from '../pages/CreateArticlePage/CreateArticlePage';
import EditArticlePage from '../pages/EditArticlePage/EditArticlePage';

import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ArticlesPage />,
      },

      {
        path: '/articles',
        element: <ArticlesPage />,
      },

      {
        path: '/articles/:slug',
        element: <ArticlePage />,
      },

      {
        path: '/new-article',
        element: (
          <ProtectedRoute>
            <CreateArticlePage />
          </ProtectedRoute>
        ),
      },

      {
        path: '/article/:slug/edit',
        element: <EditArticlePage />,
      },

      {
        path: '/sign-in',
        element: <SignInPage />,
      },

      {
        path: '/sign-up',
        element: <SignUpPage />,
      },

      {
        path: '/profile',
        element: <EditProfilePage />,
      },
    ],
  },
]);

export default router;
