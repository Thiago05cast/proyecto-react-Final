import React from "react";
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../useCounter/ItemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider.jsx";
import { Link } from "react-router-dom";
const ItemDetail = ({product}) => {

        const {addItems}= useContext(CartContext);
        const onAdd = (quantity) => {
        addItems(product, quantity);
    }


    return(
        <div className="catalogo">
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} />
            <p>{product.descripcion}</p>
            <p>stock:{product.stock}</p>
            <p>Marca:{product.category}</p>

            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>

            <Link to="/cart" className="goCart">Terminar mi compra</Link>
        </div>
    )
}

export default ItemDetail