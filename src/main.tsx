import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
