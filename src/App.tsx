import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
import { LoadingProvider } from './contexts/LoadingContext';
import { GlobalSpinner } from './components/ui/GlobalSpinner';

export default function App() {
  return (
    <BrowserRouter>
    <LoadingProvider>
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalSpinner />
    </LoadingProvider>
  </BrowserRouter>
  );
}
