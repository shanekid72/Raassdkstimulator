import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { SimulatorProvider } from './app/simulator/SimulatorStore'
import './styles/index.css'

// Standalone mode: add class to root for styling
const rootElement = document.getElementById('root')!;
rootElement.classList.add('raas-standalone');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SimulatorProvider>
      <App />
    </SimulatorProvider>
  </React.StrictMode>,
)
