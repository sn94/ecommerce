 export const LISTAR_PRODUCTOS= (  arg)=>({ type:  "LISTAR_PRODUCTOS", data: arg });
 export const LISTAR_PRODUCTOS_LOADING= ( arg)=>({ type:  "LISTAR_PRODUCTOS_LOADING", data: arg });
 export const LISTAR_PRODUCTOS_COMPLETED= ()=>({ type:  "LISTAR_PRODUCTOS_COMPLETED" });
 export const LISTAR_PRODUCTOS_ERROR= ()=>({type: "LISTAR_PRODUCTOS_ERROR"});
 
 //Categorias

 export const LISTAR_CATEGORIAS= (  arg)=>({ type:  "LISTAR_CATEGORIAS" , data: arg });
 export const LISTAR_CATEGORIAS_LOADING= ()=>({ type:  "LISTAR_CATEGORIAS_LOADING" });

 export const CAMBIAR_CATEGORIA_PRODUCTO= (arg)=> ({ type:  "CAMBIAR_CATEGORIA_PRODUCTO" , data: arg });