import SearchBox from './SearchBox';
import ShoppingIcon from '../../../assets/shopping-icon.png';
import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';

import './styles.css';

export default function TopMenu() {
    return <div className="topmenu">



        <div className="flex flex-row items-center justify-between">

            <div className="topmenu-brand">
                <img className="logo" src={ShoppingIcon} alt="" />
                <span className="title">I♥Shopping</span>
            </div>

            <div className="container w-1/2">
                <SearchBox showDesktop={true}></SearchBox>

            </div>

            <div className="userbox">
                <span className="favoritos"> <HeartIcon className="h-10" /> <span className="favourite-counter">0</span> </span>
                <span className="shopping-cart"> <ShoppingCartIcon className="h-10" /> <span className="shopping-cart-counter">0</span> </span>
                <span className="user-sign">  <UserIcon className="h-10" />
                    <div className="flex flex-col">
                        <a className="hidden md:inline text-xs font-semibold" href="#nada">Registrarse</a>
                        <a className="hidden md:inline text-xs font-semibold" href="#nada" >Iniciar sesión</a>
                    </div>
                </span>
            </div>
        </div>


        <SearchBox showDesktop={false}></SearchBox>
    </div>;
}