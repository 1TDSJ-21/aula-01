import React from 'react'
import Corpo from '../corpo/Corpo'
import Header from '../header/Header'

export default function Master() {


    return (
        <div>
            <Header login={true}>
                <li>
                    <form>
                        <input type="submit" value="Login" />
                        <input type="text" />
                    </form>
                </li>
                <p>Informações</p>
            </Header>

            <Corpo />
        </div>
    )
}

