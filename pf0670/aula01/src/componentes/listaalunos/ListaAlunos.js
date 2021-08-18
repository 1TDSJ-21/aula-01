import React from 'react'

export default function ListaAlunos(props){
    return(
        <>
            <ul id='listaAlunos-01'>
                <li>{props.alunos[0]}</li>
                <li>{props.alunos[1]}</li>
                <li>{props.alunos[2]}</li>
                <li>{props.alunos[3]}</li>
                <li>{props.addAl()}</li>
            </ul>
        </>
    )
}