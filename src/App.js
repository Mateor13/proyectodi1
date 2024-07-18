import './App.css';
import Btn from './componentes/boton.js';
import Txt from './componentes/texto.js';
import Messi from './imagenes/a3a34890-7f03-11ed-a7e9-6563dc325d4d.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Txt/>
        <img src={Messi} className='Messi' alt='messi'/>
        <Btn/>
      </header>
    </div>
  );
}

export default App;
