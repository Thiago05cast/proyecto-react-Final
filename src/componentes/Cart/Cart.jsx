import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import CartDetail from './CartDetail/CartDetail';


const Cart = () => {

   const { cart, getTotal, getTotalProducts, removeItem, clearCart, buy } = useContext(CartContext);



   return (
            <div>
                { cart.length === 0 ? (
                    <p>no hay productos en el carrito</p>
                ) : ( 
                <>
                <CartDetail cart={cart} />
                </>
                )}
                
            </div>
        );
        };
    

export default Cart;