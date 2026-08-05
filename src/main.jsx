import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import Login from './Login'
import Menu from './Menu'
import Order from './Order'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)