
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './components/home'
import ProductsList from './pages/product-list'
import ProductDetail from './pages/product-detail'
import Login from './pages/login'
import Register from './pages/register'
import Cart from './pages/cart'
import {Provider} from "react-redux"
import store, { persistor } from "./store/store.js"
import { PublicRoute, ProtectedRoute } from './routes'
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/product/:categoryName" element={<ProductsList />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
