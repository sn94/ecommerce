

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router' 
import { ChevronDownIcon } from '@heroicons/react/outline';
import Lista from '../../../DataApp/CategoriasProducto';
import './styles.css';




const CategoryList = function (props) {

    const [showDropdown, setShowDropdown] = useState(false);
    //ocultar o mostrar el dropdown
    let product_categories_dropdown = showDropdown ? "" : "hidden";

    

    return <div className="product-categories" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}  >

        <button >Categorías      
        <ChevronDownIcon className="h-4" /></button>
        <ul className={product_categories_dropdown}>
            {Lista.map(
                (categoria, index) => 
                <li key={index}> 
                 <Link to={ "/productos/"+categoria.categoria_id }>  {categoria.descripcion} </Link> 
                  </li>)}
        </ul>
    </div>;

}

export default withRouter(CategoryList);