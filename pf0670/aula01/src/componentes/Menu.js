import React from 'react'

export default function Menu(props){
    return(
        <>
            <div>
                <a href={props.inicio}>Início</a> | <a href={props.page_react}>React</a> | <a href={props.page_curso}>Cursos</a>
            </div>
            <hr/>
        </>
    )
}