
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './components/home'
import ProductsList from './pages/product-list'
import ProductDetail from './pages/product-detail'
import Login from './pages/login'
import Register from './pages/register'
import Cart from './pages/cart'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="products" element={<ProductsList/>}/>
      <Route path="product/:id" element={<ProductDetail/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
