import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Carros from './componentes/Carros';
import CarroFoto from './img/carro.jpg'
import Parceiros from './componentes/Parceiros';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={CarroFoto}/>
        <Cabecalho/>
        <Carros/>
        <Parceiros/>
      </header>
    </div>
  );
}
