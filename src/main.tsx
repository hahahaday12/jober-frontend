import ReactDOM from 'react-dom/client';
import '@/index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'pages/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </>,
);
