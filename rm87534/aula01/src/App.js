import logo from './logo.svg';
import logoCurso from './img/logoFiap.jpg'
import './App.css';
import Menu from './componentes/Menu';

export default function App() {


  return (
    <div className="App">
      <header className="App-header">
    
      <nav>
      <img src={logoCurso}/>
        <Menu/>
        
      </nav>
   
      </header>
      
    </div>
  );
}