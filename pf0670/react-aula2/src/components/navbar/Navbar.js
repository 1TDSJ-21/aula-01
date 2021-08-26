import React from 'react'

export default function Navbar(props) {

    const valor = props.valorState

    return (
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Exemplo</a></li>
                <li><button onClick={()=>valor()}>INCREASE-NO-FILHO</button></li>
            </ul>
        </nav>  
  )
}