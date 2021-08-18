import React from 'react'
//Importando o componente para utilização
import Menu from '../Menu'

export default function Cabecalho(){
 
    //Atributo que será enviado para o componente Menu
    const linkInicio = 'http://localhost:3000'
    const linkReact  = 'http://localhost:3000/react.html'
    const linkCurso  = 'http://localhost:3000/cursos.html'

    return(
        <header className="App-header">
           <nav>
            <Menu inicio={linkInicio} page_react={linkReact} page_curso={linkCurso} />
           </nav>
    </header>
    )
}