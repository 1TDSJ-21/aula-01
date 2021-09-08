import React, { useState } from 'react'
import Corpo from '../corpo/Corpo'
import Header from '../header/Header'

export default function Master() {

    const [componente, setComponente] = useState('<Corpo />')

    return (
        <div>
            <Header acao={setComponente}>
                <span>Exemplo</span>
                <span>Exemplo</span>
                <span>Exemplo</span>
            </Header>
            <div>
                {componente}
            </div>
        </div>
    )
}

