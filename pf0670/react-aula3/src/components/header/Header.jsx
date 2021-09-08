import React, { useState } from 'react'
import './Header.css'

export default function Header(props) {

    const valorDoLogin = props.login
    let el = ""
    if (valorDoLogin == true) {
        el = props.children[0]
    } else {
        el = <li><a href="#contato">Contato</a></li>
    }


    return (

        <header>
            <nav>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#fotos">Fotos</a></li>
                    {el}
                </ul>
            </nav>
            {props.children[1]}
        </header >

    )
}
