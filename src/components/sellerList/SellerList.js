import React, { useState } from 'react';
import styles from "./SellerList.module.css";

const SellerList = (props) => {
  const [selectedSeller, setSelectedSeller] = useState(null);


  const handleClientClick = (sellerId) => {
    const selectedClient = props.sellers.find((seller) => seller._id === sellerId);
    setSelectedSeller(selectedClient);
  };

  return (
   <div className={styles["seller-container"]}>
      <div className={styles["seller-list"]}>
        <h2>Seller List</h2>
        <ul>
          {props.sellers && props.sellers.map((seller) => (
            <li
              key={seller._id}
             
              className={`${styles["seller-item"]} ${selectedSeller === seller._id ? styles["active"] : ''}`}
              
              onClick={() => handleClientClick(seller._id)}
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


