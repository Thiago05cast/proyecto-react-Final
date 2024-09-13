import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from '../../context/CartProvider';
import ImgCart from "../imgCart/ImgCart";

const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);

  return (
    <div className='NavCart'>
      <ImgCart/> 
      {getTotalProducts() === 0 ? null : getTotalProducts()}
      </div>
  )
}

export default CartWidget ;