import Link from "next/link";
import { useState } from "react";

import styles from './Navbar.module.css';
import LogoPequeno from "../logoTitle/logoPequeno";


export default function Navbar() {
    
    return (
        <div style={{backgroundColor:'rgba(23,88,97)'}}>
            <div className={styles.navbar}>
                <LogoPequeno/>
                <div className={styles.options}>

                <Link href={'/adm'} >
                    <span className={styles.text}>Home</span>
                </Link>
                <Link href={'/adm/data/sellers'} >
                    <span className={styles.text}>Sellers</span>
                </Link>
                <Link href={'/adm/data/clients'} >
                    <span className={styles.text}>Clients</span>
                </Link>

                </div>
                
                
               
            </div>
            
        </div>
    )
}