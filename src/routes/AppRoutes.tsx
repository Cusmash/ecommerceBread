import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Spinner } from '../components/ui/Spinner';
import ProductDetails from '../pages/ProductDetails';

const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));

export const AppRoutes = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="/shop" element={<DefaultLayout><Shop /></DefaultLayout>} />
      <Route path="/product/:id" element={<DefaultLayout><ProductDetails /></DefaultLayout>} />
    </Routes>
  </Suspense>
);
