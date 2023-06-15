import UserData from "@/components/userData/UserData";
import { useState, useEffect } from "react";

export default function Profile(){

    const [dados, setDados] = useState(null);

    useEffect(() => {
        async function fetchSession() {
          try {
            const res = await fetch('/api/auth/validate', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ token: localStorage.getItem("token") })
            });
            if (!res.ok) {
              throw new Error("Failed to validate session");
            }
            const data = await res.json();
            return data.session.userId;
          } catch (error) {
            console.error(error);
            // Lida com o erro, se necessário
            return null;
          }
        }
    
        async function fetchData(userId) {
          try {
            const res = await fetch(`/api/adm/${userId}`, { method: "GET" });
            if (!res.ok) {
              throw new Error("Failed to fetch user data");
            }
            const data = await res.json();
            setDados(data);
          } catch (error) {
            console.error(error);
            // Lida com o erro, se necessário
          }
        }
    
        fetchSession()
          .then(userId => {
            if (userId) {
              return fetchData(userId);
            } else {
              // Lida com o caso em que o userId não está disponível
            }
          })
          .catch(error => {
            console.error(error);
            // Lida com o erro, se necessário
          });
      }, []);

    return (
        <div>
        {!dados ?<p>Ainda sem dados para carregar por aqui!</p> : <UserData name={dados.name} birthdate={dados.birthdate} phoneNumber={dados.phoneNumber} email={dados.email} address={dados.address}/>}

        </div>
    )
}