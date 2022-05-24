import NavBar from './ components/NavBar';
import ItemListContainer from './ components/ItemListContainer';
import './App.css';

const App = () => {
  return (
  
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a tu carrito"/>
    </div>
  );
}

export default App;
