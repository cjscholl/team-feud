import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';

const store = configureStore();

const renderApp = () => ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')) || undefined;

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
