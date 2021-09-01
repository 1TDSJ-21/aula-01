import React from 'react'

import ListaAlunos from '../listaalunos/ListaAlunos'
import logoCurso from '../../img/logo-1tdsj.jpg'
import Cabecalho from '../cabecalho/Cabecalho'

export default function Corpo () {

    const aluno = 'Marcos Maciel'
    const curso = '1TDSJ'

    //Atributo que será enviado para o componente ListaAlunos
    const lista = ['Luis', 'Alexandre', 'Allen','Cristine']

        //Criando a função atributo para ser enviada ao Componente Filho
        const novoAluno = ()=> 'Guilherme'

    return(
        <>
        <Cabecalho/>
        <div className="App-body">
        <ListaAlunos alunos={lista} addAl={novoAluno}/>
        <h2>Nome do Aluno : {aluno}</h2>
        <h2>Curso : {curso}</h2>
        <div>
            <img src={logoCurso}/>
        </div>
        <div>
            <form>
                <div>
                    <label>Adicionar novo aluno:</label>
                    <input type="txtAl" placeholder="Digite o nome do aluno" required/>
                </div>
                <div>
                    <input type="button" value="ADICIONAR" id="botao"/>
                </div>
            </form>
        </div>
      </div>
      </>
    )

}