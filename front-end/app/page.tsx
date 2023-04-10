"use client"
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import Login from '@/pages/auth/login'
import Stock from '@/pages/stock'

type User = {
  id: string
}

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [user,setUser] = useState<User | null >(null)
  const router = useRouter()

  useEffect(() => {
    const userStorage = localStorage.getItem('auth-user')
    if(userStorage){
      setUser(userStorage);
      router.push('/stock')
    
    }else{
      router.push('/auth/login')
    }

  },[user])

  return null;

  // return (
  //   <>
  //     {user  === null ? <Login /> : <Stock /> }
  //   </>
  // );
}
