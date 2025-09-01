import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import Layout from './layout';

import { Provider } from 'react-redux';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AdminRoutes from './routes/adminRoutes';
import ListProducts from './pages/products/ListProducts';
import Product from './pages/products/Product';
import AddProduct from './pages/products/AddProduct';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path='/' element={
          <AdminRoutes>
            <Layout />
          </AdminRoutes>
        }>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ListProducts/>}/>
          <Route path='product/:id' element={<Product/>}/>
          <Route path='product/add' element={<AddProduct/>}/>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
