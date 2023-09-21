import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
//when only using react query
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import { myApi } from './redux/api.ts'


import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ApiProvider api={myApi}>
      <App />
    </ApiProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
