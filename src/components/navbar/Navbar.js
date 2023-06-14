import Link from "next/link";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import styles from './Navbar.module.css';


export default function Navbar() {
    const [sidebar, setSidebar] = useState(true)


    const showSideBar = () => setSidebar(!sidebar)

    return (
        <div>
            <div className={styles.navbar}>
                <Link href={'#'} >
                    <FaIcons.FaBars onClick={showSideBar} />
                </Link>
            </div>
            <nav className={styles["nav-menu"]}>
                <ul className={styles["nav-menu-itens"]}>
                    
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link href={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>

                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}