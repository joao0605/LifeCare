
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import SellerList from "@/components/sellerList/SellerList"
import TopBar from "@/components/navButton/topBar"



export default function Sellers(){
    const [sellers, setSellers] = useState(null)

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
  

    

 
    return (
        <div>
       
           
    <SellerList sellers={sellers}/>

        </div>
    )
}