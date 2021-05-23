

const estadoInicial = {
    categoria_activa: undefined,
    sub_categoria_activa: undefined,
    productos: [],
    productos_loading: false,
    productos_completed: false,
    productos_list_error: false,
    categorias: [],
    categorias_completed: false,
    categorias_loading: false,

    fakeusers: [],
    fake_users_completed: false
};





//Funciones puras
const reducer = (estado = estadoInicial, action) => {

    let nuevoEstado = null;
  
    switch (action.type) {
        case "CAMBIAR_CATEGORIA_PRODUCTO": nuevoEstado = {
            ...estado,
            categoria_activa: action.data.categoria_activa,
            sub_categoria_activa: action.data?.sub_categoria_activa
        }; break;
        
        case "LISTAR_PRODUCTOS": nuevoEstado = {
            ...estado,
            productos: action.data,
            productos_completed: true,
            productos_loading: false
        }; break;

        case "LISTAR_PRODUCTOS_LOADING": nuevoEstado = {
            ...estado, productos_loading:  action.data
        }; break;

        case "LISTAR_PRODUCTOS_ERROR": nuevoEstado = {
            ...estado, productos: [],
            productos_loading: false,
            productos_completed: false,
            productos_list_error: true
        }; break;

        case "LISTAR_FAKE_USERS": nuevoEstado = { ...estado, fakeusers: action.data, fake_users_completed: true }; break;

        case "LISTAR_CATEGORIAS": nuevoEstado = {
            ...estado,
            categorias: action.data,
            categorias_completed: true,
            categorias_loading: false
        }; break;
        case "LISTAR_CATEGORIAS_LOADING": nuevoEstado = {
            ...estado,
            categorias_loading: true,

        }; break;

        default: nuevoEstado = { ...estado }; break;

    }
    return nuevoEstado;
}

export default reducer;

