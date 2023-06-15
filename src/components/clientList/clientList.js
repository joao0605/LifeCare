import React, { useState } from 'react';
import styles from "./clientList.module.css";
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../logoTitle/logoPrincipal';
import Navbar from '../navbar/Navbar';

const ClientList = (props) => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [sale, setSale] = useState(null);

    const router = useRouter()


    const handleClientClick = (clientId) => {

        async function fetchSale() {

            const res = await fetch(
                `/api/adm/sales/client/${clientId}`,
                { method: "GET" }
            );
            if (res.status != 200) {
                console.log("Vendas não disponíveis");
            } else {
                const sale = await res.json();
                console.log("esse eh o de dados", sale[0]);
                sale ? setSale(sale[0]) : setSale(null);
            }
        }

        const selectedClient = props.clients.find((client) => client._id === clientId);
        setSelectedClient(selectedClient);
        fetchSale()
    };

    const handleVoltar = () => {
        router.push("/adm/")
    }

    return (
        <div>
            <Navbar/>
        
        <div className={styles["client-container"]}>
            <div className={styles["client-list"]}>
             
                <h2>Client List</h2>
               
                <ul>
                    {props.clients && props.clients.map((client) => (
                        <li
                            key={client._id}

                            className={`${styles["client-item"]} ${selectedClient === client ? styles["active"] : ''}`}

                            onClick={() => handleClientClick(client._id)}
                        >
                            {client.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles["client-details"]}>
                {selectedClient ? (
                    <div>
                        <h2>Client Information</h2>
                        <div className={styles["client-info-box"]}>

                            <p>Name: {selectedClient.name}</p>
                            <p>Email: {selectedClient.email}</p>
                            <p>Phone: {selectedClient.phonenumber}</p>
                            <p>Called: {sale ? "yes" : "no"}</p>
                            {sale && <p>Client: {sale.saleConclusion === true ? "yes" : "no"}</p>}
                            {sale && sale.saleConclusion === true ? <p>Package: {sale.healthPackage}</p> : ""}
                            {sale && sale.saleConclusion === true ? <p>Payment form: {sale.paymentForm}</p> : ""}

                        </div>

                    </div>
                ) : (
                    <div>
                        <h2>Select a Client to view information</h2>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
    
};

export default ClientList;


