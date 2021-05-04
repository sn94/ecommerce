import './styles.css';
import TopMenu from './TopMenu';
import MenuCategoria from './Menu1';
import MenuCentral from './Menu2';
import MenuDerecha from './Menu3';

export default function Navbar2() {


    return <header>
        <TopMenu></TopMenu>
        <div className="main-menu md:block hidden"> 
                <div className="sm:flex sm:flex-col md:grid md:grid-cols-12">
                    <div className=" sm:block md:col-span-3">
                        <MenuCategoria />
                    </div>
                    <div className="  md:flex md:flex-row  md:justify-between  md:col-span-9   ">
                        <MenuCentral />
                        <MenuDerecha />
                    </div>
                </div> 
        </div>
    </header>;
}