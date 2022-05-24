import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    return(
        <div>
        <h1> {greeting} </h1>
        <ItemCount stock={5} initial={0} />
        </div>
    );
};

export default ItemListContainer;