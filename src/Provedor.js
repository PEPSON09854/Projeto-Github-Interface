import React from 'react'
import Providers from './providers/Providers'
import App from './App';
import { GlobalStyle } from './global/GlobalStyle';


const Provider = () => {
  return (
    <main>
      
      <Providers>
        <GlobalStyle />
        <App />
      </Providers> 
    </main>
  )
}

export default Provider

