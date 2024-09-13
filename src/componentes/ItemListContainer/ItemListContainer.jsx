import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import Spinner from '../spinner/spinner'
import { getDocs, collection, getFirestore, query, where} from "firebase/firestore";
import firebase from 'firebase/compat/app'


const ItemListContainer = ({greeting}) => {

    const [products,setProducts] = useState ([])
    const [loading,setLoading] = useState(true)

    const {categoryId} = useParams();

    useEffect(() => {
    
      setLoading(true)

      const db = getFirestore();
      const myProducts = categoryId ? query(collection(db, "item"),where("category","==",categoryId))
      : collection(db, "item");

      getDocs(myProducts).then((res)=> {
        const newProducts = res.docs.map((doc)=> {
          const data = doc.data();
          return {id: doc.id, ...data}
        });
        setProducts(newProducts);

      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));


    },[categoryId])

  return (
    <div className='container'>
        <h1>{greeting}</h1>

        
        
        {loading ? <Spinner/> : <ItemList products={products}/>}      </div>
)}
      
    
    
  
  


export default ItemListContainer