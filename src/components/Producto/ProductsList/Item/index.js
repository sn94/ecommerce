import './styles.css';

export default function Item(props) {
    return <div className="product-item ">
        <img className="imagen" src={props.img} alt="" />
        <p className="titulo">{props.title}</p>
        <p className="precio">{props.price}</p>
    </div>

}