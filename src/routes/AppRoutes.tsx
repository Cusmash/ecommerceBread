import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Spinner } from '../components/ui/Spinner';
import ProductDetails from '../pages/ProductDetails';
import { ContainerLayout } from '../components/layout/ContainerLayout';
import About from '../pages/About';
import SignIn from '../pages/Auth/SignIn';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Profile from '../pages/Profile';

const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));

export const AppRoutes = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="/shop" element={<DefaultLayout><ContainerLayout><Shop /></ContainerLayout></DefaultLayout>} />
      <Route path="/product/:id" element={<DefaultLayout><ContainerLayout><ProductDetails /></ContainerLayout></DefaultLayout>} />
      <Route path="/about" element={<DefaultLayout><ContainerLayout><About /></ContainerLayout></DefaultLayout>} />
      <Route path="/sign-in" element={<PublicRoute><DefaultLayout><SignIn /></DefaultLayout></PublicRoute>} />
      <Route path="/profile/userDetails" element={<PrivateRoute><DefaultLayout><Profile /></DefaultLayout></PrivateRoute>} />
    </Routes>
  </Suspense>
);
