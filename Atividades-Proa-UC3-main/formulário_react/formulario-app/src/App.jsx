import './App.css'
import '../src/assets/Muralha.jpg'

function App() {
  const meuTeste= "Testando React";
  const numero= 123;

  return (
    <div>
     <h1>Criando um código em React</h1>
     <img src="../src/assets/Muralha.jpg" alt="Feira" />
      <p>{meuTeste}</p>
      <p>Valor numérico: {numero}</p>
    </div>
  );
}

export default App;