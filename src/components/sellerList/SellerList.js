import React, { useState } from 'react';
import styles from "./SellerList.module.css";
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';
import Navbar from '../navbar/Navbar';
import Image from 'next/image';
import Logo from '../logoTitle/logoPrincipal';
import Grafico from '../chart/Chart';


const SellerList = (props) => {
  const [selectedSeller, setSelectedSeller] = useState(null);

  const [sales, setSales] = useState([])
  const [calls, setCalls] = useState([])

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
        console.log("esse eh o de vendas", sales);
        setSales(sales);
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
        console.log("esse eh o de ligacoes", calls);
        setCalls(calls);
      }
    }
    const selectedClient = props.sellers.find((seller) => seller._id === sellerId);
    setSelectedSeller(selectedClient);

    fetchCalls()
    fetchSales()

  };

  const handleVoltar = () => {
    router.push("/adm/")
  }

  return (
    <div>


<Navbar/>
    
    <div className={styles["seller-container"]}>
    
      <div className={styles["seller-list"]}>
        <h2>Seller List</h2>
        
        <ul>
          {props.sellers && props.sellers.map((seller) => (
            <li
              key={seller._id}

              className={`${styles["seller-item"]} ${selectedSeller === seller ? styles["active"] : ''}`}

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
            <div className={styles["seller-info-box"]}>
              <div>
                <Image src={'/worker.png'} width={110} height={110} />
              </div>
              <div className={styles.info}>

                <p>Name: {selectedSeller.name}</p>
                <p>Email: {selectedSeller.email}</p>
                <p>Phone: {selectedSeller.phoneNumber}</p>
                <p>Calls: {calls.length}</p>
                <p>Sales concluded: {sales.length}</p>
                {sales.length !== 0 ? <p> Total sales: €{sales && sales.map(sale => sale.healthPackage).reduce((acc, cur) => {
                  if (cur === 1) {
                    console.log("1")
                    return acc += 25
                  }
                  if (cur === 2) {
                    console.log("2")
                    return acc += 35
                  }
                  if (cur === 3) {
                    console.log("3")
                    return acc += 45
                  }
                  if (cur === 4) {
                    console.log("4")
                    return acc += 60
                  }
                }, 0)},00 </p> : ""}
              </div>
            </div>
            <div className={styles["graph"]}>
             <Grafico values={[calls.length, sales.length]}/>

            </div>
          </div>

        ) : (
          <div>
            <h2>Select a seller to view information</h2>
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default SellerList;


