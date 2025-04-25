import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Spinner } from '../components/ui/Spinner';

const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));

export const AppRoutes = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="/shop" element={<DefaultLayout><Shop /></DefaultLayout>} />
    </Routes>
  </Suspense>
);
