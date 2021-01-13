import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './scss/application.scss';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);