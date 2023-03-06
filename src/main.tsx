import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './styles/global.scss'

import { Container } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <Home />
    </Container>
  </React.StrictMode>
)
