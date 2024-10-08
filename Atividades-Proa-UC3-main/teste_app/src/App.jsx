
import genshin from './assets/imagens/genshin.png'
import pyro from './assets/imagens/pyro.png'
import './App.css'

function App() {
  return (
    <>
      <div>
      
        <a href="https://react.dev" target="_blank">
          <img src={genshin} alt="Genshin" className='genshin'/>
          <img src={pyro} alt='pyro' className='pyro' />
        </a>
      </div>
      <h1>Testando o meu primeiro App em REACTJs</h1>
      
    </>
  )
}

export default App
