import logo from './logo.svg'
import './App.css'
import logoCurso from './img/logo-1tdsj.png'
//Importando o componenete para utilização 
import Menu from './componentes/Menu'

export default function App() {
  const aluno = 'Guilherme Oliveira'
  const curso = '1TDSJ'


  return (
    <div className="App">
      <header className="App-header">

        <nav>
          <Menu/>
        </nav>

        <h2>Nome do Aluno</h2>
        <h2>Curso: 1TDSJ </h2>
        <div>
          <img src={logoCurso}/>
        </div>
      </header>
    </div>
  );
}