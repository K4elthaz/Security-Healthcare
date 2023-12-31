import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import "./index.css"
import { I18nextProvider } from 'react-i18next';
import i18next from './Components/i18n';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </>,
  document.getElementById('root')
)
