import React from 'react'

export default function ListaAlunos(props){

    //Criando um MAP para iterar(Listar,Ler) a lista de alunos.
    const lista = props.alunos.map(
        (c,i)=>
        <li key={i}><a>{i+1} - {c}</a></li>
    )

    return(
        <>
            <ul>
                {lista}
            </ul>

            <ul>
                {props.alunos.map(
                    (c,i)=>
                    <li key={i}><a>{c}</a></li>
                    )
                }
            </ul>
 
                {/*
                <li>{props.alunos[0]}</li>
                <li>{props.alunos[1]}</li>
                <li>{props.alunos[2]}</li>
                <li>{props.alunos[3]}</li>
                <li>{props.addAl()}</li>
                */}
            
        </>
    )
}