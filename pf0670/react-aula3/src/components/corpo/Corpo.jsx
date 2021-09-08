import React from 'react'

export default function Corpo(props) {



    return (

        <section>
            <div onClick={() => props.alteraExemplo(props.valorExemplo)}>
                {props.elemento}
            </div>
        </section>
    )
}
