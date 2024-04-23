import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import App from './Components/App/App';
// import RouteErrorMessage from './Components/RouteErrorMessage/RouteErrorMessage';
// import ArticleList from './Components/ArticleList/ArticleList';
// import SignIn from './Components/SignIn/SignIn';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App />,
//       errorElement: <RouteErrorMessage />,
//       children: [
//         {
//           path: 'articles',
//           element: <ArticleList />,
//         },

//         {
//           path: 'authorization',
//           element: <SignIn />,
//         },
//       ],
//     },
//   ],
//   { basename: '/Blog/' },
// );

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
