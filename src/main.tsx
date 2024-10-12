import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { domAnimation, LazyMotion } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </BrowserRouter>
  </StrictMode>,
)
