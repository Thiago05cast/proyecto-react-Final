import { count } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';


const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    

        const decrement = () =>{
            if(count >1){
                setCount(count - 1);
            }
        }

        const increment = () => {
            if(count<stock){
              setCount(count + 1);  
            }
            
        }
 
        
 
 
    return (
        <div>
            <h1>contador:</h1>

            <button onClick={decrement}>menos</button>
            <p>{count} </p>
            <button onClick={increment}>mas</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>

)

}

export default ItemCount;