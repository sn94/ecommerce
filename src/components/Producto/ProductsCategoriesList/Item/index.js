import './styles.css';
import {Link}  from 'react-router-dom';

export default function ProductCategoryItem({ data }) {


    const mostrarProductos= ()=>{ };

    return <div className="product-category-item "  onClick={ mostrarProductos}>
       <Link to={ `/productos/${data.categoria_principal}/${data.categoria_id}`} >
       <img src={data.img} alt=""   />
        <h3>{data.categoria}</h3>
       </Link>
    </div>;
}