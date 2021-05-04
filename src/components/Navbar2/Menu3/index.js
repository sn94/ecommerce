import {ChevronDownIcon} from '@heroicons/react/outline';
import { useState } from 'react';
import MenuItem from '../Components/MenuItem';
import ListaDestacados from './ListaDestacados';
import './styles.css';


 
export default function Menu3() {

    const [showMenuDestacados, setShowMenuDestacados]= useState(false);

    return <div  className="navbar-menu3 flex flex-row">
        <div id="custom_html-5" className="menu-item border-r-2 pr-2 mr-2">
            <div className="textwidget custom-html-widget">
                <div id="lang_sel">
                    <ul onMouseEnter={()=>setShowMenuDestacados(true)} onMouseLeave={()=>setShowMenuDestacados(false)} >
                        <li>
                            <a href="#" className="flex flex-row items-center">Destacadas
                            <ChevronDownIcon className="h-4"  />
                            </a>
                            <ul className={ showMenuDestacados ? "sub-menu-item  rounded-b  px-2 pt-1  absolute" : "hidden"} >
                                {
                                    ListaDestacados.map( (arg)=>  <MenuItem data={arg} /> )
                                }
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="custom_html-2" className="menu-item  border-r-2 pr-2 mr-2">
            <div className="textwidget custom-html-widget"><a href="https://www.llevauno.com.py/apple-store/">Apple</a></div>
        </div>
        <div id="custom_html-3" className="menu-item  border-r-2 pr-2 mr-2">
            <div className="textwidget custom-html-widget">
                <a href="https://www.llevauno.com.py/marketplace/">Marketplace</a>
            </div>
        </div>
        <div id="custom_html-4" className="menu-item">
            <div className="textwidget custom-html-widget">
                <a href="https://www.llevauno.com.py/boutique/">Boutique</a>
            </div>
        </div>
    </div>
        ;
}