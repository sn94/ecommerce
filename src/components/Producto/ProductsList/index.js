import { connect } from 'react-redux';
import ProductoItem from './Item';
import SpinLoader from '../../SpinLoader';
import { useEffect } from "react";
import { LISTAR_PRODUCTOS } from '../../../DataHttp/Productos';//llamadas a la api
import { LISTAR_PRODUCTOS_LOADING, CAMBIAR_CATEGORIA_PRODUCTO } from '../../../DataRedux/Acciones/Productos';

import { useParams } from 'react-router';


/**
 * 
 *  \{\n.*\n.*\n.*(transparent\.png.*\n\s+\})
 */
function ListadoProductos(props) {

  const { categoria, subcategoria } = useParams();
 

  const categoriaDeDatosDisponible = () => {
    if ( typeof props.productos != undefined && Array.isArray( props.productos) && props.productos.length > 0 )
    return {
       
        categoria: props.productos[0].categoria,
        subcategoria: props.productos[0].subcategoria
      };
      return;
  }
  //Component did mount
  useEffect(() => {


    if (props.productos_list_error) {
      alert("Error al recuperar los datos");
    } else {
      const categoriaActual= categoriaDeDatosDisponible();
console.log( categoriaActual, categoria, subcategoria);

      
        if ( (categoria !== categoriaActual?.categoria || subcategoria !==  categoriaActual?.subcategoria ) || 
        (!props.productos_completed && !props.productos_loading) ) {

          
            props.CAMBIAR_CATEGORIA_PRODUCTO({ categoria_activa: categoria, sub_categoria_activa: subcategoria });
            props.LISTAR_PRODUCTOS_LOADING(true);
            props.LISTAR_PRODUCTOS({ categoria, subcategoria });
    
         
        } 
    }
  });


  return props.productos_loading ? <SpinLoader></SpinLoader> :
    <div className="container    grid grid-cols-5">
      {props.productos.map((ar, index) => <ProductoItem key={index} {...ar}></ProductoItem>)}
    </div>;

}

const mapStateToProps = (state) => {
  return {
    categoria_activa: state.categoria_activa,
    sub_categoria_activa: state.sub_categoria_activa,
    productos: state.productos,
    productos_loading: state.productos_loading,
    productos_completed: state.productos_completed,
    productos_list_error: state.productos_list_error
  };
};

//Indicar las acciones

const mapDispatchToProps = dispatch => {
  return {

    LISTAR_PRODUCTOS: (parametros = undefined) => dispatch(LISTAR_PRODUCTOS(parametros)),

    LISTAR_PRODUCTOS_LOADING: (ar) => dispatch(LISTAR_PRODUCTOS_LOADING(ar)),

    CAMBIAR_CATEGORIA_PRODUCTO: (ar) => dispatch(CAMBIAR_CATEGORIA_PRODUCTO(ar))


  };
};




export default connect(mapStateToProps, mapDispatchToProps)(ListadoProductos);