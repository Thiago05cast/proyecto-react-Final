import React from 'react'
import "./Checkout.css"
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore'

const Checkout = () => {

    const { cart,getTotal,getTotalProducts,clearCart} = 
    useContext(CartContext);

    const [nombre,setNombre] = useState(""); 
    const [apellido,setApellido] = useState("");
    const [celular,setCelular] = useState("");
    const [email,setEmail] = useState("");
    const [emailConfirmacion,setEmailConfirmacion] = useState("");
    const [error,setError] = useState("");
    const [orderId,setOrderId] = useState("");


    const handleForm =  (e) => { 
        e.preventDefault();
        

        if(!nombre || !apellido || !celular || !email || !emailConfirmacion){
            setError("porfavor completa todos los datos");
            return;
        }
        if(email !== emailConfirmacion){
            setError("Los mails no coinciden");
            return;
        }

        const db= getFirestore();

        const order ={
            items: cart.map((product) => ({
                id: product.product.id,
                nombre: product.product.nombre,
                quantity: product.quantity,
            })),
            total: getTotal(),
            nombre,
            apellido,
            celular,
            email,
        };

        Promise.all(
            order.items.map(async (productOrder)=> {
                const productRef = doc(db, "item", productOrder.id)
                const productDoc = await getDoc(productRef);
                const stock = productDoc.data().stock;
                
                await updateDoc(productRef, {
                    stock: stock - productOrder.quantity,
                })
            })
        ).then(() => {
            addDoc(collection(db, "orders"),order)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch((error)=> {
                console.log("Error al añadir documento", error);
                setError("Error al generar la orden");
            })
        })
        .catch((error)=>{
            console.log("Error", error);
            setError("Hubo un problema al actualizar el stock");
        })
    }

  return (
    <div>
        <h2>Ingresa tus datos</h2>

        <div>
            
        {cart.map((product)=> (
            <div key={product.id}>
                <p>{""} {product.product.nombre}</p>
                <p>{product.product.precio}</p>
                <hr/> 
            </div>
        ))}

        </div>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Celular</label>
                <input type="number" onChange={(e)=> setCelular(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="mail" onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email de confirmacio</label>
                <input type="mail" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
            </div>

            <button type="submit">Generar orden de compra</button>

            {error && <p>{error}</p>}
        
            {orderId && (
                <p>!Gracias por su compra¡ Tu numero de orden es : {orderId}
                {""}
                </p>
            )}
        
        
        </form>
    
    
    </div>

  )
}

export default Checkout