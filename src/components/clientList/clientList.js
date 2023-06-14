import React, { useState } from 'react';
import styles from "./clientList.module.css";

const ClientList = (props) => {
  const [selectedClient, setSelectedClient] = useState(null);


  const handleClientClick = (ClientId) => {
    const selectedClient = props.clients.find((client) => client._id === ClientId);
    setSelectedClient(selectedClient);
  };

  return (
   <div className={styles["client-container"]}>
      <div className={styles["client-list"]}>
        <h2>Client List</h2>
        <ul>
          {props.clients && props.clients.map((client) => (
            <li
              key={client._id}
             
              className={`${styles["client-item"]} ${selectedClient === client._id ? styles["active"] : ''}`}
              
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
            <p>Name: {selectedClient.name}</p>
            <p>Email: {selectedClient.email}</p>
            <p>Phone: {selectedClient.phonenumber}</p>
          </div>
        ) : (
          <div>
            <h2>Select a Client to view information</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientList;


