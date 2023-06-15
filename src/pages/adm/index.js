import List from "@/components/list/list"

import { useRouter } from "next/router"

import { ItemForm } from "@/components/list/itens"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar/Navbar"
import ClientList from "@/components/sellerList/SellerList"
import Logo from "@/components/logoTitle/logoSecundario"
import styles from '../../components/sellerList/SellerList.module.css'
import Homepage from "@/components/homepage/Homepage"



export default function Home() {
  const [sellers, setSellers] = useState(null)
  const router = useRouter()



  useEffect(() => {
    const userType = localStorage.getItem('userType')

    if (userType !== "adm") {

      router.push("/login")
    }

  }, [])

  useEffect(() => {
    async function fetchData() {

      const res = await fetch(
        `/api/adm/seller`,
        { method: "GET" }
      );
      if (res.status != 200) {
        console.log("Vendedores não disponíveis");
      } else {
        const data = await res.json();
        console.log("esse eh o de dados", data);
        setSellers(data);
      }
    }

    fetchData()
  }, [])

  const handleSellersPage = () => {
    router.push("/adm/data/sellers")
  }
  const handleClientsPage = () => {
    router.push("/adm/data/clients")
  }
  const handleProfile = () => {
    router.push("/adm/data/profile")
  }





  return (
    <div>
      <Navbar />

      <p>Página inicial adm</p>
      <div onClick={handleSellersPage}>Página dos sellers</div>
      <div onClick={handleClientsPage}>Página dos clients</div>
      <div onClick={handleProfile}>Perfil adm</div>


      <Homepage />


    </div>
  )
}