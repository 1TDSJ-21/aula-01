import React, { useState } from 'react'
import Corpo from '../corpo/Corpo'

export default function Header(props) {

    const objEx = [<div id="exemplo-1">, <h2> Exemplo - 1</h2>, </div>]

    const [exemplo, setExemplo] = useState(objEx)

    const selecionaExemplo = (ex) => {

        if (ex == 1) {
            const objEx = [<div id="exemplo-1">, <h2> Exemplo - 1</h2>, </div>]

            setExemplo(objEx)
        } else if (ex == 2) {
            const objEx = [<div id="exemplo-2">, <h2> Exemplo - 2</h2>, </div>]

            setExemplo(objEx)
        } else {
            const objEx = [<div id="exemplo-3">, <h2> Exemplo - 3</h2>, </div>]
            setExemplo(objEx)
        }

    }

    return (

        <header>
            <nav>
                <ul>
                    {props.children.map(
                        (c, i) =>

                            <li key={i} onClick={() => props.acao(<Corpo alteraExemplo={selecionaExemplo} valorExemplo={i + 1} elemento={exemplo} />)} >

                                <a href="#">{c} - {i + 1}</a>

                            </li>
                    )}

                </ul>
            </nav>

        </header >

    )
}
