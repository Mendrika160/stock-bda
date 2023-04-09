"use client"
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [user,setUser] = useState(null)
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
}
