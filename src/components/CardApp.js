import React from 'react'
import './CSS/CardApp.css'

const CardApp = (props) => {
  return (
    <div className='CardI'>
        <img src={props.img}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button>{props.boton}</button>
    </div>
  )
}

export default CardApp