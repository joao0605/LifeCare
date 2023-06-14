import List from "@/components/list/list"
import styles from '../../components/list/list.module.css'
import { useRouter } from "next/router"

import { ItemStudents } from "@/components/list/itens"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar/Navbar"



export default function Home(){
    const [sellers, setSellers] = useState(null)

    useEffect(() => {
      async function fetchData() {
  
        const res = await fetch(
          `/api/adm/seller`,
          { method: "GET" }
        );
        if (res.status != 200) {
          console.log("Vendedores ainda não disponíveis");
        } else {
          const data = await res.json();
          console.log("esse eh o de dados", data);
          setSellers(data);
        }
      }
  
      fetchData()
    }, [])
  

    const sellersTest = [
        {name: "joao",
        registration: "1"
    
    },
        {name: "joao",
        registration: "1"
    
    },
        {name: "joao",
        registration: "1"
    
    },
    ]

 
    return (
        <div>
           
           <Navbar></Navbar>

            <div className={styles.container}>
                <List >
                    {sellers && sellers.map(i => <ItemStudents name={i.name} registration={i.registration} />)}
                </List>
            </div>


        </div>
    )
}