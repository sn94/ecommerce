import * as ProductAction from '../DataRedux/Acciones/Productos';
import Constantes from './Constants.json';


//Llamadas a la API

export const LISTAR_PRODUCTOS = (parametros) => {
  console.log("LLamando a Listar productos");
   



  return async dispatch => {
    //primer update
 
   
    try {
      let url = Constantes.BASE_URL.concat("src/Test_data/ServerData.php");
      let setting = parametros === undefined ? {} :
        {
          method: "POST",
          headers: { 'Content-Type': "application/json" },
          body: JSON.stringify(parametros)
        };
      let req = await fetch(url, setting);
 
      let resp = await req.json();

      setTimeout(() => {
        dispatch(ProductAction.LISTAR_PRODUCTOS(resp));
       
      }, 3000);
      ;
    } catch (err) {
      console.log(err);
      dispatch(ProductAction.LISTAR_PRODUCTOS_ERROR());
    }
  }

};



export const LISTAR_CATEGORIAS = () => {
  console.log("Listar categorias");

  return async dispatch => {

    dispatch(ProductAction.LISTAR_CATEGORIAS_LOADING());
    try {
      let url = Constantes.BASE_URL.concat("src/test_data/ServerCategories.php");
      let req = await fetch(url);
      let resp = await req.json();
      setTimeout(() => dispatch(ProductAction.LISTAR_CATEGORIAS(resp)), 1000);
    } catch (err) {
      console.log(err);
      dispatch(ProductAction.LISTAR_PRODUCTOS_ERROR());
    }
  }

};



