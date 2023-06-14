import React, { useState } from 'react';
import styles from "./SellerList.module.css";
import { useRouter } from 'next/router';
import {BiArrowBack}  from 'react-icons/bi';

const SellerList = (props) => {
  const [selectedSeller, setSelectedSeller] = useState(null);

  const [sales, setSales] = useState(0)
  const [calls, setCalls] = useState(0)

  const router = useRouter()

 
  const handleSellerClick = (sellerId) => {
    async function fetchSales() {

      const res = await fetch(
        `/api/adm/sales/${sellerId}`,
        { method: "GET" }
      );
      if (res.status != 200) {
        console.log("Vendas não disponíveis");
      } else {
        const sales = await res.json();
        console.log("esse eh o de dados", sales);
        setSales(sales.length);
      }
    }

    async function fetchCalls() {

      const res = await fetch(
        `/api/adm/calls/${sellerId}`,
        { method: "GET" }
      );
      if (res.status != 200) {
        console.log("Vendas não disponíveis");
      } else {
        const calls = await res.json();
        console.log("esse eh o de dados", calls);
        setCalls(calls.length);
      }
    }
    const selectedClient = props.sellers.find((seller) => seller._id === sellerId);
    setSelectedSeller(selectedClient);
    
    fetchCalls()
    fetchSales()
    
  };

  const handleVoltar = () =>{
    router.push("/adm/")
  }

  return (
   <div className={styles["seller-container"]}>
      <div className={styles["seller-list"]}>
        <BiArrowBack onClick={handleVoltar}/>
        <h2>Seller List</h2>
        <ul>
          {props.sellers && props.sellers.map((seller) => (
            <li
              key={seller._id}
             
              className={`${styles["seller-item"]} ${selectedSeller === seller._id ? styles["active"] : ''}`}
              
              onClick={() => handleSellerClick(seller._id)}
            >
              {seller.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["seller-details"]}>
        {selectedSeller ? (
          <div>
            <h2>Seller Information</h2>
            <p>Name: {selectedSeller.name}</p>
            <p>Email: {selectedSeller.email}</p>
            <p>Phone: {selectedSeller.phoneNumber}</p>
            <p>Calls: {calls}</p>
            <p>Sales concluded: {sales}</p>
          </div>
        ) : (
          <div>
            <h2>Select a seller to view information</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerList;


