import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Product from './components/product/Product';
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stock from './components/stock/Stock';
import Navbar from './components/sidebar/Navbar';
import  Vente  from './components/vente/Vente';
import Fournisseur from './components/fournisseur/Fournisseur';
import Client from './components/client/Client';
import Approvisionnement from './components/approvisionnement/Approvisionnement';

function App() {
  const [user,setUser] = useState(null);
  //const navigate =  useNavigate();

  useEffect(() => {
    const localUser = localStorage.getItem('user-admin')
    if(localUser){
      //navigate('/stock/product')
      setUser(localUser)

    }else{
      //navigate('/auth/login')
    }

  },[user])

  return (
    <>
    <div className='App'>
      
          <BrowserRouter>
    
    
        <Routes>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/register" element={<Register />}></Route>
            <Route path='/stock/fournisseur' element={<Fournisseur />}></Route>
            <Route  path='/stock/vente' element={<Vente/>}></Route>
            <Route path="/stock" exact element={<Stock />}></Route>
            <Route path="/stock/product" exact element={<Product />}></Route>
            <Route path="/stock/client" exact element={<Client />}></Route>
            <Route path="/stock/approvisionnement" exact element={<Approvisionnement />}></Route>

          </Routes>

          </BrowserRouter>
    </div>
    </>
  );
}

export default App;
