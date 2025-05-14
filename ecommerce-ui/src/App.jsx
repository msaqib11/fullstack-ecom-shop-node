
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './components/home'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
