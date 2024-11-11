import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from './components/reducer/index.jsx';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
const store = configureStore({
  reducer:rootReducer,
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider Provider store={store}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
