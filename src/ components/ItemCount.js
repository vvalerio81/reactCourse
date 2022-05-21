
import { useState } from "react";


const ItemCount = () => {


    const [cantidad, setCantidad] = useState(0);

    const increment = () => {

        if (cantidad<5) setCantidad(cantidad+1);

    }

    const decrease = () => {

        if (cantidad>1) setCantidad(cantidad-1)
        else alert("Stock no disponible!");
        setCantidad(cantidad-1);
    }


    return(
        <div>
            <tr>
                <td className="celdas"><button onClick={decrease} > - </button></td>
                <td className="celdas"> <p> {cantidad} </p></td>
                <td className="celdas"><button onClick={increment} > + </button></td>
             </tr>
        </div>

    );


};

export default ItemCount;