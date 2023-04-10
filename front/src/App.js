import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/auth/Login'
import Product from './components/stock/Product';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <BrowserRouter>
    
    
     <Routes>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/stock/product" element={<Product />}></Route>
           
          </Routes>

          </BrowserRouter>
    </>
  );
}

export default App;
