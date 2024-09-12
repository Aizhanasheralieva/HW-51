import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LottoApp from './LottoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LottoApp />
  </StrictMode>,
)
