import NavBar from './ components/NavBar';
import ItemListContainer from './ components/ItemListContainer';
import ItemCount from './ components/ItemCount';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="contador" >
        <div><ItemListContainer /></div>
        <div><ItemCount /></div>
      </div>
    </div>
  );
}

export default App;
