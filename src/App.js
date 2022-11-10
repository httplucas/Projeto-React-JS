import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
function App() {

  const nome = "Vania"
  return (
    <div className="App">
      <Frase/>
      <Frase/>
  <SayMyName nome="Lucas"/>
  <SayMyName nome="Joao"/>
  <SayMyName nome={nome}/>
  <Pessoa nome="Lucas" idade="18" profissao="Dev" foto="https://via.placeholder.com/150" />
  <List/>
    </div>
  );
}

export default App;
