import List from "@/components/list/list"
import styles from '../../components/list/list.module.css'
import { useRouter } from "next/router"

import { ItemForm } from "@/components/list/itens"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar/Navbar"
import ClientList from "@/components/sellerList/SellerList"



export default function Home(){
    const [sellers, setSellers] = useState(null)
    const router = useRouter()

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
  

    

 
    return (
        <div>
           
      <p>Página inicial adm</p>
      <div onClick={handleSellersPage}>Página dos sellers</div>
        </div>
    )
}