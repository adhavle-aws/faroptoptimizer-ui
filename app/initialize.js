import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from 'components/App';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.querySelector('#app')
  );
});
