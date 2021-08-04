import logo from './logo.svg';
import './App.css';
import logoCarro from './img/Carro.jpg'
import Cabecalho from './componentes/Cabecalho'
import Carros from './componentes/Carros'
import Parceiros from './componentes/Parceiros'
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Cabecalho/>
          <Carros/>
          <Parceiros/>
        </nav>

        <img src={logoCarro}/>
        
      </header>
    </div>
  );
}

