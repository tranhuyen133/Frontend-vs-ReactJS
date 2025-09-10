import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './components/baitap/bai1/ProductDetail'
import Student from './components/baitap/bai2/Student'
import Input from './components/baitap/bai3/Input'
import InputUrl from './components/baitap/bai4/InputUrl'
import PrivateRouter from './components/baitap/bai5/PrivateRouter'
import Login from './components/baitap/bai5/Login'
import Account from './components/baitap/bai5/Account'
import PrivateRoleRouter from './components/baitap/bai6/PrivateRoleRouter'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Trang chủ</h1>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/student" element={<Student />} />
          <Route path='/input' element={<Input></Input>}></Route>
          <Route path='/inputname' element ={<InputUrl></InputUrl>}></Route>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
           <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoleRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>
          <Route path=''></Route>
          <Route path="*" element={<h1>404 - Không tìm thấy trang</h1>} />
          <Route path=''></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
