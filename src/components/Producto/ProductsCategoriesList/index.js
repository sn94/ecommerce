import { useParams } from 'react-router';
import Categories from '../../../DataApp/CategoriasProducto';
import CategoryItem from './Item';
//import store
import store from '../../../DataRedux/Store';
 

export default function SubcategoriaProducto() {

    const unsubscribe = store.subscribe(() =>
        console.log('State after dispatch: ', store.getState())
    )


    const { categoria } = useParams();


    //CAMBIAR CATEGORIA ACTIVA
   /* if (store.getState("categoria_activa") !== categoria) {

        store.dispatch( { type: "CAMBIAR_CATEGORIA_PRODUCTO", data: { "categoria_activa": categoria } } );
    }*/

    console.log("Leyendo estado desde ProductCategoryList", store.getState());

    const lista_categorias_productos = Categories.filter(ar => ar.categoria_id === categoria);
    let subcategoria_data = [];
    let categoria_data = {};


    //Encontrado!
    if (lista_categorias_productos.length > 0) {
        categoria_data = lista_categorias_productos[0];
        subcategoria_data = categoria_data.subcategorias;
    }

    unsubscribe();
    //Mostrar SubCategorias 
    return <div className="w-full flex flex-col justify-center">
        <h3 className="text-center text-3xl my-2">{categoria_data.categoria}</h3>
        <div className="w-3/4 mx-auto grid grid-flow-row grid-cols-3 gap-4">
            {subcategoria_data.map((subcategoria, indice) =>
                <CategoryItem key={indice} data={subcategoria} />
            )}
        </div>
    </div>;

}