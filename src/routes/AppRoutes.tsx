import { DefaultLayout } from '../layouts/DefaultLayout';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';

export const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="/shop" element={<DefaultLayout><Shop /></DefaultLayout>} />
    </Routes>
);
