import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { TransitionProvider } from './Transition/TransitionContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <TransitionProvider>
        <App />
      </TransitionProvider>
    </BrowserRouter>
  </StrictMode>,
)
