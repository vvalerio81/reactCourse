import Item from "./Item";

const ItemList = ({ item }) => {
    return (
        <div>
        {
            item.length > 0
            ? item.map(item => <Item key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} description={item.description} duration={item.duration} initialDate={item.initialDate} />)
            : <p>Cargando...</p>
        }
        </div>
    );
}

export default ItemList;