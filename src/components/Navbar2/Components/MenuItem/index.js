import { useState } from "react";

function MenuItemDropdown( {data}) {

    const [showSubMenu, setShowSubMenu] = useState( false );

    return <li className="menu-item dropdown" onClick={ ()=>setShowSubMenu(true)}  onMouseLeave={()=>setShowSubMenu(false)}>
        <a href={data.url} className=""><i className={data.icon}></i> {data.title}</a>
         <ul className={showSubMenu ?  "sub-menu-item" : "hidden"}>
            {
                data.dropdown.map((data, index) => <MenuItem  data={data}  key={index} />  )
            }
        </ul>
    </li>;
}


export default function MenuItem({ data }) {

   
    return  "dropdown" in data ? <MenuItemDropdown data={data} /> :  <li  className="menu-item ">
    <a href={data.url} className=""><i className={data.icon}></i> {data.title}</a></li>;
}