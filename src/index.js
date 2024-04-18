import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './Components/App/App';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
