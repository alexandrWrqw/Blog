import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import App from './Components/App/App';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
