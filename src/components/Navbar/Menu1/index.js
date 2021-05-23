import { useState } from "react";
import { MenuIcon } from '@heroicons/react/outline';
import MenuItem from '../MenuItem';
import ListaEnlaces from './Lista';
import './styles.css';



export default function MenuCategoria() {

    const [showCategories, setShowCategories] = useState(false);
    // onMouseEnter={ ()=> setShowCategories(true)} onMouseLeave={ ()=> setShowCategories(false)}
    return <div className="navbar-menu1" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}  >
        <h2 className="text-white flex flex-row items-center"  >
            <MenuIcon className="h-4" />
            <span className="md:block hidden" >Opciones</span></h2>
        <div className={showCategories ? "absolute rounded-b  " : "hidden"}>

            <ul className="sub-menu-item  "  >

                {
                    ListaEnlaces.map((arg, index) => <MenuItem key={index} data={arg} />)

                }
            </ul >
        </div>
    </div>;
}