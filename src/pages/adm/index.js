import List from "@/components/list/list"
import styles from '../../components/list/list.module.css'
import { useRouter } from "next/router"

import { ItemForm } from "@/components/list/itens"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar/Navbar"
import ClientList from "@/components/sellerList/SellerList"



export default function Home(){
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
           
           {/*
            <div className={styles.container}>
                <List >
                    {sellers && sellers.map(i => <ItemForm name={i.name} registration={i.registration} sellerId={i._id}/>)}
                </List>
            </div>
    */}
    <ClientList sellers={sellers}/>

        </div>
    )
}