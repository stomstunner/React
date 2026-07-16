import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  // and we have to give the value toh yaha ham usse value na bol ke store bolte hai aur props ko bhi ham yaha store hi bole hue hai toh ham store = { store } likh denge
  <Provider store = { store}>
    <App />
  </Provider>,
)
