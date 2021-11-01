import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';

import Theme from './theme';

import 'normalize.css';
import 'index.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <App />
      </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
