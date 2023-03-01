import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.scss'

import { Container } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <App />
    </Container>
  </React.StrictMode>,
)
