import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import router from './router/router';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
