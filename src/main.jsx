import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

import { store } from './services/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* hover over it -- it says single redux store  */}
    <App />
    </Provider>
    
  </React.StrictMode>,
)
