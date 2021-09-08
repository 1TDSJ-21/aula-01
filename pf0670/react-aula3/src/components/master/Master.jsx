import React, { useState } from 'react'
import Corpo from '../corpo/Corpo'
import Header from '../header/Header'

export default function Master() {
    const [conteudo, setConteudo] = useState(<Header />)
    const alteraConteudo = () => {

        if (window.screen.width >= 550) {
            setConteudo(<Header />)
        } else {
            setConteudo(<Corpo />)
        }
    }

    return (
        <div>
            {
                window.onresize = () => {
                    clearTimeout();
                    setTimeout(alteraConteudo, 100);
                }
            }

            {conteudo}

        </div>
    )
}

