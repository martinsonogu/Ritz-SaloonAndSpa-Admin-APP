import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthProvider';
import { PopupContextProvider } from './context/PopupContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      
        <PopupContextProvider>
          <Router>
            <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </Router>
        </PopupContextProvider>
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 3000
          }}
        />
    
    </AuthProvider>
  </React.StrictMode>
)

export { queryClient };