import './App.css';
function App() {
  
  const name ="Lucas"
  const newName = name.toLocaleUpperCase()

  function sum(a,b)
  {
    return a + b
  }
  const url = "https://via.placeholder.com/150*"

  return (
    <div className="App">
<h1>Alternando o JSX</h1>
<p>Olá, {newName}</p>
<p> Soma: {sum(1,2)} </p>
<img src={url} alt="minha imagem"></img>
    </div>
  );
}

export default App;
