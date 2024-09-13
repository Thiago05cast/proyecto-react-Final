import React from 'react'
import {Link} from 'react-router-dom'
import './error.css'

const Error = () => {
  return (
    <div>
        <h1>Error 404, pagina no encontrada</h1>
        <Link to="/">Volver</Link>
        

    </div>
  )
}

export default Error;