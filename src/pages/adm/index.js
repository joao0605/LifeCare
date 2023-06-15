import List from "@/components/list/list"

import { useRouter } from "next/router"

import { ItemForm } from "@/components/list/itens"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar/Navbar"
import ClientList from "@/components/sellerList/SellerList"
import Logo from "@/components/logoTitle/logoPrincipal"
import styles from '../../components/sellerList/SellerList.module.css'
import Homepage from "@/components/homepage/Homepage"





export default function Home() {
 

  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem('userType')
   
     if( userType !== "adm"){

        router.push("/login")
    }

}, [])

  

  return (
    <div>
      <Navbar />

  
      <Homepage />
      
    </div>
  )
}