import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContextApi from './ContextApi/contextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextApi>
      <App />
    </CartContextApi>
  </StrictMode>,
)
