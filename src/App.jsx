import React, { useEffect, useState , useContext } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/navbar/navbar'
import CartWidget from './componentes/CartWidgets/CartWidget'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './componentes/error/error'
import CartProvider from './context/CartProvider';
import Cart from './componentes/Cart/Cart';
import { db } from './main';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Checkout from './componentes/Checkout/Checkout'


const App = () => {
        const [products, setProducts]=useState([]);

        useEffect(() =>{
                const db =getFirestore();

                const itemsCollection = collection(db, "item")

                getDocs(itemsCollection).then((snapshot) => {
                        setProducts(snapshot.docs.map((doc)=> (
                                {id: doc.id,...doc.data()}
                        )))
                })
        },[])
        
        console.log(products);

        
      return(
        <>
                <CartProvider>
                                <BrowserRouter>
                                
                                <Navbar/>
                                
                                        <Routes>
                                        
                                                <Route path='/' element={<ItemListContainer greeting={"Los Mejores Celulares"}/>}> </Route>
                                                
                                                <Route path='/Item/:id' element={<ItemDetailContainer/>}> </Route>

                                                <Route path='/category/:categoryId' element={<ItemListContainer/>}> </Route>

                                                <Route path='/checkout' element={<Checkout/>}></Route>

                                                <Route path='/cart' element={<Cart/>}> </Route>

                                                <Route path='*' element={<Error/>}> </Route>
                                                
                                        </Routes>
                               
                                </BrowserRouter>
                </CartProvider>
        </>
      )
};

export default App;
