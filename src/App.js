
import './App.css';
import Navbar from './components/Navbar';
import SubCategoriasDeProducto from './components/Producto/ProductsCategoriesList';
import BuscaProducto from './components/Producto/ProductsList';

//Rutas
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Conector redux
import { connect } from 'react-redux';


function App(props) {


  return (

    <Router>
      <div className="App">
        <Navbar />
        
      </div>

      <Switch>

        <Route path="/productos/:categoria" exact  >
        <SubCategoriasDeProducto></SubCategoriasDeProducto>
        </Route>
        <Route path="/productos/:categoria/:subcategoria" exact>
          <BuscaProducto></BuscaProducto>
        </Route>
      </Switch>
    </Router>

/*
 <SubCategoriasDeProducto></SubCategoriasDeProducto>
 */
  );
}





//Indicar los estados
const mapStateToProps = (state) => {
  return {
    productos_loading: state.productos_loading
  };
};




export default connect(mapStateToProps, null)(App);
