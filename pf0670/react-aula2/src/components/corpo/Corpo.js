import React, {useState} from 'react'
import TabelaCor from '../tabelacor/TabelaCor'
import './Corpo.css'

export default function Corpo() {

   //Criando um objeto para estilizar através de style ou seja,
    // CSS inline.
    let tabela={
      display:'none'
  }

  //Criando um useState para alterar o Style
  const [estilo, setEstilo] = useState(tabela)

  //Declarando o useState
  const [aluno, setAluno] = useState('Priscila')

  const alteraEstilo = ()=>{
    let paragrafo={
      textAlign:'justify',
      color:'#ff0000',
      textIndent:'50px',
      fontSize:'2em',
      backgroundColor:'#0000ff' 
  }
    setEstilo(paragrafo)
  }

  let objSpan = {
    visibility:'visible',
    position:'static',
    border:'none',
    top:'80%',
    backgroundColor:'black'
  }

  const [cores, setCores] = useState(objSpan)
  const selecionaCor = (cell)=>{
    let fundo = 'black'
    
    if(cell == 1){
      fundo = 'green'
    }else if(cell == 2){
      fundo = 'red'
    }else if(cell == 3){
      fundo = 'blue'
    }else{
      fundo = 'blueviolet'
    }

    let objSpan = {
      visibility:'visible',
      position:'static',
      border:'none',
      top:'80%',
      backgroundColor:fundo
    }
    setCores(objSpan)
  }

  const deSelecionaCor = ()=>{
    let objSpan = {
      display:'none'
    }
    setCores(objSpan)
  }
 

   return(
      <>
        {
            /*
              Elemento HTML utilizando objeto passando a estilização por css inline.
            */
        }
         <div style={cores}>
            <p onClick={()=>selecionaCor()} onDoubleClick={()=>deSelecionaCor()}>Exemplo de utilização de Inserção de Style em elementos HTML no JSX. Click para ativar o estilizador e doubleclick para fechar.</p>
            <p>Exemplo de utilização de class css no JSX!</p>  
              <TabelaCor estilos={estilo} valorCel={selecionaCor}/>
        </div>
         
         <div>
             <pre className="exemplo1">
                 Exemplo de classe no JSX utilizando PRE.
             </pre> 
         </div>
         <div>
            <h2 className="exemplo1">Exemplos - [USE-STATE]</h2>
            <h2 className="exemplo1">Aluno aniversariante do dia  : <span className="aluno">{aluno}</span></h2>

            <button onMouseOver={()=> setAluno('Renato')} className="btAltera">Alterar</button>

            <button onMouseLeave={()=> alteraEstilo()} className="btAltera">SETANDO-ESTILO</button>
            


         </div>
      </>
)}