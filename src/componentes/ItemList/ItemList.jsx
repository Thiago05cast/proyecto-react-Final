import React from 'react'
import Item from '../item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='cardContainer'>
        {products.map((item) =>(
            <Item key={item.id} item={item}/>
        ))}
    </div>
  )
  
}

export default ItemList;