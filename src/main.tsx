import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css' // Assuming there is a global css file, adjusting if needed.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
