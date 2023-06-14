import Link from "next/link";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { useState } from "react";

export const SidebarData = [
    {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
}, {
    title: "Perfil",
    path: "/",
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
},{
    title: "Vendedores",
    path: "/",
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
}
]