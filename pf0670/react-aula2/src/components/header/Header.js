import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'
import Navbar2 from '../navbar/Navbar2'

export default function Header() {

    const [valorState, setValorState] = useState(5)
    let valoVariavel = 5
    
    const aumentar = ()=>{
        //Somando o valor da constante com 5 e atribuindo novamente a ela
        // através da função SET.
        setValorState(valorState + 5)
        valoVariavel+=5
    }

    return (
        <header>
            <h1>Aprendendo React!</h1>
            <p>Na prática</p>

            <Navbar valorState={aumentar}/>
            <hr/>
            <Navbar2>
                    <p>Children-1</p>
                    <p>Children-2</p>
                    <p>Children-3</p>
            </Navbar2>
            <Navbar2>
                    <p>Children-4</p>
            </Navbar2>

            <div>
                
                Determinando a diferença entre [USE-STATE] e Variável
                <p>ValorState : <span>{valorState}</span></p>
                <p>ValoVariavel : <span>{valoVariavel}</span></p>
                <button onClick={()=> aumentar()}>INCREASE</button>
            </div>
        </header>
    )
}
