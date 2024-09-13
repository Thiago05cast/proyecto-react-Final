import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'


const Item = ({item}) => {
  return(
    <>
      <Link to={`/item/${item.id}`} className='linkProductos'>
        <div key={item.id} className="card">
              <img src={item.imagen} alt={item.nombre} />
              <h2>{item.nombre}</h2>
              
              <p>${item.precio}</p>
            </div>
          
      </Link>
  </>
         )
            
        }
      
    
  


export default Item