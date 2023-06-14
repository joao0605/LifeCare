
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import ClientList from "@/components/clientList/clientList"



export default function Clients(){
    const [clients, setClients] = useState(null)

    useEffect(() => {
      async function fetchData() {
  
        const res = await fetch(
          `/api/adm/client`,
          { method: "GET" }
        );
        if (res.status != 200) {
          console.log("clientes não disponíveis");
        } else {
          const data = await res.json();
          console.log("esse eh o de dados", data);
          setClients(data);
        }
      }
  
      fetchData()
    }, [])
  

    

 
    return (
        <div>
           
           
    <ClientList clients={clients}/>

        </div>
    )
}