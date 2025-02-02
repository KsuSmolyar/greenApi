import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthorizationContextProvider } from './shared/contexts/authorizationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthorizationContextProvider>
      <App />
    </AuthorizationContextProvider>
  </StrictMode>,
)
