import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartProvider'
import { Link } from 'react-router-dom'
const CartDetail = ({cart}) => {
    const { getTotal, getTotalProducts, removeItem, clearCart, buy } = useContext(CartContext);
  return (
    <div>
        <h2>Carrito de compras</h2>

        {cart.map((item) => (
                    <div key={item.product.id}>
                      <img src={item.product.imagen} alt={item.product.nombre} />
                        <p>producto:{item.product.nombre}</p>
                        <p>cantidad:{item.quantity}</p>
                        <p>Precio unidad:{item.product.precio}</p>
                        
                        <button onClick={()=> removeItem(item.product.id)}>Eliminar</button>
                        
                    </div>
                    ))}

        <h3>Total productos: {getTotalProducts()}</h3>
        <h3>Total a pagar: ${getTotal()}</h3>
        <button onClick={clearCart}>Vaciar carrito</button>
        
        <Link to={"/checkout"} className='check'>Comprar</Link>
        
    </div>
  )
}

export default CartDetail