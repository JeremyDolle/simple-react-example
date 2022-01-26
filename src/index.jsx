import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { SWRConfig } from 'swr';
import Router from './router/Router';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (url, ...args) => fetch(`${BASE_URL}${url}`, ...args).then((res) => res.json()),
      }}
    >
      <Router />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);
