import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import './index.css';
import App from './App';  // Use the App component directly
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* Wrap your app with BrowserRouter */}
        <App />  {/* Don't wrap it again inside App */}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker registered: ', registration);
  }).catch((error) => {
    console.log('Service Worker registration failed: ', error);
  });
}