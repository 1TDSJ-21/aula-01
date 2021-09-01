import React, { useState } from 'react'
import Carreira from '../carreira/Carreira'
import Contato from '../contato/Contato'
import Corpo from '../corpo/Corpo'
import Info from '../info/Info'
import Sobre from '../sobre/Sobre'
import './Header.css'

export default function Header() {

    const [componente, setComponente] = useState(<Corpo/>)

    return (
<>
        <header>

            <nav> 
                <ul>
                    <li><a href="#" onClick={()=> setComponente(<Corpo/>)}>Início</a></li>
                    <li><a href="#" onClick={()=> setComponente(<Sobre/>)}>Sobre</a></li>
                    <li><a href="#" onClick={()=> setComponente(<Carreira/>)}>Carreira</a></li>
                    <li><a href="#" onClick={()=> setComponente(<Info/>)}>Info</a></li>
                    <li><a href="#" onClick={()=> setComponente(<Contato/>)}>Contato</a></li>
                </ul>
            </nav>

        </header>

        {componente}
</>
    )
}
